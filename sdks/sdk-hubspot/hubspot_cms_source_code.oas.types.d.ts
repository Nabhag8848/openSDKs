/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/cms/v3/source-code/{environment}/content/{path}': {
    /**
     * Download a file
     * @description Downloads the byte contents of the file at the specified path in the specified environment.
     */
    get: operations['get-/cms/v3/source-code/{environment}/content/{path}_download']
    /**
     * Create or update a file
     * @description Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     */
    put: operations['put-/cms/v3/source-code/{environment}/content/{path}_createOrUpdate']
    /**
     * Create a file
     * @deprecated
     * @description Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     */
    post: operations['post-/cms/v3/source-code/{environment}/content/{path}_create']
    /**
     * Delete a file
     * @description Deletes the file at the specified path in the specified environment.
     */
    delete: operations['delete-/cms/v3/source-code/{environment}/content/{path}_archive']
  }
  '/cms/v3/source-code/{environment}/metadata/{path}': {
    /**
     * Get the metadata for a file
     * @description Gets the metadata object for the file at the specified path in the specified environment.
     */
    get: operations['get-/cms/v3/source-code/{environment}/metadata/{path}_get']
  }
  '/cms/v3/source-code/{environment}/validate/{path}': {
    /**
     * Validate the contents of a file
     * @description Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     */
    post: operations['post-/cms/v3/source-code/{environment}/validate/{path}_doValidate']
  }
  '/cms/v3/source-code/extract/{path}': {
    /**
     * Extracts a zip file
     * @deprecated
     * @description Extracts a zip file in the file system. The zip file will be extracted in-place and not be deleted automatically.
     */
    post: operations['post-/cms/v3/source-code/extract/{path}_extractByPath']
  }
  '/cms/v3/source-code/extract/async': {
    post: operations['post-/cms/v3/source-code/extract/async_doAsync']
  }
  '/cms/v3/source-code/extract/async/tasks/{taskId}/status': {
    get: operations['get-/cms/v3/source-code/extract/async/tasks/{taskId}/status_getAsyncStatus']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
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
    /** @description The object metadata of a file. */
    AssetFileMetadata: {
      /**
       * Format: int32
       * @description Timestamp of when the object was first created.
       */
      createdAt: number
      /**
       * Format: int64
       * @description Timestamp of when the object was archived (deleted).
       */
      archivedAt?: number
      /** @description Determines whether or not this path points to a folder. */
      folder: boolean
      /** @description If the object is a folder, contains the filenames of the files within the folder. */
      children?: string[]
      /** @description The name of the file. */
      name: string
      /** @description The path of the file in the CMS Developer File System. */
      id: string
      hash?: string
      /**
       * Format: int32
       * @description Timestamp of when the object was last updated.
       */
      updatedAt: number
    }
    FileExtractRequest: {
      path: string
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
    ActionResponse: {
      /** Format: date-time */
      completedAt: string
      /** Format: date-time */
      requestedAt?: string
      /** Format: date-time */
      startedAt: string
      links?: {
        [key: string]: string
      }
      /** @enum {string} */
      status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE'
    }
    TaskLocator: {
      links?: {
        [key: string]: string
      }
      id: string
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
   * Download a file
   * @description Downloads the byte contents of the file at the specified path in the specified environment.
   */
  'get-/cms/v3/source-code/{environment}/content/{path}_download': {
    parameters: {
      path: {
        /** @description The environment of the file ("draft" or "published"). */
        environment: string
        /** @description The file system location of the file. */
        path: string
      }
    }
    responses: {
      default: components['responses']['Error']
    }
  }
  /**
   * Create or update a file
   * @description Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
   */
  'put-/cms/v3/source-code/{environment}/content/{path}_createOrUpdate': {
    parameters: {
      path: {
        /** @description The environment of the file ("draft" or "published"). */
        environment: string
        /** @description The file system location of the file. */
        path: string
      }
    }
    requestBody?: {
      content: {
        'multipart/form-data': {
          /**
           * Format: binary
           * @description The file to upload.
           */
          file?: string
        }
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['AssetFileMetadata']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Create a file
   * @deprecated
   * @description Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
   */
  'post-/cms/v3/source-code/{environment}/content/{path}_create': {
    parameters: {
      path: {
        /** @description The environment of the file ("draft" or "published"). */
        environment: string
        /** @description The file system location of the file. */
        path: string
      }
    }
    requestBody?: {
      content: {
        'multipart/form-data': {
          /**
           * Format: binary
           * @description The file to upload.
           */
          file?: string
        }
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['AssetFileMetadata']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Delete a file
   * @description Deletes the file at the specified path in the specified environment.
   */
  'delete-/cms/v3/source-code/{environment}/content/{path}_archive': {
    parameters: {
      path: {
        /** @description The environment of the file ("draft" or "published"). */
        environment: string
        /** @description The file system location of the file. */
        path: string
      }
    }
    responses: {
      /** @description No content */
      204: {
        content: {}
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Get the metadata for a file
   * @description Gets the metadata object for the file at the specified path in the specified environment.
   */
  'get-/cms/v3/source-code/{environment}/metadata/{path}_get': {
    parameters: {
      query?: {
        properties?: string
      }
      path: {
        /** @description The environment of the file ("draft" or "published"). */
        environment: string
        /** @description The file system location of the file. */
        path: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['AssetFileMetadata']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Validate the contents of a file
   * @description Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
   */
  'post-/cms/v3/source-code/{environment}/validate/{path}_doValidate': {
    parameters: {
      path: {
        /** @description The file system location of the file. */
        path: string
      }
    }
    requestBody?: {
      content: {
        'multipart/form-data': {
          /**
           * Format: binary
           * @description The file to validate.
           */
          file?: string
        }
      }
    }
    responses: {
      default: components['responses']['Error']
    }
  }
  /**
   * Extracts a zip file
   * @deprecated
   * @description Extracts a zip file in the file system. The zip file will be extracted in-place and not be deleted automatically.
   */
  'post-/cms/v3/source-code/extract/{path}_extractByPath': {
    parameters: {
      path: {
        /** @description The file system location of the zip file. */
        path: string
      }
    }
    responses: {
      /** @description No content */
      204: {
        content: {}
      }
      default: components['responses']['Error']
    }
  }
  'post-/cms/v3/source-code/extract/async_doAsync': {
    requestBody: {
      content: {
        'application/json': components['schemas']['FileExtractRequest']
      }
    }
    responses: {
      /** @description accepted */
      202: {
        content: {
          'application/json': components['schemas']['TaskLocator']
        }
      }
      default: components['responses']['Error']
    }
  }
  'get-/cms/v3/source-code/extract/async/tasks/{taskId}/status_getAsyncStatus': {
    parameters: {
      path: {
        taskId: number
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['ActionResponse']
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
