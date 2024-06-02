// This file is generated by @opensdks/cli, do not edit manually.
export const oasMeta = {
  info: {
    title: 'Onboarding API',
    description:
      '\nThe onboarding API allows you to refer your customers and personal contacts to Brex.\n',
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