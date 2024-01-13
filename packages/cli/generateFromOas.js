#!/usr/bin/env node

import * as fs from 'node:fs'
import * as path from 'node:path'
import {parseArgs} from 'node:util'
import {generateFromOas} from '@opensdks/cli'

const {
  positionals: [filename],
  values: {debug},
} = parseArgs({
  options: {
    debug: {type: 'boolean', short: 'd'},
  },
  allowPositionals: true,
})
if (!filename) {
  throw new Error('You must specify a filename')
}
const ret = await generateFromOas(filename)

if (debug) {
  console.log(ret.meta)
  console.log(ret.types)
} else {
  const outName = path.basename(filename, path.extname(filename))
  // TODO: Get rid of this hard coding...
  fs.writeFileSync('src/' + outName + '.meta.ts', ret.meta)
  fs.writeFileSync(outName + '.types.d.ts', ret.types)
}
