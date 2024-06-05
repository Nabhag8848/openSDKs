// This file is generated by @opensdks/cli, do not edit manually.
export const oasMeta = {
  info: {
    title: 'Payments API',
    description:
      '\nThe payments API allows you to initiate and manage payments and vendors from your Brex business accounts.\n',
    contact: {
      name: 'Admin',
      url: 'https://brex.com',
      email: 'developer-access@brex.com',
    },
    version: '1.0',
  },
  servers: [
    {url: 'https://platform.brexapis.com', description: 'Production'},
    {
      url: 'https://platform.staging.brexapps.com',
      description:
        'Staging (Note: This is not a sandbox. It will not work with customer tokens.)',
    },
  ],
} as const
export default oasMeta