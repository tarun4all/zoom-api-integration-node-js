# zoom-api-integration-node-js

All APIs under the Zoom API are based on REST architecture and are accessed via HTTP at specified URLs. The base URL for all requests is https://api.zoom.us/v2/. The complete URL varies depending on the endpoint of the resource being accessed. For instance, you can list all users on an account via a GET request to this URL: https://api.zoom.us/v2/users/.

Note: To support GDPR requirements of EU customers, you may use https://eu01api-www4local.zoom.us as the base URL for all API requests associated with EU accounts.

In our Node js App, we are using Zoom v2 JWT token concept. for your token please refer to https://marketplace.zoom.us/docs/guides/build/jwt-app
