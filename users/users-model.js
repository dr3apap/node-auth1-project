const db = require("../data/dbConfig.js");
async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function find() {
  return db("users").select("id", "username");
}

function findBy(sorted) {
  return db("users").where(sorted);
}

function findById(id) {
  return db("users")
    .where({ id })
    .select("id", "username", "password")
    .first();
}

module.exports = {
  add,
  find,
  findBy,
  findById,
};
