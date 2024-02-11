/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}/audit': {
    /**
     * Return an audit of all changes to the pipeline stage
     * @description Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     */
    get: operations['get-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit']
  }
  '/crm/v3/pipelines/{objectType}/{pipelineId}': {
    /**
     * Return a pipeline by ID
     * @description Return a single pipeline object identified by its unique `{pipelineId}`.
     */
    get: operations['get-/crm/v3/pipelines/{objectType}/{pipelineId}_getById']
    /**
     * Replace a pipeline
     * @description Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     */
    put: operations['put-/crm/v3/pipelines/{objectType}/{pipelineId}_replace']
    /**
     * Delete a pipeline
     * @description Delete the pipeline identified by `{pipelineId}`.
     */
    delete: operations['delete-/crm/v3/pipelines/{objectType}/{pipelineId}_archive']
    /**
     * Update a pipeline
     * @description Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     */
    patch: operations['patch-/crm/v3/pipelines/{objectType}/{pipelineId}_update']
  }
  '/crm/v3/pipelines/{objectType}/{pipelineId}/audit': {
    /**
     * Return an audit of all changes to the pipeline
     * @description Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     */
    get: operations['get-/crm/v3/pipelines/{objectType}/{pipelineId}/audit_getAudit']
  }
  '/crm/v3/pipelines/{objectType}/{pipelineId}/stages': {
    /**
     * Return all stages of a pipeline
     * @description Return all the stages associated with the pipeline identified by `{pipelineId}`.
     */
    get: operations['get-/crm/v3/pipelines/{objectType}/{pipelineId}/stages_getAll']
    /**
     * Create a pipeline stage
     * @description Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     */
    post: operations['post-/crm/v3/pipelines/{objectType}/{pipelineId}/stages_create']
  }
  '/crm/v3/pipelines/{objectType}': {
    /**
     * Retrieve all pipelines
     * @description Return all pipelines for the object type specified by `{objectType}`.
     */
    get: operations['get-/crm/v3/pipelines/{objectType}_getAll']
    /**
     * Create a pipeline
     * @description Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     */
    post: operations['post-/crm/v3/pipelines/{objectType}_create']
  }
  '/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}': {
    /**
     * Return a pipeline stage by ID
     * @description Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     */
    get: operations['get-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_getById']
    /**
     * Replace a pipeline stage
     * @description Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     */
    put: operations['put-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_replace']
    /**
     * Delete a pipeline stage
     * @description Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     */
    delete: operations['delete-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_archive']
    /**
     * Update a pipeline stage
     * @description Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     */
    patch: operations['patch-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_update']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    /**
     * @description An input used to update some properties on a pipeline definition.
     * @example {
     *   "label": "Done",
     *   "displayOrder": 1,
     *   "metadata": {
     *     "ticketState": "CLOSED"
     *   }
     * }
     */
    PipelineStagePatchInput: {
      /** @description Whether the pipeline is archived. */
      archived?: boolean
      /**
       * @description A JSON object containing properties that are not present on all object pipelines.
       *
       * For `deals` pipelines, the `probability` field is required (`{ "probability": 0.5 }`), and represents the likelihood a deal will close. Possible values are between 0.0 and 1.0 in increments of 0.1.
       *
       * For `tickets` pipelines, the `ticketState` field is optional (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or has been closed by a member of your Support team. Possible values are `OPEN` or `CLOSED`.
       * @example {
       *   "ticketState": "CLOSED"
       * }
       */
      metadata: {
        [key: string]: string
      }
      /**
       * Format: int32
       * @description The order for displaying this pipeline stage. If two pipeline stages have a matching `displayOrder`, they will be sorted alphabetically by label.
       * @example 1
       */
      displayOrder?: number
      /**
       * @description A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's label must be unique within that pipeline.
       * @example Done
       */
      label?: string
    }
    /**
     * @description An input used to update some properties on a pipeline definition.
     * @example {
     *   "label": "My updated pipeline",
     *   "displayOrder": 0
     * }
     */
    PipelinePatchInput: {
      /** @description Whether the pipeline is archived. This property should only be provided when restoring an archived pipeline. If it's provided in any other call, the request will fail and a `400 Bad Request` will be returned. */
      archived?: boolean
      /**
       * Format: int32
       * @description The order for displaying this pipeline. If two pipelines have a matching `displayOrder`, they will be sorted alphabetically by label.
       * @example 0
       */
      displayOrder?: number
      /**
       * @description A unique label used to organize pipelines in HubSpot's UI
       * @example My updated pipeline
       */
      label?: string
    }
    /**
     * @description A pipeline stage definition.
     * @example {
     *   "label": "In Progress",
     *   "displayOrder": 0,
     *   "metadata": {
     *     "ticketState": "OPEN"
     *   },
     *   "createdAt": "2019-10-30T03:30:17.883Z",
     *   "updatedAt": "2019-12-07T16:50:06.678Z",
     *   "archived": false,
     *   "id": "1234912"
     * }
     */
    PipelineStage: {
      /**
       * Format: date-time
       * @description The date the pipeline stage was created. The stages on default pipelines will have createdAt = 0.
       */
      createdAt: string
      /**
       * Format: date-time
       * @description The date the pipeline was archived. `archivedAt` will only be present if the pipeline is archived.
       */
      archivedAt?: string
      /**
       * @description Whether the pipeline is archived.
       * @example false
       */
      archived: boolean
      /**
       * @description A JSON object containing properties that are not present on all object pipelines.
       *
       * For `deals` pipelines, the `probability` field is required (`{ "probability": 0.5 }`), and represents the likelihood a deal will close. Possible values are between 0.0 and 1.0 in increments of 0.1.
       *
       * For `tickets` pipelines, the `ticketState` field is optional (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or has been closed by a member of your Support team. Possible values are `OPEN` or `CLOSED`.
       * @example {
       *   "ticketState": "OPEN"
       * }
       */
      metadata: {
        [key: string]: string
      }
      /**
       * Format: int32
       * @description The order for displaying this pipeline stage. If two pipeline stages have a matching `displayOrder`, they will be sorted alphabetically by label.
       * @example 0
       */
      displayOrder: number
      /** @enum {string} */
      writePermissions?:
        | 'CRM_PERMISSIONS_ENFORCEMENT'
        | 'READ_ONLY'
        | 'INTERNAL_ONLY'
      /**
       * @description A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's label must be unique within that pipeline.
       * @example In Progress
       */
      label: string
      /**
       * @description A unique identifier generated by HubSpot that can be used to retrieve and update the pipeline stage.
       * @example 1234912
       */
      id: string
      /**
       * Format: date-time
       * @description The date the pipeline stage was last updated.
       */
      updatedAt: string
    }
    CollectionResponsePipelineStageNoPaging: {
      results: components['schemas']['PipelineStage'][]
    }
    PublicAuditInfo: {
      identifier: string
      rawObject?: Record<string, never>
      /** Format: int32 */
      fromUserId?: number
      /** Format: int32 */
      portalId: number
      action: string
      message?: string
      /** Format: date-time */
      timestamp?: string
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
    CollectionResponsePublicAuditInfoNoPaging: {
      results: components['schemas']['PublicAuditInfo'][]
    }
    /**
     * @description A pipeline definition.
     * @example {
     *   "label": "My ticket pipeline",
     *   "displayOrder": 0,
     *   "createdAt": "2019-10-30T03:30:17.883Z",
     *   "updatedAt": "2019-12-07T16:50:06.678Z",
     *   "archived": false,
     *   "id": "812723471",
     *   "stages": [
     *     {
     *       "label": "In Progress",
     *       "displayOrder": 0,
     *       "metadata": {
     *         "ticketState": "OPEN"
     *       },
     *       "createdAt": "2019-10-30T03:30:17.883Z",
     *       "updatedAt": "2019-12-07T16:50:06.678Z",
     *       "archived": false,
     *       "id": "1234912"
     *     },
     *     {
     *       "label": "Done",
     *       "displayOrder": 0,
     *       "metadata": {
     *         "ticketState": "CLOSED"
     *       },
     *       "createdAt": "2019-10-30T03:30:17.883Z",
     *       "updatedAt": "2019-12-07T16:50:06.678Z",
     *       "archived": false,
     *       "id": "1234914"
     *     }
     *   ]
     * }
     */
    Pipeline: {
      /**
       * Format: date-time
       * @description The date the pipeline was created. The default pipelines will have createdAt = 0.
       */
      createdAt: string
      /**
       * Format: date-time
       * @description The date the pipeline was archived. `archivedAt` will only be present if the pipeline is archived.
       */
      archivedAt?: string
      /**
       * @description Whether the pipeline is archived.
       * @example false
       */
      archived: boolean
      /**
       * Format: int32
       * @description The order for displaying this pipeline. If two pipelines have a matching `displayOrder`, they will be sorted alphabetically by label.
       * @example 0
       */
      displayOrder: number
      /**
       * @description The stages associated with the pipeline. They can be retrieved and updated via the pipeline stages endpoints.
       * @example [
       *   {
       *     "id": "1234912",
       *     "label": "In Progress",
       *     "archived": false,
       *     "metadata": {
       *       "ticketState": "OPEN"
       *     },
       *     "createdAt": "2019-10-30T03:30:17.883Z",
       *     "updatedAt": "2019-12-07T16:50:06.678Z",
       *     "displayOrder": 0
       *   },
       *   {
       *     "id": "1234914",
       *     "label": "Done",
       *     "archived": false,
       *     "metadata": {
       *       "ticketState": "CLOSED"
       *     },
       *     "createdAt": "2019-10-30T03:30:17.883Z",
       *     "updatedAt": "2019-12-07T16:50:06.678Z",
       *     "displayOrder": 0
       *   }
       * ]
       */
      stages: components['schemas']['PipelineStage'][]
      /**
       * @description A unique label used to organize pipelines in HubSpot's UI
       * @example My ticket pipeline
       */
      label: string
      /**
       * @description A unique identifier generated by HubSpot that can be used to retrieve and update the pipeline.
       * @example 812723471
       */
      id: string
      /**
       * Format: date-time
       * @description The date the pipeline was last updated.
       */
      updatedAt: string
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
    /**
     * @description An input used to create or replace a pipeline stage's definition.
     * @example {
     *   "label": "Done",
     *   "displayOrder": 1,
     *   "metadata": {
     *     "ticketState": "CLOSED"
     *   }
     * }
     */
    PipelineStageInput: {
      /**
       * @description A JSON object containing properties that are not present on all object pipelines.
       *
       * For `deals` pipelines, the `probability` field is required (`{ "probability": 0.5 }`), and represents the likelihood a deal will close. Possible values are between 0.0 and 1.0 in increments of 0.1.
       *
       * For `tickets` pipelines, the `ticketState` field is optional (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or has been closed by a member of your Support team. Possible values are `OPEN` or `CLOSED`.
       * @example {
       *   "ticketState": "CLOSED"
       * }
       */
      metadata: {
        [key: string]: string
      }
      /**
       * Format: int32
       * @description The order for displaying this pipeline stage. If two pipeline stages have a matching `displayOrder`, they will be sorted alphabetically by label.
       * @example 1
       */
      displayOrder: number
      /**
       * @description A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's label must be unique within that pipeline.
       * @example Done
       */
      label: string
    }
    /**
     * @description An input used to create or replace a pipeline's definition.
     * @example {
     *   "label": "My replaced pipeline",
     *   "displayOrder": 0,
     *   "stages": [
     *     {
     *       "label": "In Progress",
     *       "displayOrder": 0,
     *       "metadata": {
     *         "ticketState": "OPEN"
     *       }
     *     },
     *     {
     *       "label": "Done",
     *       "displayOrder": 1,
     *       "metadata": {
     *         "ticketState": "CLOSED"
     *       }
     *     }
     *   ]
     * }
     */
    PipelineInput: {
      /**
       * Format: int32
       * @description The order for displaying this pipeline. If two pipelines have a matching `displayOrder`, they will be sorted alphabetically by label.
       * @example 0
       */
      displayOrder: number
      /**
       * @description Pipeline stage inputs used to create the new or replacement pipeline.
       * @example [
       *   {
       *     "label": "In Progress",
       *     "metadata": {
       *       "ticketState": "OPEN"
       *     },
       *     "displayOrder": 0
       *   },
       *   {
       *     "label": "Done",
       *     "metadata": {
       *       "ticketState": "CLOSED"
       *     },
       *     "displayOrder": 1
       *   }
       * ]
       */
      stages: components['schemas']['PipelineStageInput'][]
      /**
       * @description A unique label used to organize pipelines in HubSpot's UI
       * @example My replaced pipeline
       */
      label: string
    }
    CollectionResponsePipelineNoPaging: {
      results: components['schemas']['Pipeline'][]
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
   * Return an audit of all changes to the pipeline stage
   * @description Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
   */
  'get-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit': {
    parameters: {
      path: {
        objectType: string
        stageId: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponsePublicAuditInfoNoPaging']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Return a pipeline by ID
   * @description Return a single pipeline object identified by its unique `{pipelineId}`.
   */
  'get-/crm/v3/pipelines/{objectType}/{pipelineId}_getById': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['Pipeline']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Replace a pipeline
   * @description Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
   */
  'put-/crm/v3/pipelines/{objectType}/{pipelineId}_replace': {
    parameters: {
      query?: {
        validateReferencesBeforeDelete?: boolean
        validateDealStageUsagesBeforeDelete?: boolean
      }
      path: {
        objectType: string
        pipelineId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PipelineInput']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['Pipeline']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Delete a pipeline
   * @description Delete the pipeline identified by `{pipelineId}`.
   */
  'delete-/crm/v3/pipelines/{objectType}/{pipelineId}_archive': {
    parameters: {
      query?: {
        validateReferencesBeforeDelete?: boolean
        validateDealStageUsagesBeforeDelete?: boolean
      }
      path: {
        objectType: string
        pipelineId: string
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
   * Update a pipeline
   * @description Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
   */
  'patch-/crm/v3/pipelines/{objectType}/{pipelineId}_update': {
    parameters: {
      query?: {
        validateReferencesBeforeDelete?: boolean
        validateDealStageUsagesBeforeDelete?: boolean
      }
      path: {
        objectType: string
        pipelineId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PipelinePatchInput']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['Pipeline']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Return an audit of all changes to the pipeline
   * @description Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
   */
  'get-/crm/v3/pipelines/{objectType}/{pipelineId}/audit_getAudit': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponsePublicAuditInfoNoPaging']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Return all stages of a pipeline
   * @description Return all the stages associated with the pipeline identified by `{pipelineId}`.
   */
  'get-/crm/v3/pipelines/{objectType}/{pipelineId}/stages_getAll': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponsePipelineStageNoPaging']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Create a pipeline stage
   * @description Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
   */
  'post-/crm/v3/pipelines/{objectType}/{pipelineId}/stages_create': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PipelineStageInput']
      }
    }
    responses: {
      /** @description successful operation */
      201: {
        content: {
          'application/json': components['schemas']['PipelineStage']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Retrieve all pipelines
   * @description Return all pipelines for the object type specified by `{objectType}`.
   */
  'get-/crm/v3/pipelines/{objectType}_getAll': {
    parameters: {
      path: {
        objectType: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponsePipelineNoPaging']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Create a pipeline
   * @description Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
   */
  'post-/crm/v3/pipelines/{objectType}_create': {
    parameters: {
      path: {
        objectType: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PipelineInput']
      }
    }
    responses: {
      /** @description successful operation */
      201: {
        content: {
          'application/json': components['schemas']['Pipeline']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Return a pipeline stage by ID
   * @description Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
   */
  'get-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_getById': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
        stageId: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['PipelineStage']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Replace a pipeline stage
   * @description Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
   */
  'put-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_replace': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
        stageId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PipelineStageInput']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['PipelineStage']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Delete a pipeline stage
   * @description Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
   */
  'delete-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_archive': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
        stageId: string
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
   * Update a pipeline stage
   * @description Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
   */
  'patch-/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}_update': {
    parameters: {
      path: {
        objectType: string
        pipelineId: string
        stageId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PipelineStagePatchInput']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['PipelineStage']
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
