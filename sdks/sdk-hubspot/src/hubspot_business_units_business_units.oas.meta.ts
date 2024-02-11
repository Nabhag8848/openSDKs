// This file is generated by @opensdks/cli, do not edit manually.
export const oasMeta = {
  info: {
    title: 'Business Units',
    description: 'Retrieve Business Unit information.',
    version: 'v3',
    'x-hubspot-product-tier-requirements': {marketing: 'ENTERPRISE'},
    'x-hubspot-documentation-banner': 'NONE',
    'x-hubspot-api-use-case':
      'You have a third-party service to manage organizational data for your business, and you need to confirm the business unit that a specific HubSpot user is in.',
    'x-hubspot-related-documentation': [
      {
        name: 'Business Units Guide',
        url: 'https://hubspot.dev/guides/api/settings/business-units-api',
      },
    ],
    'x-hubspot-introduction':
      'Use the business units API to retrieve information about the business unit associated with a user in your HubSpot account.',
  },
  servers: [{url: 'https://api.hubapi.com'}],
} as const
export default oasMeta
