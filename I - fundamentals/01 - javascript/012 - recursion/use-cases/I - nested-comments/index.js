/**
 * Use Case: Nested Comments
 *
 * Problem:
 * Comments can contain an unlimited number of replies.
 *
 * What You'll Learn:
 * - Recursive rendering
 * - Base case
 * - Recursive case
 */

const comments = [
  {
    id: 1,
    author: "John",
    replies: [
      {
        id: 2,
        author: "Alice",
        replies: [
          {
            id: 3,
            author: "Bob",
            replies: []
          }
        ]
      },
      {
        id: 4,
        author: "Emma",
        replies: []
      }
    ]
  }
];

function renderComments(comments, depth = 0) {
  for (const comment of comments) {
    console.log(`${"  ".repeat(depth)}- ${comment.author}`);

    if (comment.replies.length > 0) {
      renderComments(comment.replies, depth + 1);
    }
  }
}

renderComments(comments);