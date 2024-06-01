/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/integrations/': {
    get: operations['Request All Merge Integrations']
  }
  '/api/organizations/integrations': {
    get: operations["Request My Organization's Enabled Integrations"]
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    integration: {
      name: string
      slug: string
      image: string
      square_image: string
      color: string
      categories: string[]
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  'Request All Merge Integrations': {
    requestBody?: {
      content: {
        'application/json': unknown
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['integration'][]
        }
      }
    }
  }
  "Request My Organization's Enabled Integrations": {
    requestBody?: {
      content: {
        'application/json': unknown
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['integration'][]
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