const uuid = require("node-uuid");
const { getUserCollection } = require("./utils/astraClient");

let id = uuid.v1();
exports.handler = async function (event) {
  const posts = await getUserCollection();
  try {
    const response = await posts.create(id,event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
