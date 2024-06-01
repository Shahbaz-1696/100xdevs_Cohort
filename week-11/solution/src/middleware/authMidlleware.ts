import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export async function authMiddleware(c: Context, next: Next) {
  try {
    const token: string = c.req.header("Authorization")?.split(" ")[1];

    if (!token === null || !token === undefined) {
      const decode = await verify(token, c.env.JWT_PASSWORD);

      if (decode) {
        c.set("userId", decode);
        await next();
      } else {
        c.status(403);
        return c.json({
          message: "You are not authorized",
        });
      }
    } else {
      c.status(403);
      return c.json({
        message: "You are not authorized",
      });
    }
  } catch (error) {
    c.status(403);
    return c.json({
      message: "You are not authorized",
    });
  }
}
