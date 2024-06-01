import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export async function getTags(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const tags = await prisma.tags.findMany();

    return c.json({
      tags: tags,
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Internal server error",
    });
  }
}

export async function getPostsByTags(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const tagId: number = Number(c.req.param("id"));

    const posts = await prisma.tags.findMany({
      where: {
        id: tagId,
      },
      select: {
        posts: {
          select: {
            author: { select: { username: true } },
            authorId: true,
            id: true,
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });

    return c.json({
      posts: posts[0].posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        authorId: post.authorId,
        createdAt: post.createdAt,
        usrename: post.author.username,
      })),
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Internal server error",
    });
  }
}
