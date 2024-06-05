/**
 * This file was generated by @opensdks/cli, do not edit manually.
 * For bugs & feature requests, please open an issue on the [GitHub](https://github.com/tonyxiao/openSDKs)
 */

import type {
  ClientOptions,
  OpenAPITypes,
  SdkDefinition,
  SDKTypes,
} from '@opensdks/runtime'
import {initSDK} from '@opensdks/runtime'
import type Oas_drive_v2 from '../google_drive_v2.oas.types.js'
import type Oas_drive_v3 from '../google_drive_v3.oas.types.js'
import {default as oas_drive_v2} from './google_drive_v2.oas.meta.js'
import {default as oas_drive_v3} from './google_drive_v3.oas.meta.js'

export type {Oas_drive_v2, Oas_drive_v3}

export {oas_drive_v2, oas_drive_v3}

export type GoogleSDKTypes = SDKTypes<OpenAPITypes, ClientOptions>

export const googleSdkDef = {
  types: {} as GoogleSDKTypes,
  defaultOptions: {},
  createClient(ctx, options) {
    const drive_v2 = ctx.createClient<Oas_drive_v2['paths']>({
      ...options,
      baseUrl: options.baseUrl ?? oas_drive_v2.servers[0]?.url,
    })
    const drive_v3 = ctx.createClient<Oas_drive_v3['paths']>({
      ...options,
      baseUrl: options.baseUrl ?? oas_drive_v3.servers[0]?.url,
    })

    return {
      drive_v2,
      drive_v3,
    }
  },
} satisfies SdkDefinition<GoogleSDKTypes>

export function initGoogleSDK(opts: GoogleSDKTypes['options']) {
  return initSDK(googleSdkDef, opts)
}

export type GoogleSDK = ReturnType<typeof initGoogleSDK>

export default initGoogleSDK