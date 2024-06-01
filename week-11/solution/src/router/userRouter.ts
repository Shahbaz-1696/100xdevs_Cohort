import { Hono } from "hono";
import {
  getAllUsers,
  getUser,
  signin,
  signup,
} from "../controller/userController";
import { authMiddleware } from "../middleware/authMidlleware";

export const userRouter = new Hono();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

userRouter.get("/", authMiddleware, getAllUsers);
userRouter.get("/:id", authMiddleware, getUser);
