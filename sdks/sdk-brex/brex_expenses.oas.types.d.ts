/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & {[P in K]-?: T[P]}

export interface paths {
  '/v1/expenses/card': {
    /**
     * List expenses
     * @description List expenses under the same account. Admin and bookkeeper have access to any expense, and regular users can only access their own.
     */
    get: operations['listExpenses']
  }
  '/v1/expenses/card/receipt_match': {
    /**
     * Create a new receipt match
     * @description
     * The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.
     *
     * Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they're available for your language to upload these files.
     */
    post: operations['receiptMatch']
  }
  '/v1/expenses/card/{expense_id}': {
    /**
     * Get an expense
     * @description Get an expense by its ID.
     */
    get: operations['getExpense']
    /**
     * Update an expense
     * @description Update an expense. Admin and bookkeeper have access to any expense, and regular users can only access their own.
     */
    put: operations['updateExpense']
  }
  '/v1/expenses/card/{expense_id}/receipt_upload': {
    /**
     * Create a new receipt upload
     * @description
     * The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.
     *
     * Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they're available for your language to upload these files.
     */
    post: operations['receiptUpload']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    Budget: {
      /** @description Unique ID for the Budget. */
      id: string
      /** @description Name for the Budget. */
      name: string
    }
    /**
     * @description The category of expenses.
     * @enum {string}
     */
    Category:
      | 'ADVERTISING_AND_MARKETING'
      | 'GROCERY'
      | 'TELEPHONY'
      | 'OFFICE_SUPPLIES'
      | 'PRIVATE_AIR_TRAVEL'
      | 'CLOTHING'
      | 'CAR_RENTAL'
      | 'VEHICLE_EXPENSES'
      | 'RESTAURANTS'
      | 'GAMBLING'
      | 'FLOWERS'
      | 'ELECTRONICS'
      | 'LEGAL_SERVICES'
      | 'UTILITIES'
      | 'FURNITURE'
      | 'BARS_AND_NIGHTLIFE'
      | 'LAUNDRY'
      | 'EVENT_EXPENSES'
      | 'SHIPPING'
      | 'OTHER_TRAVEL_EXPENSES'
      | 'CHARITY'
      | 'SOFTWARE_NON_RECURRING'
      | 'LODGING'
      | 'FACILITIES_EXPENSES'
      | 'SERVERS'
      | 'CONFERENCES'
      | 'FOOD_DELIVERY'
      | 'RENT'
      | 'AIRLINE_EXPENSES'
      | 'OTHER_BUSINESS_EXPENSES'
      | 'BANK_AND_FINANCIAL_FEES'
      | 'BOOKS_AND_NEWSPAPERS'
      | 'CONSULTANT_AND_CONTRACTOR'
      | 'CORPORATE_INSURANCE'
      | 'DIGITAL_GOODS'
      | 'FEES_AND_LICENSES_AND_TAXES'
      | 'GAS_AND_FUEL'
      | 'GENERAL_MERCHANDISE'
      | 'MEDICAL'
      | 'MEMBERSHIPS_AND_CLUBS'
      | 'PARKING_EXPENSES'
      | 'POLITICAL_DONATIONS'
      | 'PUBLIC_TRANSPORTATION'
      | 'RECURRING_SOFTWARE_AND_SAAS'
      | 'RIDESHARE_AND_TAXI'
      | 'TOLL_AND_BRIDGE_FEES'
      | 'TRAINING_AND_EDUCATION'
      | 'TRAVEL_WIFI'
    /** @enum {string} */
    ExpensePaymentStatus:
      | 'NOT_STARTED'
      | 'PROCESSING'
      | 'CANCELED'
      | 'DECLINED'
      | 'CLEARED'
      | 'REFUNDING'
      | 'REFUNDED'
      | 'CASH_ADVANCE'
      | 'CREDITED'
      | 'AWAITING_PAYMENT'
      | 'SCHEDULED'
    /** @enum {string} */
    ExpenseStatus:
      | 'DRAFT'
      | 'SUBMITTED'
      | 'APPROVED'
      | 'OUT_OF_POLICY'
      | 'VOID'
      | 'CANCELED'
      | 'SPLIT'
      | 'SETTLED'
    /** @enum {string} */
    ExpenseType: 'CARD' | 'BILLPAY' | 'REIMBURSEMENT' | 'REPAYMENT'
    /**
     * @description The reason for the payment's status.
     * @enum {string}
     */
    PaymentStatusReason:
      | 'OTHER'
      | 'APPROVED'
      | 'EXCEEDED_BUDGET_LIMIT'
      | 'BUDGET_EXPIRED'
      | 'NO_BUDGET'
      | 'BUDGET_NOT_YET_STARTED'
      | 'BUDGET_CATEGORY_RESTRICTION'
      | 'BUDGET_MERCHANT_RESTRICTION'
      | 'SUSPECTED_FRAUD'
      | 'EXCEEDED_GLOBAL_LIMIT'
      | 'EXCEEDED_USER_LIMIT'
      | 'EXCEEDED_CARD_LIMIT'
      | 'INVALID_EXPIRATION_DATE'
      | 'CARD_NOT_ACTIVE'
      | 'INVALID_CARD_CREDENTIALS'
      | 'INVALID_BILLING_ADDRESS'
      | 'CARD_SUSPENDED'
      | 'CARD_TERMINATED'
      | 'CARD_EXPIRED'
      | 'MCC_BLOCKED'
      | 'USER_SUSPENDED'
      | 'INVALID_PIN'
      | 'INVALID_CVV'
      | 'EXCEEDED_PIN_ATTEMPTS'
      | 'INSIDE_SANCTIONED_COUNTRY'
      | 'SOFT_EXPIRATION'
      | 'TRANSFERRED_CARD_NEW_MERCHANT'
      | 'EXCEEDED_ANCESTOR_BUDGET_LIMIT'
      | 'EXCEEDED_BUDGET_TRANSACTION_LIMIT'
      | 'TOS_BLOCKED'
      | 'COMPLIANCE_BLOCKED'
    /** @description The pre-signed file upload URI and unique identifier of the request. */
    CreateAsyncFileUploadResponse: {
      /** @description The unique identifier for the request. */
      id: string
      /**
       * @description The pre-signed S3 link that should be used to upload the file.
       * The maximum size accepted for this document is 50 MB.
       */
      uri: string
    }
    /** @description The department associated with the expense. */
    Department: {
      /** @description The unique identifier for the department. */
      id: string
      /** @description The name of the department. */
      name: string
    }
    /** @description The expense object that has expandable fields, e.g., `location`, `department`, and `receipts`. */
    ExpandableExpense: {
      /** @description Unique ID associated with the expense. */
      id: string
      /** @description The memo of the expense. */
      memo?: string | null
      location_id?: string | null
      location?: components['schemas']['Location']
      department_id?: string | null
      department?: components['schemas']['Department']
      /**
       * Format: date-time
       * @description The last time the expense was updated.
       */
      updated_at: string
      category?: components['schemas']['Category']
      merchant_id?: string | null
      merchant?: components['schemas']['Merchant']
      /** @description A list of receipts associated with the expense. */
      receipts?: components['schemas']['Receipt'][] | null
      budget_id?: string | null
      budget?: components['schemas']['Budget']
      /** @description The original amount of the expense is the amount that the employee submitted or incurred for reimbursements or card spends. */
      original_amount?: components['schemas']['Money']
      /** @description The billing amount of the expense is the amount that the entity is charged, on the entity's currency, for reimbursements or card spends. */
      billing_amount?: components['schemas']['Money']
      /**
       * Format: date-time
       * @description The time the purchase was made.
       */
      purchased_at?: string
      status?: components['schemas']['ExpenseStatus']
      expense_type?: components['schemas']['ExpenseType']
      payment_status?: components['schemas']['ExpensePaymentStatus']
      user_id?: string | null
      user?: components['schemas']['User']
      payment?: components['schemas']['Payment']
      /** @description A list of custom field values associated with the expense. */
      custom_fields?: components['schemas']['CustomField'][]
    }
    Expense: {
      /** @description Unique ID associated with the expense. */
      id: string
      /** @description The memo of the expense. */
      memo?: string | null
      location_id?: string | null
      department_id?: string | null
      /**
       * Format: date-time
       * @description The last time the expense was updated.
       */
      updated_at: string
      category?: components['schemas']['Category']
      merchant_id?: string | null
      budget_id?: string | null
      /** @description The original amount of the expense is the amount that the employee submitted or incurred for reimbursements or card spends. */
      original_amount?: components['schemas']['Money']
      /** @description The billing amount of the expense is the amount that the entity is charged, on the entity's currency, for reimbursements or card spends. */
      billing_amount?: components['schemas']['Money']
      /**
       * Format: date-time
       * @description The time the purchase was made.
       */
      purchased_at?: string
      status?: components['schemas']['ExpenseStatus']
      payment_status?: components['schemas']['ExpensePaymentStatus']
    }
    /** @description The location associated with the expense. */
    Location: {
      /** @description The unique identifier for the location. */
      id: string
      /** @description The name of the location. */
      name: string
    }
    Merchant: {
      /** @description Merchant descriptor, it can be the merchant name. */
      raw_descriptor: string
      /** @description A four-digit number listed in ISO 18245 for retail financial services, e.g. 4121 for Taxicabs and Rideshares. Please refer to https://en.wikipedia.org/wiki/Merchant_category_code for more details. */
      mcc: string
      /** @description Merchant's country, in ISO 3166-1 alpha-3 format. */
      country: string
    }
    /**
     * @description
     * Money fields can be signed or unsigned. Fields are signed (an unsigned value will be interpreted as positive). The amount of money will be represented in the smallest denomination
     * of the currency indicated. For example, USD 7.00 will be represented in cents with an amount of 700.
     */
    Money: {
      /**
       * Format: int64
       * @description The amount of money, in the smallest denomination of the currency indicated by currency. For example, when currency is USD, amount is in cents.
       */
      amount?: number
      /** @description The type of currency, in ISO 4217 format. Default to USD if not specified */
      currency?: string | null
    }
    Page_ExpandableExpense_: {
      next_cursor?: string | null
      items: components['schemas']['ExpandableExpense'][]
    }
    /** @description The payment associated with the expense. */
    Payment: {
      /** @description Unique ID for the payment. */
      id: string
      payment_instrument: components['schemas']['PaymentInstrument']
      status_reason: components['schemas']['PaymentStatusReason']
    }
    PaymentInstrument: {
      /**
       * @description The type of payment instrument.
       * @enum {string}
       */
      type?: 'CARD'
    } & components['schemas']['CardPaymentInstrument']
    CardPaymentInstrument: WithRequired<
      {
        type: 'card'
        /** @description Unique ID for the card. */
        id: string
      } & Omit<components['schemas']['PaymentInstrument'], 'type'>,
      'id'
    >
    /** @description The receipt associated with the expense. */
    Receipt: {
      /** @description The unique identifier for the receipt. */
      id: string
      /** @description [Presigned S3 link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)(s) to download file(s) of the receipt. Link(s) expire in 15 minutes. */
      download_uris?: string[] | null
    }
    /** @description The parameter for creating a receipt match. */
    ReceiptMatchRequest: {
      /** @description The name of the receipt (with the file extension). It will be used in the matching result email. */
      receipt_name: string
    }
    /** @description The parameter for creating a receipt upload. */
    ReceiptUploadRequest: {
      /** @description The name of the receipt (with the file extension). */
      receipt_name: string
    }
    /** @description The parameter for updating an expense. */
    UpdateExpenseRequest: {
      /** @description Expense memo. */
      memo?: string | null
    }
    User: {
      /** @description Unique ID for the User. */
      id: string
      /** @description First name of the User. */
      first_name: string
      /** @description Last name of the User. */
      last_name: string
      department_id?: string | null
      location_id?: string | null
    }
    /** @description The custom field associated with the expense. */
    CustomField: {
      /** @description The key of the custom field. */
      key: string
      /** @description The value of the custom field. */
      value?: {
        /**
         * @description The type of the custom field value.
         * @enum {string}
         */
        value_type: 'SINGLE_VALUE' | 'LIST'
        /**
         * @description The type of the custom field data.
         * @enum {string}
         */
        data_type:
          | 'STRING'
          | 'DECIMAL'
          | 'BOOLEAN'
          | 'ENUM'
          | 'TIMESTAMP'
          | 'MONEY'
          | 'OPTION_STRING'
        /** @description The data of the custom field. */
        data:
          | string
          | number
          | boolean
          | components['schemas']['Money']
          | components['schemas']['OptionString']
      } | null
    }
    /** @description Value with identifier and label */
    OptionString: {
      /** @description The identifier when custom field data is of type option string. */
      option_id: string
      /** @description The label when custom field data is of type option string. */
      option_label: string
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
  /**
   * List expenses
   * @description List expenses under the same account. Admin and bookkeeper have access to any expense, and regular users can only access their own.
   */
  listExpenses: {
    parameters: {
      query?: {
        /**
         * @description Get additional details for the expense, e.g. merchant mcc code, by passing in `expand[]=merchant`. Query parameters include `location`, `department`, `merchant`, `receipts.download_uris`, `user`, `budget` and `payment`.
         * @example [
         *   "merchant",
         *   "location"
         * ]
         */
        'expand[]'?: string[] | null
        /** @description Get expenses belong to provided user(s). */
        'user_id[]'?: string[] | null
        /** @description Get itemized expenses belong to provided parent expenses ID(s). */
        'parent_expense_id[]'?: string[] | null
        'budget_id[]'?: string[] | null
        'status[]'?: components['schemas']['ExpenseStatus'][] | null
        'payment_status[]'?:
          | components['schemas']['ExpensePaymentStatus'][]
          | null
        /**
         * @description
         * Shows only expenses with a `purchased_at` on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6), e.g. 2022-11-12T23:59:59.999
         *
         * @example 2023-01-01T23:59:59.999
         */
        purchased_at_start?: string | null
        /**
         * @description
         * Shows only expenses with a `purchased_at` on or before this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6), e.g. 2022-11-12T23:59:59.999
         *
         * @example 2023-01-10T23:59:59.999
         */
        purchased_at_end?: string | null
        /** @description Load custom fields for the expenses. */
        load_custom_fields?: boolean | null
        /**
         * @description
         * The cursor to use for pagination. This is the `next_cursor` value returned from the previous response.
         */
        cursor?: string | null
        limit?: number | null
      }
    }
    responses: {
      /** @description listExpenses 200 response */
      200: {
        content: {
          'application/json': components['schemas']['Page_ExpandableExpense_']
        }
      }
      /** @description Bad request */
      400: {
        content: never
      }
      /** @description Unauthorized */
      401: {
        content: never
      }
      /** @description Forbidden */
      403: {
        content: never
      }
    }
  }
  /**
   * Create a new receipt match
   * @description
   * The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.
   *
   * Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they're available for your language to upload these files.
   */
  receiptMatch: {
    requestBody: {
      content: {
        'application/json': components['schemas']['ReceiptMatchRequest']
      }
    }
    responses: {
      /** @description receiptMatch 200 response */
      200: {
        content: {
          'application/json': components['schemas']['CreateAsyncFileUploadResponse']
        }
      }
      /** @description Bad request */
      400: {
        content: never
      }
      /** @description Unauthorized */
      401: {
        content: never
      }
    }
  }
  /**
   * Get an expense
   * @description Get an expense by its ID.
   */
  getExpense: {
    parameters: {
      query?: {
        /**
         * @description Get additional details for the expense, e.g. merchant mcc code, by passing in `expand[]=merchant`. Query parameters include `location`, `department`, `merchant`, `receipts.download_uris`, `user`, `budget` and `payment`.
         * @example [
         *   "merchant",
         *   "location"
         * ]
         */
        'expand[]'?: string[] | null
        /** @description Load custom fields for the expense. */
        load_custom_fields?: boolean | null
      }
      path: {
        expense_id: string
      }
    }
    responses: {
      /** @description getExpense 200 response */
      200: {
        content: {
          'application/json': components['schemas']['ExpandableExpense']
        }
      }
      /** @description Bad request */
      400: {
        content: never
      }
      /** @description Unauthorized */
      401: {
        content: never
      }
      /** @description Forbidden */
      403: {
        content: never
      }
      /** @description Not Found */
      404: {
        content: never
      }
    }
  }
  /**
   * Update an expense
   * @description Update an expense. Admin and bookkeeper have access to any expense, and regular users can only access their own.
   */
  updateExpense: {
    parameters: {
      path: {
        expense_id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateExpenseRequest']
      }
    }
    responses: {
      /** @description updateExpense 200 response */
      200: {
        content: {
          'application/json': components['schemas']['Expense']
        }
      }
      /** @description Bad request */
      400: {
        content: never
      }
      /** @description Unauthorized */
      401: {
        content: never
      }
      /** @description Forbidden */
      403: {
        content: never
      }
      /** @description Not Found */
      404: {
        content: never
      }
    }
  }
  /**
   * Create a new receipt upload
   * @description
   * The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.
   *
   * Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they're available for your language to upload these files.
   */
  receiptUpload: {
    parameters: {
      path: {
        expense_id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ReceiptUploadRequest']
      }
    }
    responses: {
      /** @description receiptUpload 200 response */
      200: {
        content: {
          'application/json': components['schemas']['CreateAsyncFileUploadResponse']
        }
      }
      /** @description Bad request */
      400: {
        content: never
      }
      /** @description Unauthorized */
      401: {
        content: never
      }
      /** @description Forbidden */
      403: {
        content: never
      }
      /** @description Not Found */
      404: {
        content: never
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