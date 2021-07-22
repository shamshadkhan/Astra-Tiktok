const { getPostCollection } = require("./utils/astraClient");

exports.handler = async function (event) {
  const posts = await getPostCollection();
  const body = JSON.parse(event.body);
  console.log(body)
  try {
    const response = await posts.update(body.id, body.data);
    const post = await posts.findOne({ id: { $eq: body.id } });
    return {
      statusCode: 200,
      body: JSON.stringify(post),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
