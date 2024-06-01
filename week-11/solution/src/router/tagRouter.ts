import { Hono } from "hono";
import { getPostsByTags, getTags } from "../controller/tagController";

export const tagRouter = new Hono();

tagRouter.get("/", getTags);
tagRouter.get("/:id", getPostsByTags);
