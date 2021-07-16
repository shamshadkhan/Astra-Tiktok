const { getCollection } = require("./utils/astraClient");

exports.handler = async function () {
  const posts = await getCollection();
  try {
    const response = await posts.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(response).map((i) => response[i])),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
