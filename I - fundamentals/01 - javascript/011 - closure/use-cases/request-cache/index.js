/**
 * Use Case: API Request Cache
 *
 * Problem:
 * Fetching the same data multiple times wastes network resources
 * and slows down the application.
 *
 * Why Closure?
 * The closure keeps a private cache that persists between calls,
 * avoiding unnecessary API requests.
 */

function createCachedFetcher(fetcher) {
  const cache = new Map();

  return async function (url) {
    if (cache.has(url)) {
      console.log(`📦 Cache hit: ${url}`);
      return cache.get(url);
    }

    console.log(`🌐 Fetching: ${url}`);

    const data = await fetcher(url);

    cache.set(url, data);

    return data;
  };
}

// Fake API
async function fakeFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url,
        timestamp: Date.now(),
      });
    }, 1000);
  });
}

const fetchUser = createCachedFetcher(fakeFetch);

(async () => {
  console.log(await fetchUser("/users"));

  console.log(await fetchUser("/users"));

  console.log(await fetchUser("/posts"));

  console.log(await fetchUser("/posts"));
})();