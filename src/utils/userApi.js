// CREATE
const addRestUser = async (post) => {
  const stringifiedBody = JSON.stringify(post);
  const response = await fetch("/.netlify/functions/addRestUser", {
    body: stringifiedBody,
    method: "POST",
  });
  let responsejson = await response.json();
  return responsejson;
};

// READ
const getRestUser = async () => {
  const response = await fetch(`/.netlify/functions/getRestUser`);
  let posts = await response.json();
  return posts.length ? posts : [];
};

// UPDATE
const updateRestUser = async (post) => {
  const stringifiedBody = JSON.stringify(post);
  const response = await fetch("/.netlify/functions/updateRestUser", {
    body: stringifiedBody,
    method: "PUT",
  });

  let responsejson = await response.json();
  return responsejson;
};

// DELETE
const deleteRestUser = async (id) => {
  const stringifiedBody = JSON.stringify({ id });
  const response = await fetch("/.netlify/functions/deleteRestUser", {
    body: stringifiedBody,
    method: "DELETE",
  });

  return response;
};

const default_export = {
  addRestUser,
  getRestUser,
  updateRestUser,
  deleteRestUser
};

export default default_export;
