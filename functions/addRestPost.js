const { getPostCollection } = require("./utils/astraClient");

exports.handler = async function (event) {
  const posts = await getPostCollection();
  const body = JSON.parse(event.body);
  try {
    const response = await posts.create(body.id,body);
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
