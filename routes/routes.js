import express from "express";
import { postBlogpost } from "../controllers/controllers.js";

//only chain together controller functions

const router = express.Router();

router.post("/api", postBlogpost);

export default router;
