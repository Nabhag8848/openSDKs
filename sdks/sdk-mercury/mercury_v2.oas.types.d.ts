/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** OneOf type helpers */
type Without<T, U> = {[P in Exclude<keyof T, keyof U>]?: never}
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
    ? OneOf<[XOR<A, B>, ...Rest]>
    : never

export interface paths {
  '/account/{id}/statements': {
    /**
     * /account/:id/statements
     * @description Retrieve statement information for a depository or credit account in a given time period (Note: For now, treasury accounts are not supported on this endpoint. You may request this functionality by reaching out to support.) Note that the type of account is signaled by the tag in the payload field. It determines the shape of the object in the contents field.
     */
    get: operations['accountidstatement']
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
   * /account/:id/statements
   * @description Retrieve statement information for a depository or credit account in a given time period (Note: For now, treasury accounts are not supported on this endpoint. You may request this functionality by reaching out to support.) Note that the type of account is signaled by the tag in the payload field. It determines the shape of the object in the contents field.
   */
  accountidstatement: {
    parameters: {
      query?: {
        /** @description Filter the statements so that their startDate is equal to or later than this date. Format: YYYY-MM-DD. */
        start?: string
        /** @description Filter the statements so that their endDate is less than or equal to this date. Format: YYYY-MM-DD. */
        end?: string
      }
      path: {
        /** @description Your 36-character account UUID. */
        id: string
      }
    }
    responses: {
      /** @description 200 */
      200: {
        content: {
          'application/json': OneOf<
            [
              {
                statements?: {
                  companyLegalAddress?: {
                    /** @example 660 Mission Street */
                    address1?: string
                    /** @example Floor 4 */
                    address2?: string
                    /** @example San Francisco */
                    city?: string
                    /** @example US */
                    country?: string
                    /** @example Mercury */
                    name?: string
                    /** @example 94105 */
                    postalCode?: string
                    /** @example CA */
                    region?: string
                  }
                  /** @example Mercury Technologies, Inc. */
                  companyLegalName?: string
                  /** @example 82-1234567 */
                  ein?: string
                  /** @example 2020-03-31T23:59:59Z */
                  endDate?: string
                  details?: {
                    /** @example depository */
                    accountType?: string
                    accountDetails?: {
                      /** @example 1234567765 */
                      accountNumber?: string
                      /** @example 012345678 */
                      routingNumber?: string
                    }
                  }
                  /**
                   * @default 0
                   * @example 99509973.81
                   */
                  endingBalance?: number
                  /** @example 2020-03-01T00:00:00Z */
                  startDate?: string
                }[]
              },
              {
                statements?: {
                  companyLegalAddress?: {
                    /** @example 660 Mission Street */
                    address1?: string
                    /** @example Floor 4 */
                    address2?: string
                    /** @example San Francisco */
                    city?: string
                    /** @example US */
                    country?: string
                    /** @example Mercury */
                    name?: string
                    /** @example 94105 */
                    postalCode?: string
                    /** @example CA */
                    region?: string
                  }
                  /** @example Mercury Technologies, Inc. */
                  companyLegalName?: string
                  /** @example 82-1234567 */
                  ein?: string
                  /** @example 2020-03-31T23:59:59Z */
                  endDate?: string
                  details?: {
                    /** @example credit */
                    accountType?: string
                    accountDetails?: {
                      /**
                       * @default 0
                       * @example 1000
                       */
                      creditLimit?: number
                      /**
                       * @default 0
                       * @example -64.59
                       */
                      totalTransactions?: number
                      /**
                       * @default 0
                       * @example 36.32
                       */
                      totalOneTimePayments?: number
                      /**
                       * @default 0
                       * @example 35.26
                       */
                      totalAutopayPayments?: number
                      /**
                       * @default 0
                       * @example 0.96
                       */
                      totalCashbackEarned?: number
                      /** @example April 1 */
                      dueDate?: string
                    }
                  }
                  /**
                   * @default 0
                   * @example 99509973.81
                   */
                  endingBalance?: number
                  /** @example 2020-03-01T00:00:00Z */
                  startDate?: string
                }[]
              },
            ]
          >
        }
      }
      /** @description 401 */
      401: {
        content: {
          'application/json': {
            errors?: {
              /** @example No matching token found */
              message?: string
            }
          }
        }
      }
      /** @description 404 */
      404: {
        content: {
          'application/json': {
            errors?: {
              /** @example Couldn't find the resource for this ID */
              message?: string
            }
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
