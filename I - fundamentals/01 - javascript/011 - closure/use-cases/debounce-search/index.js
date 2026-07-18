/**
 * Use Case: Debounced Search
 *
 * Problem:
 * Triggering an API request on every keystroke is inefficient
 * and can overload the server.
 *
 * Why Closure?
 * The returned function remembers the `timer` variable between
 * executions, allowing previous timers to be cancelled.
 */

function debounce(callback, delay = 500) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log(`Searching for "${query}"...`);
}, 800);

// Simulating user typing
search("r");
search("re");
search("rea");
search("reac");
search("react");

// Only the last call will be executed after 800ms.