import {
  initSDK,
  type ClientOptions,
  type OpenAPITypes,
  type SdkDefinition,
  type SDKTypes,
} from '@opensdks/runtime'
import type Oas_CRM_Associations from '../hubspot_crm_associations.oas.types.js'
import type Oas_CRM_Companies from '../hubspot_crm_companies.oas.types.js'
import type Oas_CRM_Contacts from '../hubspot_crm_contacts.oas.types.js'
import type Oas_CRM_Deals from '../hubspot_crm_deals.oas.types.js'
import {default as oas_crm_associations} from './hubspot_crm_associations.oas.meta.js'
import {default as oas_crm_companies} from './hubspot_crm_companies.oas.meta.js'
import {default as oas_crm_contacts} from './hubspot_crm_contacts.oas.meta.js'
import {default as oas_crm_deals} from './hubspot_crm_deals.oas.meta.js'

export type {
  Oas_CRM_Associations,
  Oas_CRM_Contacts,
  Oas_CRM_Companies,
  Oas_CRM_Deals,
}

export {
  oas_crm_companies,
  oas_crm_contacts,
  oas_crm_deals,
  oas_crm_associations,
}

export type HubspotSDKTypes = SDKTypes<
  OpenAPITypes, // Hubspot has mutliple APIs
  Omit<ClientOptions, 'headers'> & {
    headers: {
      /** Hubspot access token goes into the bearer header */
      authorization: `Bearer ${string}`
      [k: string]: string
    }
  }
>

export const hubspotSdkDef = {
  types: {} as HubspotSDKTypes,
  defaultOptions: {},
  createClient(ctx, _options) {
    const options: typeof _options = {
      ..._options,
      baseUrl: _options.baseUrl ?? oas_crm_contacts.servers[0].url,
    }
    const contacts = ctx.createClient<Oas_CRM_Contacts['paths']>(options)
    const companies = ctx.createClient<Oas_CRM_Companies['paths']>(options)
    const deals = ctx.createClient<Oas_CRM_Deals['paths']>(options)
    const associations =
      ctx.createClient<Oas_CRM_Associations['paths']>(options)
    return {contacts, companies, deals, associations}
  },
} satisfies SdkDefinition<HubspotSDKTypes>

export default hubspotSdkDef

export function initHubspotSDK(opts: HubspotSDKTypes['options']) {
  return initSDK(hubspotSdkDef, opts)
}

export type HubspotSDK = ReturnType<typeof initHubspotSDK>