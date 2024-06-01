import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './router/userRouter';
import { tagRouter } from './router/tagRouter';
import { postRouter } from './router/postRouter';

const app = new Hono()

app.use(cors());

app.route("/api/v1/user", userRouter);
app.route("api/v1/tags", tagRouter);
app.route("api/v1/posts", postRouter);

export default app
