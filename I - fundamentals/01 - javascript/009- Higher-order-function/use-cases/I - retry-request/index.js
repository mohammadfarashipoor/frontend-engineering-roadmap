/**
 * Use Case: Retry Request
 *
 * Problem:
 * Network requests may fail temporarily.
 * Instead of duplicating retry logic for every request,
 * we inject the request behavior into a reusable function.
 *
 * What You'll Learn:
 * - Higher-Order Function
 * - Passing functions as arguments
 * - Separating reusable logic from custom behavior
 */

function retryRequest(request, retries = 3) {
  let attempts = 0;

  while (attempts < retries) {
    try {
      attempts++;
      return request();
    } catch (error) {
      console.log(`Attempt ${attempts} failed.`);
    }
  }

  console.log("All retry attempts failed.");
}

function fetchUser() {
  console.log("Fetching user...");

  if (Math.random() < 0.7) {
    throw new Error("Network Error");
  }

  return {
    id: 1,
    name: "John"
  };
}

const user = retryRequest(fetchUser);

console.log(user);