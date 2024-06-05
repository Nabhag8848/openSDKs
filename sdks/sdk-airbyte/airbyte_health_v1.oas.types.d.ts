/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /** Health Check */
    get: {
      responses: {
        /** @description Successful operation */
        200: {
          content: never
        }
        /** @description Not found */
        404: {
          content: never
        }
      }
    }
  }
}

export type webhooks = Record<string, never>

export type components = Record<string, never>

export type $defs = Record<string, never>

export type external = Record<string, never>

export type operations = Record<string, never>

export interface oasTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export default oasTypes