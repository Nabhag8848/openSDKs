/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/auth/token': {
    /**
     * Get Public token
     * @description The authentication token endpoint allows developers to retrieve a public auth token required to redirect a user to the Brick user interface and retrieve data afterward. The access token will be live for 30 minutes. In the brick user interface, An end-user of our partner can choose the institution of their choice and securely log in to their financial institution to verify their account. Other APIs can be used to fetch specific data on a need to need basis.
     */
    get: operations['get-public-token']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: never
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /**
   * Get Public token
   * @description The authentication token endpoint allows developers to retrieve a public auth token required to redirect a user to the Brick user interface and retrieve data afterward. The access token will be live for 30 minutes. In the brick user interface, An end-user of our partner can choose the institution of their choice and securely log in to their financial institution to verify their account. Other APIs can be used to fetch specific data on a need to need basis.
   */
  'get-public-token': {
    parameters: {
      header: {
        /** @description Username for clients(You can collect this from Brick dashboard) */
        Username: string
        /** @description Password for client(You can collect this from Brick dashboard) */
        Password?: string
      }
    }
    responses: {
      /** @description 200 */
      200: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 200
             */
            status?: number
            /** @example OK */
            message?: string
            data?: {
              /** @example public-sandbox-c9xaf086-8zxc-4565-9cbc-64e8fc35d0d2 */
              access_token?: string
            }
          }
        }
      }
      /** @description 500 */
      500: {
        content: {
          'text/plain': {
            /** @example 2021-12-28T08:42:32.228+00:00 */
            timestamp?: string
            /**
             * @default 0
             * @example 500
             */
            status?: number
            /** @example Internal Server Error */
            error?: string
            /** @example /v1/auth/token */
            path?: string
          }
        }
      }
    }
  }
}

export interface oasTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export default oasTypes
