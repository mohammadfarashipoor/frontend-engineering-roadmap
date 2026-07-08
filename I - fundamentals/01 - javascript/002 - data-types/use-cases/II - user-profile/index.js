/**
 * Use Case: User Profile Rendering
 *
 * Problem:
 * A missing field and an intentionally empty field
 * should not be treated the same.
 *
 * What You'll Learn:
 * - null
 * - undefined
 * - Missing properties
 */

const users = [
  {
    name: "Ali",
    avatar: null,
  },
  {
    name: "Sara",
  },
];

function getAvatar(user) {
  if (user.avatar === null) {
    return "Use default avatar";
  }

  if (user.avatar === undefined) {
    return "Avatar field is missing";
  }

  return user.avatar;
}

users.forEach((user) => {
  console.log(user.name);
  console.log(getAvatar(user));
});