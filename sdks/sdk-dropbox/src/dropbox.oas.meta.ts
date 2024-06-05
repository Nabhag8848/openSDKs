// This file is generated by @opensdks/cli, do not edit manually.
export const oasMeta = {
  info: {
    title: 'Dropbox API Reference',
    description:
      'The powerful, yet simple, Dropbox API allows you to manage and control content and team settings programmatically and extend Dropbox capabilities in new and powerful ways. This is a collection that includes requests to all endpoints in the Dropbox API. \n\nThe Dropbox API is divided in two groups of endpoints: User Endpoints and Business Endpoints. Operations that would most likely be executed by a user, such as file operations, are in the User Endpoints folder. Operations that would most likely be executed by a team administrator, such as adding users to groups, live in the Business Endpoints folder. \n\nIf you are new to Dropbox Business and Team Administration, please have a look at the [Dropobox Admin Guide](https://help.dropbox.com/guide/admin/how-to-get-started#dropbox-admin-guide). \n\nIf you want more information on how to use our API please refer to our [Developer Portal](https://www.dropbox.com/developers). \n\n# What\'s in the collection?\n\nThe endpoints are organized in the following folders:\n* account\n* auth\n* check\n* contacts\n* file_properties\n* file_requests\n* files\n* sharing\n* team\n* team_log\n* users\n\n# Authorization\n\n## OAuth 2.0 for API Access\nDropbox uses OAuth 2.0, an open specification, to authorize access to data. To get an OAuth token from Dropbox to enable Postman to access your Dropbox account via the API you’ll need to create a new app on the DBX Platform.\n\n## Creating an App on the DBX Platform\nNavigate to https://www.dropbox.com/developers/apps and select “Create app” \n1. Choose an API  \n2. Choose the type of access you need \n3. Give your app a name  \n4. Choose the Dropbox account that will own your app  \n\nFor reference, please use the [Dropbox OAuth guide](https://www.dropbox.com/lp/developers/reference/oauth-guide) \n\n## Generating an Access Token\nOnce you select “Create app” a page will load that displays information about your newly created app. To generate an access token scroll down to “OAuth 2” and click “Generate” beneath “Generated access token.” The token will display as a long string of characters. Copy this token for use with the Postman Collection.\n\n## Adding an Access Token to the requests\nIn the Postman client, click on the three dots to the right of the collection name to "View more actions."\n\n![Screenshot of adding access token](https://www.dropbox.com/s/sfebu9ai76cbq39/Screen%20Shot%202020-10-28%20at%2012.50.56%20AM.png?raw=1)\n\nThen, click "Edit."\n\nClick on the "Variables" tab and, in the row for the `access_token` variable, paste your access token in the `CURRENT VALUE` column. The default value is `your-access-token-here`.\n\n![Screenshot of adding access token](https://www.dropbox.com/s/ahnbxwe6oscjues/Screen%20Shot%202020-10-28%20at%2012.51.13%20AM.png?raw=1)\n\nFor information on sessions and variables in Postman see the blog post at https://blog.postman.com/sessions-faq/.\n\n# Notes\n* Dropbox also has a Postman Collection in the API Network to help administrators with team management workflows. It is called [Dropbox Team Admin Workflows](). \n\n',
    version: '1.0.0',
  },
  servers: [{url: 'https://api.dropbox.com'}],
} as const
export default oasMeta