/**
 * Use Case: API Client
 *
 * Problem:
 * The access token should only be managed
 * by the API client.
 *
 * What You'll Learn:
 * - Private state
 * - Function Scope
 */

function createApiClient() {
  let accessToken = null;

  return {
    login(token) {
      accessToken = token;
    },

    request(endpoint) {
      console.log(
        `GET ${endpoint} with token: ${accessToken}`
      );
    },
  };
}

const api = createApiClient();

api.login("abc123");

api.request("/products");