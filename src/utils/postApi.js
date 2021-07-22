// CREATE
const addRestPost = async (post) => {
  const stringifiedBody = JSON.stringify(post);
  const response = await fetch("/.netlify/functions/addRestPost", {
    body: stringifiedBody,
    method: "POST",
  });
  let responsejson = await response.json();
  return responsejson;
};

// READ
const getRestPost = async () => {
  const response = await fetch(`/.netlify/functions/getRestPost`);
  let posts = await response.json();
  return posts.length ? posts : [];
};

// UPDATE
const updateRestPost = async (post) => {
  const stringifiedBody = JSON.stringify(post);
  const response = await fetch("/.netlify/functions/updateRestPost", {
    body: stringifiedBody,
    method: "PUT",
  });
  let responsejson = await response.json();
  return responsejson;
};

// DELETE
const deleteRestPost = async (id) => {
  const stringifiedBody = JSON.stringify({ id });
  const response = await fetch("/.netlify/functions/deleteRestPost", {
    body: stringifiedBody,
    method: "DELETE",
  });

  return response;
};

const default_export = {
  addRestPost,
  getRestPost,
  updateRestPost,
  deleteRestPost
};

export default default_export;
