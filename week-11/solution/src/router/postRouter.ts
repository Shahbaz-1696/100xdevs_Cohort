import { Hono } from "hono";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  getUserPosts,
  updatePost,
} from "../controller/postController";
import { authMiddleware } from "../middleware/authMidlleware";

export const postRouter = new Hono();

postRouter.get("/all-users", getAllPosts);
postRouter.post("/create-post", authMiddleware, createPost);
postRouter.get("/", authMiddleware, getUserPosts);
postRouter.put("/post/:id", authMiddleware, updatePost);
postRouter.get("/post/:id", authMiddleware, getPost);
postRouter.delete("/post/:id", authMiddleware, deletePost);
