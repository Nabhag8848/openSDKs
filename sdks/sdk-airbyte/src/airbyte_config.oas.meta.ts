// This file is generated by @opensdks/cli, do not edit manually.
export const oasMeta = {
  info: {
    description:
      "Airbyte Configuration API\n[https://airbyte.io](https://airbyte.io).\n\nThe Configuration API is an internal Airbyte API that is designed for communications between different Airbyte components.\n* It's main purpose is to enable the Airbyte Engineering team to configure the internal state of [Airbyte Cloud](https://airbyte.com/airbyte-cloud)\n* It is also sometimes used by OSS users to configure their own Self-Hosted Airbyte deployment (internal state, etc)\n\nWARNING\n* Airbyte does NOT have active commitments to support this API long-term.\n* OSS users can utilize the Configuration API, but at their own risk.\n* This API is utilized internally by the Airbyte Engineering team and may be modified in the future if the need arises.\n* Modifications by the Airbyte Engineering team could create breaking changes and OSS users would need to update their code to catch up to any backwards incompatible changes in the API.\n\nThis API is a collection of HTTP RPC-style methods. While it is not a REST API, those familiar with REST should find the conventions of this API recognizable.\n\nHere are some conventions that this API follows:\n* All endpoints are http POST methods.\n* All endpoints accept data via `application/json` request bodies. The API does not accept any data via query params.\n* The naming convention for endpoints is: localhost:8000/{VERSION}/{METHOD_FAMILY}/{METHOD_NAME} e.g. `localhost:8000/v1/connections/create`.\n* For all `update` methods, the whole object must be passed in, even the fields that did not change.\n\nAuthentication (OSS):\n* When authenticating to the Configuration API, you must use Basic Authentication by setting the Authentication Header to Basic and base64 encoding the username and password (which are `airbyte` and `password` by default - so base64 encoding `airbyte:password` results in `YWlyYnl0ZTpwYXNzd29yZA==`). So the full header reads `'Authorization': \"Basic YWlyYnl0ZTpwYXNzd29yZA==\"`\n",
    version: '1.0.0',
    title: 'Airbyte Configuration API',
    contact: {email: 'contact@airbyte.io'},
    license: {name: 'MIT', url: 'https://opensource.org/licenses/MIT'},
  },
  servers: [
    {url: 'https://cloud.airbyte.com/api', description: 'Airbyte Cloud'},
    {url: 'http://localhost:8000/api', description: 'Local Development'},
  ],
} as const
export default oasMeta