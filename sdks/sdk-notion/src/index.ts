/**
 * This file was generated by @opensdks/cli, do not edit manually.
 * For bugs & feature requests, please open an issue on the [GitHub](https://github.com/tonyxiao/openSDKs)
 */

import type {ClientOptions, SdkDefinition, SDKTypes} from '@opensdks/runtime'
import {initSDK} from '@opensdks/runtime'
import type {oasTypes} from '../notion.oas.types.js'
import {oasMeta} from './notion.oas.meta.js'

export type NotionSDKTypes = SDKTypes<oasTypes, ClientOptions>

export const notionSdkDef = {
  types: {} as NotionSDKTypes,
  oasMeta,
} satisfies SdkDefinition<NotionSDKTypes>

export function initNotionSDK(opts: NotionSDKTypes['options']) {
  return initSDK(notionSdkDef, opts)
}

export type NotionSDK = ReturnType<typeof initNotionSDK>

export default initNotionSDK