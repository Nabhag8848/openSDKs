// This file is generated by @opensdks/cli, do not edit manually.
export const oasMeta = {
  info: {
    title: 'Calling Extensions',
    description:
      'Provides a way for apps to add custom calling options to a contact record. This works in conjunction with the [Calling SDK](#), which is used to build your phone/calling UI. The endpoints here allow your service to appear as an option to HubSpot users when they access the *Call* action on a contact record. Once accessed, your custom phone/calling UI will be displayed in an iframe at the specified URL with the specified dimensions on that record.',
    version: 'v3',
    'x-hubspot-product-tier-requirements': {
      sales: 'STARTER',
      service: 'STARTER',
    },
    'x-hubspot-documentation-banner': 'NONE',
    'x-hubspot-api-use-case':
      "Create an integration for a third-party calling service that your company uses, rather than using HubSpot's native calling tool.",
    'x-hubspot-related-documentation': [
      {
        name: 'Call SDK Guide',
        url: 'https://hubspot.dev/guides/api/crm/extensions/calling-sdk',
      },
    ],
    'x-hubspot-introduction':
      'Use the calling extensions SDK to provide HubSpot users with custom calling options on CRM records.',
  },
  servers: [{url: 'https://api.hubapi.com'}],
} as const
export default oasMeta
