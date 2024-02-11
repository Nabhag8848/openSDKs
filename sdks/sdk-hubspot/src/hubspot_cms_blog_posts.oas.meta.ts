// This file is generated by @opensdks/cli, do not edit manually.
export const oasMeta = {
  info: {
    title: 'Posts',
    description:
      'Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags',
    version: 'v3',
    'x-hubspot-product-tier-requirements': {
      marketing: 'PROFESSIONAL',
      cms: 'STARTER',
    },
    'x-hubspot-documentation-banner': 'NONE',
    'x-hubspot-api-use-case':
      'Retrieve all blog posts created this year as a part of a content audit.',
    'x-hubspot-related-documentation': [
      {
        name: 'Blog Posts Guide',
        url: 'https://hubspot.dev/guides/api/cms/blog-post',
      },
    ],
    'x-hubspot-introduction':
      'Use the blog posts API to create, manage, and publish blog posts on your website.',
  },
  servers: [{url: 'https://api.hubapi.com'}],
} as const
export default oasMeta
