/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/cms/v3/url-redirects/': {
    /**
     * Get current redirects
     * @description Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
     */
    get: operations['get-/cms/v3/url-redirects/_getPage']
    /**
     * Create a redirect
     * @description Creates and configures a new URL redirect.
     */
    post: operations['post-/cms/v3/url-redirects/_create']
  }
  '/cms/v3/url-redirects/{urlRedirectId}': {
    /**
     * Get details for a redirect
     * @description Returns the details for a single existing URL redirect by ID.
     */
    get: operations['get-/cms/v3/url-redirects/{urlRedirectId}_getById']
    /**
     * Delete a redirect
     * @description Delete one existing redirect, so it is no longer mapped.
     */
    delete: operations['delete-/cms/v3/url-redirects/{urlRedirectId}_archive']
    /**
     * Update a redirect
     * @description Updates the settings for an existing URL redirect.
     */
    patch: operations['patch-/cms/v3/url-redirects/{urlRedirectId}_update']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    UrlMapping: {
      /** @description Whether a trailing slash will be ignored. */
      isTrailingSlashOptional: boolean
      /**
       * Format: int32
       * @description The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).
       */
      redirectStyle: number
      /** @description Whether the `routePrefix` should match on the entire URL path, including the query string. */
      isMatchQueryString: boolean
      /** Format: date-time */
      created?: string
      /** @description Whether the `routePrefix` should match on the entire URL, including the domain. */
      isMatchFullUrl: boolean
      /** @description The destination URL, where the target URL should be redirected if it matches the `routePrefix`. */
      destination: string
      /** @description Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page. */
      isOnlyAfterNotFound: boolean
      /** @description Whether the `routePrefix` should match based on pattern. */
      isPattern: boolean
      /**
       * Format: int32
       * @description Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.
       */
      precedence: number
      /** @description The target incoming URL, path, or pattern to match for redirection. */
      routePrefix: string
      /** @description Whether the `routePrefix` should match both HTTP and HTTPS protocols. */
      isProtocolAgnostic: boolean
      /** @description The unique ID of this URL redirect. */
      id: string
      /** Format: date-time */
      updated?: string
    }
    ErrorDetail: {
      /** @description A specific category that contains more specific detail about the error */
      subCategory?: string
      /** @description The status code associated with the error detail */
      code?: string
      /** @description The name of the field or parameter in which the error was found. */
      in?: string
      /**
       * @description Context about the error condition
       * @example {
       *   "missingScopes": [
       *     "scope1",
       *     "scope2"
       *   ]
       * }
       */
      context?: {
        [key: string]: string[]
      }
      /** @description A human readable message describing the error along with remediation steps where appropriate */
      message: string
    }
    ForwardPaging: {
      next?: components['schemas']['NextPage']
    }
    UrlMappingCreateRequestBody: {
      isTrailingSlashOptional?: boolean
      isMatchQueryString?: boolean
      /** Format: int32 */
      redirectStyle: number
      routePrefix: string
      isMatchFullUrl?: boolean
      isProtocolAgnostic?: boolean
      destination: string
      isOnlyAfterNotFound?: boolean
      isPattern?: boolean
      /** Format: int32 */
      precedence?: number
    }
    /**
     * @example {
     *   "message": "Invalid input (details will vary based on the error)",
     *   "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
     *   "category": "VALIDATION_ERROR",
     *   "links": {
     *     "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
     *   }
     * }
     */
    Error: {
      /** @description A specific category that contains more specific detail about the error */
      subCategory?: string
      /**
       * @description Context about the error condition
       * @example {
       *   "missingScopes": [
       *     "scope1",
       *     "scope2"
       *   ],
       *   "invalidPropertyName": [
       *     "propertyValue"
       *   ]
       * }
       */
      context?: {
        [key: string]: string[]
      }
      /**
       * Format: uuid
       * @description A unique identifier for the request. Include this value with any error reports or support tickets
       * @example aeb5f871-7f07-4993-9211-075dc63e7cbf
       */
      correlationId: string
      /**
       * @description A map of link names to associated URIs containing documentation about the error or recommended remediation steps
       * @example {
       *   "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
       * }
       */
      links?: {
        [key: string]: string
      }
      /**
       * @description A human readable message describing the error along with remediation steps where appropriate
       * @example Invalid input (details will vary based on the error)
       */
      message: string
      /**
       * @description The error category
       * @example VALIDATION_ERROR
       */
      category: string
      /** @description further information about the error */
      errors?: components['schemas']['ErrorDetail'][]
    }
    NextPage: {
      link?: string
      after: string
    }
    CollectionResponseWithTotalUrlMappingForwardPaging: {
      /** Format: int32 */
      total: number
      paging?: components['schemas']['ForwardPaging']
      results: components['schemas']['UrlMapping'][]
    }
  }
  responses: {
    /** @description An error occurred. */
    Error: {
      content: {
        '*/*': components['schemas']['Error']
      }
    }
  }
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /**
   * Get current redirects
   * @description Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
   */
  'get-/cms/v3/url-redirects/_getPage': {
    parameters: {
      query?: {
        /** @description Only return redirects created on exactly this date. */
        createdAt?: string
        /** @description Only return redirects created after this date. */
        createdAfter?: string
        /** @description Only return redirects created before this date. */
        createdBefore?: string
        /** @description Only return redirects last updated on exactly this date. */
        updatedAt?: string
        /** @description Only return redirects last updated after this date. */
        updatedAfter?: string
        /** @description Only return redirects last updated before this date. */
        updatedBefore?: string
        sort?: string[]
        /** @description The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results. */
        after?: string
        /** @description Maximum number of result per page */
        limit?: number
        /** @description Whether to return only results that have been archived. */
        archived?: boolean
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponseWithTotalUrlMappingForwardPaging']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Create a redirect
   * @description Creates and configures a new URL redirect.
   */
  'post-/cms/v3/url-redirects/_create': {
    requestBody: {
      content: {
        'application/json': components['schemas']['UrlMappingCreateRequestBody']
      }
    }
    responses: {
      /** @description successful operation */
      201: {
        content: {
          'application/json': components['schemas']['UrlMapping']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Get details for a redirect
   * @description Returns the details for a single existing URL redirect by ID.
   */
  'get-/cms/v3/url-redirects/{urlRedirectId}_getById': {
    parameters: {
      path: {
        /** @description The ID of the target redirect. */
        urlRedirectId: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['UrlMapping']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Delete a redirect
   * @description Delete one existing redirect, so it is no longer mapped.
   */
  'delete-/cms/v3/url-redirects/{urlRedirectId}_archive': {
    parameters: {
      path: {
        /** @description The ID of the target redirect. */
        urlRedirectId: string
      }
    }
    responses: {
      /** @description Delete succeeded */
      204: {
        content: {}
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Update a redirect
   * @description Updates the settings for an existing URL redirect.
   */
  'patch-/cms/v3/url-redirects/{urlRedirectId}_update': {
    parameters: {
      path: {
        urlRedirectId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UrlMapping']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['UrlMapping']
        }
      }
      default: components['responses']['Error']
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
