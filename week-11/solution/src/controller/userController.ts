import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { signinSchema, signupSchema } from "../zod/user";
import { sign } from "hono/jwt";

export async function signup(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABSE_URL,
  }).$extends(withAccelerate());

  try {
    const body: {
      username: string;
      email: string;
      password: string;
    } = await c.req.json();
    const { success } = signupSchema.safeParse(body);

    if (!success) {
      c.status(403);
      return c.json({
        message: "Invalid inputs",
      });
    }

    const exisitngUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (exisitngUser) {
      c.status(411);
      return c.json({
        message: "User already exists",
      });
    }

    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_PASSWORD
    );

    return c.json({
      message: "User created successfully",
      token: token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Internal server error",
    });
  }
}

export async function signin(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABSE_URL,
  }).$extends(withAccelerate());

  try {
    const body: {
      email: string;
      password: string;
    } = await c.req.json();

    const { success } = signinSchema.safeParse(body);

    if (!success) {
      c.status(403);
      return c.json({
        message: "Invalid inputs",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(411);
      return c.json({
        message: "User does not exists",
      });
    }

    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_PASSWORD
    );

    return c.json({
      message: "User signed in successfully",
      token: token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Internal server error",
    });
  }
}

export async function getAllUsers(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABSE_URL,
  }).$extends(withAccelerate());

  try {
    const allUsers = await prisma.user.findMany();

    return c.json({
      users: allUsers.map((user) => ({
        id: user.id,
        email: user.email,
        username: user.username,
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

export async function getUser(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABSE_URL,
  }).$extends(withAccelerate());

  try {
    const id: number = Number(c.req.param("id"));
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        posts: true,
      },
    });

    if (!user) {
      c.status(404);
      return c.json({
        message: "User not found",
      });
    }

    return c.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        posts: user.posts,
      },
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Internal server error",
    });
  }
}
