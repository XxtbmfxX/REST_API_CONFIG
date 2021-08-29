import { createBlogpost } from "../services/services.js";

//we deside wath to do whit the returned data
//also the status

//More services or diferent functions

const postBlogpost = async (req, res, next) => {
  const { user, content } = req.body;
  try {
    await createBlogpost(user, content);
    //other service call (or same service, different function can go here)
    res.status(201);
  } catch (error) {
    console.log(error.message);
    res.status(500) && next(error);
  }
};

export { postBlogpost };
