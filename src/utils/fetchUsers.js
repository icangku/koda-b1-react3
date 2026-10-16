/**
 *Take a list of users from external API
 * @async
 * @function fetchUsers
 * @returns {Promise<Array<Object>>} Returns Promise filled with array of objects
 * @throws {Error} Throws an error if network fails
 */
export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //Make sure HTTP Code status between 200-299
  if (!res.ok) throw new Error("Failed to fetch users");

  return res.json();
}
