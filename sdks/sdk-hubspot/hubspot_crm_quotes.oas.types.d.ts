/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/crm/v3/objects/quotes/batch/read': {
    /** Read a batch of quotes by internal ID, or unique property values */
    post: operations['post-/crm/v3/objects/quotes/batch/read_read']
  }
  '/crm/v3/objects/quotes/{quoteId}': {
    /**
     * Read
     * @description Read an Object identified by `{quoteId}`. `{quoteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     */
    get: operations['get-/crm/v3/objects/quotes/{quoteId}_getById']
    /**
     * Archive
     * @description Move an Object identified by `{quoteId}` to the recycling bin.
     */
    delete: operations['delete-/crm/v3/objects/quotes/{quoteId}_archive']
    /**
     * Update
     * @description Perform a partial update of an Object identified by `{quoteId}`. `{quoteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     */
    patch: operations['patch-/crm/v3/objects/quotes/{quoteId}_update']
  }
  '/crm/v3/objects/quotes/merge': {
    /** Merge two quotes with same type */
    post: operations['post-/crm/v3/objects/quotes/merge_merge']
  }
  '/crm/v3/objects/quotes/batch/archive': {
    /** Archive a batch of quotes by ID */
    post: operations['post-/crm/v3/objects/quotes/batch/archive_archive']
  }
  '/crm/v3/objects/quotes/batch/create': {
    /** Create a batch of quotes */
    post: operations['post-/crm/v3/objects/quotes/batch/create_create']
  }
  '/crm/v3/objects/quotes/batch/update': {
    /** Update a batch of quotes */
    post: operations['post-/crm/v3/objects/quotes/batch/update_update']
  }
  '/crm/v3/objects/quotes/gdpr-delete': {
    /**
     * GDPR DELETE
     * @description Permanently delete a contact and all associated content to follow GDPR. Use optional property 'idProperty' set to 'email' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
     */
    post: operations['post-/crm/v3/objects/quotes/gdpr-delete_purge']
  }
  '/crm/v3/objects/quotes': {
    /**
     * List
     * @description Read a page of quotes. Control what is returned via the `properties` query param.
     */
    get: operations['get-/crm/v3/objects/quotes_getPage']
    /**
     * Create
     * @description Create a quote with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard quotes is provided.
     */
    post: operations['post-/crm/v3/objects/quotes_create']
  }
  '/crm/v3/objects/quotes/search': {
    post: operations['post-/crm/v3/objects/quotes/search_doSearch']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    StandardError: {
      subCategory?: Record<string, never>
      context: {
        [key: string]: string[]
      }
      links: {
        [key: string]: string
      }
      id?: string
      category: string
      message: string
      errors: components['schemas']['ErrorDetail'][]
      status: string
    }
    CollectionResponseAssociatedId: {
      paging?: components['schemas']['Paging']
      results: components['schemas']['AssociatedId'][]
    }
    PublicAssociationsForObject: {
      types: components['schemas']['AssociationSpec'][]
      to: components['schemas']['PublicObjectId']
    }
    BatchResponseSimplePublicObject: {
      /** Format: date-time */
      completedAt: string
      /** Format: date-time */
      requestedAt?: string
      /** Format: date-time */
      startedAt: string
      links?: {
        [key: string]: string
      }
      results: components['schemas']['SimplePublicObject'][]
      /** @enum {string} */
      status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE'
    }
    FilterGroup: {
      filters: components['schemas']['Filter'][]
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
    SimplePublicObjectId: {
      id: string
    }
    BatchReadInputSimplePublicObjectId: {
      propertiesWithHistory: string[]
      idProperty?: string
      inputs: components['schemas']['SimplePublicObjectId'][]
      properties: string[]
    }
    BatchInputSimplePublicObjectId: {
      inputs: components['schemas']['SimplePublicObjectId'][]
    }
    ValueWithTimestamp: {
      sourceId?: string
      sourceType: string
      sourceLabel?: string
      /** Format: int32 */
      updatedByUserId?: number
      value: string
      /** Format: date-time */
      timestamp: string
    }
    CollectionResponseWithTotalSimplePublicObjectForwardPaging: {
      /** Format: int32 */
      total: number
      paging?: components['schemas']['ForwardPaging']
      results: components['schemas']['SimplePublicObject'][]
    }
    /**
     * @example {
     *   "id": "512",
     *   "properties": {
     *     "hs_createdate": "2019-10-30T03:30:17.883Z",
     *     "hs_expiration_date": "2020-09-06T02:43:14.491Z",
     *     "hs_quote_amount": "3000.00",
     *     "hs_quote_number": "20200916-092813983",
     *     "hs_status": "PENDING_APPROVAL",
     *     "hs_terms": "discount provided, two year term with customer",
     *     "hs_title": "Services Proposal",
     *     "hubspot_owner_id": "910901"
     *   },
     *   "createdAt": "2019-10-30T03:30:17.883Z",
     *   "updatedAt": "2019-12-07T16:50:06.678Z",
     *   "archived": false
     * }
     */
    SimplePublicObject: {
      /** Format: date-time */
      createdAt: string
      /** @example false */
      archived?: boolean
      /** Format: date-time */
      archivedAt?: string
      propertiesWithHistory?: {
        [key: string]: components['schemas']['ValueWithTimestamp'][]
      }
      /** @example 512 */
      id: string
      /**
       * @example {
       *   "property_date": "1572480000000",
       *   "property_radio": "option_1",
       *   "property_number": "17",
       *   "property_string": "value",
       *   "property_checkbox": "false",
       *   "property_dropdown": "choice_b",
       *   "property_multiple_checkboxes": "chocolate;strawberry"
       * }
       */
      properties: {
        [key: string]: string | null
      }
      /** Format: date-time */
      updatedAt: string
    }
    PublicObjectId: {
      id: string
    }
    Paging: {
      next?: components['schemas']['NextPage']
      prev?: components['schemas']['PreviousPage']
    }
    PublicObjectSearchRequest: {
      query?: string
      /** Format: int32 */
      limit: number
      after: string
      sorts: string[]
      properties: string[]
      filterGroups: components['schemas']['FilterGroup'][]
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
    BatchResponseSimplePublicObjectWithErrors: {
      /** Format: date-time */
      completedAt: string
      /** Format: int32 */
      numErrors?: number
      /** Format: date-time */
      requestedAt?: string
      /** Format: date-time */
      startedAt: string
      links?: {
        [key: string]: string
      }
      results: components['schemas']['SimplePublicObject'][]
      errors?: components['schemas']['StandardError'][]
      /** @enum {string} */
      status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE'
    }
    PublicGdprDeleteInput: {
      idProperty?: string
      objectId: string
    }
    /**
     * @example {
     *   "properties": {
     *     "hs_title": "Pawnee Paper Deal",
     *     "hs_status": "PENDING_APPROVAL"
     *   },
     *   "associations": [
     *     {
     *       "to": {
     *         "id": "101"
     *       },
     *       "types": [
     *         {
     *           "associationCategory": "HUBSPOT_DEFINED",
     *           "associationTypeId": 2
     *         }
     *       ]
     *     }
     *   ]
     * }
     */
    SimplePublicObjectInput: {
      /**
       * @example {
       *   "property_date": "1572480000000",
       *   "property_radio": "option_1",
       *   "property_number": "17",
       *   "property_string": "value",
       *   "property_checkbox": "false",
       *   "property_dropdown": "choice_b",
       *   "property_multiple_checkboxes": "chocolate;strawberry"
       * }
       */
      properties: {
        [key: string]: string
      }
    }
    CollectionResponseSimplePublicObjectWithAssociationsForwardPaging: {
      paging?: components['schemas']['ForwardPaging']
      results: components['schemas']['SimplePublicObjectWithAssociations'][]
    }
    AssociationSpec: {
      /** @enum {string} */
      associationCategory:
        | 'HUBSPOT_DEFINED'
        | 'USER_DEFINED'
        | 'INTEGRATOR_DEFINED'
      /** Format: int32 */
      associationTypeId: number
    }
    PublicMergeInput: {
      objectIdToMerge: string
      primaryObjectId: string
    }
    /**
     * @example {
     *   "properties": {
     *     "hs_createdate": "2019-10-30T03:30:17.883Z",
     *     "hs_expiration_date": "2020-09-06T02:43:14.491Z",
     *     "hs_quote_amount": "3000.00",
     *     "hs_quote_number": "20200916-092813983",
     *     "hs_status": "PENDING_APPROVAL",
     *     "hs_terms": "discount provided, two year term with customer",
     *     "hs_title": "Services Proposal",
     *     "hubspot_owner_id": "910901"
     *   }
     * }
     */
    SimplePublicObjectWithAssociations: {
      associations?: {
        [key: string]: components['schemas']['CollectionResponseAssociatedId']
      }
      /** Format: date-time */
      createdAt: string
      archived?: boolean
      /** Format: date-time */
      archivedAt?: string
      propertiesWithHistory?: {
        [key: string]: components['schemas']['ValueWithTimestamp'][]
      }
      id: string
      /**
       * @example {
       *   "hs_title": "Pawnee Paper Deal",
       *   "hs_status": "PENDING_APPROVAL"
       * }
       */
      properties: {
        [key: string]: string | null
      }
      /** Format: date-time */
      updatedAt: string
    }
    Filter: {
      highValue?: string
      propertyName: string
      values?: string[]
      value?: string
      /**
       * @description null
       * @enum {string}
       */
      operator:
        | 'EQ'
        | 'NEQ'
        | 'LT'
        | 'LTE'
        | 'GT'
        | 'GTE'
        | 'BETWEEN'
        | 'IN'
        | 'NOT_IN'
        | 'HAS_PROPERTY'
        | 'NOT_HAS_PROPERTY'
        | 'CONTAINS_TOKEN'
        | 'NOT_CONTAINS_TOKEN'
    }
    BatchInputSimplePublicObjectBatchInput: {
      inputs: components['schemas']['SimplePublicObjectBatchInput'][]
    }
    BatchInputSimplePublicObjectInputForCreate: {
      inputs: components['schemas']['SimplePublicObjectInputForCreate'][]
    }
    PreviousPage: {
      before: string
      link?: string
    }
    /**
     * @example {
     *   "id": "1",
     *   "properties": {
     *     "hs_title": "Pawnee Paper Deal",
     *     "hs_status": "PENDING_APPROVAL"
     *   }
     * }
     */
    SimplePublicObjectBatchInput: {
      /** @example my_unique_property_name */
      idProperty?: string
      id: string
      /**
       * @example {
       *   "hs_title": "Pawnee Paper Deal",
       *   "hs_status": "PENDING_APPROVAL"
       * }
       */
      properties: {
        [key: string]: string
      }
    }
    AssociatedId: {
      id: string
      type: string
    }
    /**
     * @example {
     *   "after": "NTI1Cg%3D%3D",
     *   "link": "?after=NTI1Cg%3D%3D"
     * }
     */
    NextPage: {
      /** @example ?after=NTI1Cg%3D%3D */
      link?: string
      /** @example NTI1Cg%3D%3D */
      after: string
    }
    /**
     * @example {
     *   "properties": {
     *     "hs_title": "Pawnee Paper Deal",
     *     "hs_status": "PENDING_APPROVAL"
     *   },
     *   "associations": [
     *     {
     *       "to": {
     *         "id": "101"
     *       },
     *       "types": [
     *         {
     *           "associationCategory": "HUBSPOT_DEFINED",
     *           "associationTypeId": 2
     *         }
     *       ]
     *     }
     *   ]
     * }
     */
    SimplePublicObjectInputForCreate: {
      associations: components['schemas']['PublicAssociationsForObject'][]
      /**
       * @example {
       *   "hs_title": "Pawnee Paper Deal",
       *   "hs_status": "PENDING_APPROVAL"
       * }
       */
      properties: {
        [key: string]: string
      }
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
  /** Read a batch of quotes by internal ID, or unique property values */
  'post-/crm/v3/objects/quotes/batch/read_read': {
    parameters: {
      query?: {
        /** @description Whether to return only results that have been archived. */
        archived?: boolean
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['BatchReadInputSimplePublicObjectId']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['BatchResponseSimplePublicObject']
        }
      }
      /** @description multiple statuses */
      207: {
        content: {
          'application/json': components['schemas']['BatchResponseSimplePublicObjectWithErrors']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Read
   * @description Read an Object identified by `{quoteId}`. `{quoteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
   */
  'get-/crm/v3/objects/quotes/{quoteId}_getById': {
    parameters: {
      query?: {
        /** @description A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored. */
        properties?: string[]
        /** @description A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. */
        propertiesWithHistory?: string[]
        /** @description A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored. */
        associations?: string[]
        /** @description Whether to return only results that have been archived. */
        archived?: boolean
        /** @description The name of a property whose values are unique for this object type */
        idProperty?: string
      }
      path: {
        quoteId: string
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['SimplePublicObjectWithAssociations']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Archive
   * @description Move an Object identified by `{quoteId}` to the recycling bin.
   */
  'delete-/crm/v3/objects/quotes/{quoteId}_archive': {
    parameters: {
      path: {
        quoteId: string
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
   * Update
   * @description Perform a partial update of an Object identified by `{quoteId}`. `{quoteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
   */
  'patch-/crm/v3/objects/quotes/{quoteId}_update': {
    parameters: {
      query?: {
        /** @description The name of a property whose values are unique for this object type */
        idProperty?: string
      }
      path: {
        quoteId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SimplePublicObjectInput']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['SimplePublicObject']
        }
      }
      default: components['responses']['Error']
    }
  }
  /** Merge two quotes with same type */
  'post-/crm/v3/objects/quotes/merge_merge': {
    requestBody: {
      content: {
        'application/json': components['schemas']['PublicMergeInput']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['SimplePublicObject']
        }
      }
      default: components['responses']['Error']
    }
  }
  /** Archive a batch of quotes by ID */
  'post-/crm/v3/objects/quotes/batch/archive_archive': {
    requestBody: {
      content: {
        'application/json': components['schemas']['BatchInputSimplePublicObjectId']
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
  /** Create a batch of quotes */
  'post-/crm/v3/objects/quotes/batch/create_create': {
    requestBody: {
      content: {
        'application/json': components['schemas']['BatchInputSimplePublicObjectInputForCreate']
      }
    }
    responses: {
      /** @description successful operation */
      201: {
        content: {
          'application/json': components['schemas']['BatchResponseSimplePublicObject']
        }
      }
      /** @description multiple statuses */
      207: {
        content: {
          'application/json': components['schemas']['BatchResponseSimplePublicObjectWithErrors']
        }
      }
      default: components['responses']['Error']
    }
  }
  /** Update a batch of quotes */
  'post-/crm/v3/objects/quotes/batch/update_update': {
    requestBody: {
      content: {
        'application/json': components['schemas']['BatchInputSimplePublicObjectBatchInput']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['BatchResponseSimplePublicObject']
        }
      }
      /** @description multiple statuses */
      207: {
        content: {
          'application/json': components['schemas']['BatchResponseSimplePublicObjectWithErrors']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * GDPR DELETE
   * @description Permanently delete a contact and all associated content to follow GDPR. Use optional property 'idProperty' set to 'email' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
   */
  'post-/crm/v3/objects/quotes/gdpr-delete_purge': {
    requestBody: {
      content: {
        'application/json': components['schemas']['PublicGdprDeleteInput']
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
   * List
   * @description Read a page of quotes. Control what is returned via the `properties` query param.
   */
  'get-/crm/v3/objects/quotes_getPage': {
    parameters: {
      query?: {
        /** @description The maximum number of results to display per page. */
        limit?: number
        /** @description The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results. */
        after?: string
        /** @description A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored. */
        properties?: string[]
        /** @description A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request. */
        propertiesWithHistory?: string[]
        /** @description A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored. */
        associations?: string[]
        /** @description Whether to return only results that have been archived. */
        archived?: boolean
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponseSimplePublicObjectWithAssociationsForwardPaging']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Create
   * @description Create a quote with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard quotes is provided.
   */
  'post-/crm/v3/objects/quotes_create': {
    requestBody: {
      content: {
        'application/json': components['schemas']['SimplePublicObjectInputForCreate']
      }
    }
    responses: {
      /** @description successful operation */
      201: {
        content: {
          'application/json': components['schemas']['SimplePublicObject']
        }
      }
      default: components['responses']['Error']
    }
  }
  'post-/crm/v3/objects/quotes/search_doSearch': {
    requestBody: {
      content: {
        'application/json': components['schemas']['PublicObjectSearchRequest']
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponseWithTotalSimplePublicObjectForwardPaging']
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
