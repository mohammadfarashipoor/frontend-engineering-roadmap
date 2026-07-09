/**
 * Use Case: Query Parameter Parser
 *
 * Problem:
 * URL search parameters are always strings.
 *
 * What You'll Learn:
 * - Explicit number conversion
 * - Explicit boolean conversion
 */

const url = new URL(
  "https://example.com/products?page=2&limit=20&featured=true"
);

const page = Number(url.searchParams.get("page"));
const limit = Number(url.searchParams.get("limit"));
const featured = url.searchParams.get("featured") === "true";

console.log(page, typeof page);
console.log(limit, typeof limit);
console.log(featured, typeof featured);