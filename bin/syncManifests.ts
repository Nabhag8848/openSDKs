import * as fs from 'node:fs/promises'
import {dirname, join as pathJoin} from 'node:path'
import * as url from 'node:url'
import {convertObj} from 'swagger2openapi'
import {
  generateMultiFileFromOas,
  getJson,
  getText,
  parseJsonOrYaml,
} from '@opensdks/cli'
import type {DownloadableOpenAPI, ManifestInfo} from '../manifests/index.js'
import manifestMap from '../manifests/index.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const manifests = Object.entries(manifestMap).map(
  ([name, manifest]) => ({
    ...(manifest as ManifestInfo),
    name,
  }),
)

export type Manifest = (typeof manifests)[number]

export async function syncManifests() {
  await Promise.all(manifests.map(syncManifest))
}

// TODO: Move most of these functionality into opensdks/cli

export async function syncManifest(m: Manifest) {
  const basePath = pathJoin(__dirname, `../sdks/sdk-${m.name}`)
  await fs.mkdir(basePath, {recursive: true})

  // Do downloads
  async function download() {
    const downloads =
      typeof m.download === 'string'
        ? [{name: m.name, url: m.download} satisfies DownloadableOpenAPI]
        : m.download
          ? await m.download?.()
          : []

    await Promise.all(
      downloads.map(async (d) => {
        const oasText = await downloadOas(d)
        const format =
          d.format ??
          {
            json: 'json',
            yaml: 'yaml',
            yml: 'yaml',
          }[d.url.split('.').pop()?.toLowerCase() ?? ''] ??
          'json'

        console.log(`[${m.name}] Downloading ${d.url} ${format}`)
        const oasPath = pathJoin(basePath, `${d.name}.oas.${format}`)
        await fs.writeFile(oasPath, oasText)
      }),
    )
  }

  async function generate() {
    if (m.generate) {
      await m.generate()
    } else {
      console.log(`[${m.name}] convertYamlToJson`)
      await convertYamlToJson(basePath)
      console.log(`[${m.name}] convertSwagger2ToOpenAPI`)
      await convertSwagger2ToOpenAPI(basePath)
      console.log(`[${m.name}] generateTypes`)
      await generateTypes(basePath)
    }
  }

  await download()
  await generate()
}

export async function convertYamlToJson(dir: string) {
  const fileNames = await fs.readdir(dir)
  const oasFilenames = fileNames.filter((p) => p.endsWith('.oas.yaml'))

  await Promise.all(
    oasFilenames.map(async (oasName) => {
      const yamlStr = await fs.readFile(pathJoin(dir, oasName), 'utf8')
      const json = parseJsonOrYaml(yamlStr)
      await fs.writeFile(
        pathJoin(dir, oasName.replace('.oas.yaml', '.oas.json')),
        JSON.stringify(json, null, 2),
      )
    }),
  )
}

export async function convertSwagger2ToOpenAPI(dir: string) {
  const fileNames = await fs.readdir(dir)
  const oasFilenames = fileNames.filter((p) => p.endsWith('.oas.json'))

  await Promise.all(
    oasFilenames.map(async (oasName) => {
      const text = await fs.readFile(pathJoin(dir, oasName), 'utf8')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const json = parseJsonOrYaml(text) as Parameters<typeof convertObj>[0]

      if (json.swagger) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {openapi} = await convertObj(json, {})
        await fs.writeFile(
          pathJoin(dir, oasName),
          JSON.stringify(openapi, null, 2),
        )
      }
    }),
  )
}

export async function generateTypes(dir: string) {
  const fileNames = await fs.readdir(dir)
  await fs.mkdir(pathJoin(dir, 'src'), {recursive: true})
  const oasFilenames = fileNames.filter((p) => p.endsWith('.oas.json'))

  await Promise.all(
    oasFilenames.map(async (oasName) => {
      const ret = await generateMultiFileFromOas(pathJoin(dir, oasName))
      await fs.writeFile(
        pathJoin(dir, 'src', oasName.replace('.oas.json', '.oas.meta.ts')),
        ret.meta,
      )
      await fs.writeFile(
        pathJoin(dir, oasName.replace('.oas.json', '.oas.types.d.ts')),
        ret.types,
      )
    }),
  )
}

export async function downloadOas(ds: DownloadableOpenAPI) {
  if (ds.type === 'redoc') {
    return downloadRedocOas(ds.url)
  }
  return getText(ds.url)
}

export async function downloadRedocOas(url: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageData: any = await getJson(url)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const redocStore = JSON.parse(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    pageData.result.data.contentItem.data.redocStoreStr,
  )
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const oasText = JSON.stringify(redocStore.definition.data, null, 2)
  return oasText
}

export default syncManifests

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
if (import.meta.url.endsWith(process.argv[1]!)) {
  void syncManifests()
}
