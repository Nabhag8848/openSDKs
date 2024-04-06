/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/open-api/metadata': {
    /** Get Open Api Schema */
    get: operations['GetOpenApiSchema']
  }
  '/objects': {
    /** Find Many objects */
    get: {
      parameters: {
        query?: {
          filter?: components['parameters']['filter']
        }
      }
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            'application/json': {
              data?: {
                objects?: components['schemas']['Object'][]
              }
            }
          }
        }
        400: components['responses']['400']
        401: components['responses']['401']
      }
    }
    /** Create One object */
    post: operations['createOneObject']
  }
  '/objects/{id}': {
    /** Find One object */
    get: {
      parameters: {
        path: {
          id: components['parameters']['idPath']
        }
      }
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            'application/json': {
              data?: {
                object?: components['schemas']['Object']
              }
            }
          }
        }
        400: components['responses']['400']
        401: components['responses']['401']
      }
    }
    /** Update One objects */
    put: operations['updateOneObject']
    /** Delete One object */
    delete: operations['deleteOneObject']
  }
  '/fields': {
    /** Find Many fields */
    get: {
      parameters: {
        query?: {
          filter?: components['parameters']['filter']
        }
      }
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            'application/json': {
              data?: {
                fields?: components['schemas']['Field'][]
              }
            }
          }
        }
        400: components['responses']['400']
        401: components['responses']['401']
      }
    }
    /** Create One field */
    post: operations['createOneField']
  }
  '/fields/{id}': {
    /** Find One field */
    get: {
      parameters: {
        path: {
          id: components['parameters']['idPath']
        }
      }
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            'application/json': {
              data?: {
                field?: components['schemas']['Field']
              }
            }
          }
        }
        400: components['responses']['400']
        401: components['responses']['401']
      }
    }
    /** Update One fields */
    put: operations['updateOneField']
    /** Delete One field */
    delete: operations['deleteOneField']
  }
  '/relations': {
    /** Find Many relations */
    get: {
      parameters: {
        query?: {
          filter?: components['parameters']['filter']
        }
      }
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            'application/json': {
              data?: {
                relations?: components['schemas']['Relation'][]
              }
            }
          }
        }
        400: components['responses']['400']
        401: components['responses']['401']
      }
    }
    /** Create One relation */
    post: operations['createOneRelation']
  }
  '/relations/{id}': {
    /** Find One relation */
    get: {
      parameters: {
        path: {
          id: components['parameters']['idPath']
        }
      }
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            'application/json': {
              data?: {
                relation?: components['schemas']['Relation']
              }
            }
          }
        }
        400: components['responses']['400']
        401: components['responses']['401']
      }
    }
    /** Update One relations */
    put: operations['updateOneRelation']
    /** Delete One relation */
    delete: operations['deleteOneRelation']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    Object: {
      dataSourceId?: string
      nameSingular?: string
      namePlural?: string
      labelSingular?: string
      labelPlural?: string
      description?: string
      icon?: string
      isCustom?: boolean
      isRemote?: boolean
      isActive?: boolean
      isSystem?: boolean
      createdAt?: string
      updatedAt?: string
      labelIdentifierFieldMetadataId?: string
      imageIdentifierFieldMetadataId?: string
      fields?: {
        edges?: {
          node?: components['schemas']['Field'][]
        }
      }
    }
    Field: {
      type?: string
      name?: string
      label?: string
      description?: string
      icon?: string
      isCustom?: boolean
      isActive?: boolean
      isSystem?: boolean
      isNullable?: boolean
      createdAt?: string
      updatedAt?: string
      fromRelationMetadata?: {
        id?: string
        relationType?: string
        toObjectMetadata?: {
          id?: string
          dataSourceId?: string
          nameSingular?: string
          namePlural?: string
          isSystem?: boolean
        }
        toFieldMetadataId?: string
      }
      toRelationMetadata?: {
        id?: string
        relationType?: string
        fromObjectMetadata?: {
          id?: string
          dataSourceId?: string
          nameSingular?: string
          namePlural?: string
          isSystem?: boolean
        }
        fromFieldMetadataId?: string
      }
      defaultValue?: Record<string, never>
      options?: Record<string, never>
    }
    Relation: {
      relationType?: string
      fromObjectMetadata?: {
        id?: string
        dataSourceId?: string
        nameSingular?: string
        namePlural?: string
        isSystem?: boolean
      }
      fromObjectMetadataId?: string
      toObjectMetadata?: {
        id?: string
        dataSourceId?: string
        nameSingular?: string
        namePlural?: string
        isSystem?: boolean
      }
      toObjectMetadataId?: string
      fromFieldMetadataId?: string
      toFieldMetadataId?: string
    }
  }
  responses: {
    /** @description Invalid request */
    400: {
      content: {
        'application/json': {
          error?: string
        }
      }
    }
    /** @description Unauthorized */
    401: {
      content: {
        'application/json': {
          error?: string
        }
      }
    }
  }
  parameters: {
    /** @description Object id. */
    idPath: string
    /** @description Returns objects starting from a specific cursor. */
    lastCursor?: string
    /**
     * @description Filters objects returned.
     *     Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2,...**
     *     Available comparators are **eq**, **neq**, **in**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**.
     *     You can create more complex filters using conjunctions **or**, **and**, **not**.
     *     Default root conjunction is **and**.
     *     To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL**
     *     To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**
     */
    filter?: string
    /** @description Limits the depth objects returned. */
    depth?: 1 | 2
    /**
     * @description Sorts objects returned.
     *     Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...**
     *     Available directions are **AscNullsFirst**, **AscNullsLast**, **DescNullsFirst**, **DescNullsLast**.
     *     Default direction is **AscNullsFirst**
     */
    orderBy?: string
    /** @description Limits the number of objects returned. */
    limit?: number
  }
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /** Get Open Api Schema */
  GetOpenApiSchema: {
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            openapi?: string
            info?: {
              title?: string
              description?: string
              termsOfService?: string
              contact?: {
                email?: string
              }
              license?: {
                name?: string
                url?: string
              }
            }
            servers?: unknown[]
            components?: {
              schemas?: Record<string, never>
              parameters?: Record<string, never>
              responses?: Record<string, never>
            }
            paths?: Record<string, never>
            tags?: Record<string, never>
          }
        }
      }
    }
  }
  /** Create One object */
  createOneObject: {
    /** @description body */
    requestBody: {
      content: {
        'application/json': components['schemas']['Object']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              object?: components['schemas']['Object']
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Update One objects */
  updateOneObject: {
    parameters: {
      path: {
        id: components['parameters']['idPath']
      }
    }
    /** @description body */
    requestBody: {
      content: {
        'application/json': components['schemas']['Object']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              object?: components['schemas']['Object']
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Delete One object */
  deleteOneObject: {
    parameters: {
      path: {
        id: components['parameters']['idPath']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              object?: {
                /** Format: uuid */
                id?: string
              }
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Create One field */
  createOneField: {
    /** @description body */
    requestBody: {
      content: {
        'application/json': components['schemas']['Field']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              field?: components['schemas']['Field']
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Update One fields */
  updateOneField: {
    parameters: {
      path: {
        id: components['parameters']['idPath']
      }
    }
    /** @description body */
    requestBody: {
      content: {
        'application/json': components['schemas']['Field']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              field?: components['schemas']['Field']
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Delete One field */
  deleteOneField: {
    parameters: {
      path: {
        id: components['parameters']['idPath']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              field?: {
                /** Format: uuid */
                id?: string
              }
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Create One relation */
  createOneRelation: {
    /** @description body */
    requestBody: {
      content: {
        'application/json': components['schemas']['Relation']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              relation?: components['schemas']['Relation']
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Update One relations */
  updateOneRelation: {
    parameters: {
      path: {
        id: components['parameters']['idPath']
      }
    }
    /** @description body */
    requestBody: {
      content: {
        'application/json': components['schemas']['Relation']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              relation?: components['schemas']['Relation']
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
    }
  }
  /** Delete One relation */
  deleteOneRelation: {
    parameters: {
      path: {
        id: components['parameters']['idPath']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': {
            data?: {
              relation?: {
                /** Format: uuid */
                id?: string
              }
            }
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
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
