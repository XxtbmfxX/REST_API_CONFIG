import { blogpostDb } from "../db/db.js";

//calls to aditional tables, data stores (ex: Redis)
//or call an external endpoint

const createBlogpost = async (user, content) => {
  try {
    return await blogpostDb(user, content);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { createBlogpost };
