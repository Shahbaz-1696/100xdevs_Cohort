import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export async function getAllPosts(c: Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const posts = await prisma.posts.findMany({
            include: {
                author: true,
                tags: true,
            }
        });

        return c.json({
            posts: posts.map(post => ({
                id: post.id,
                username: post.author.username,
                title: post.title,
                content: post.content,
                createdAt: post.createdAt,
                tags: post.tags,
                userId: post.author.id,
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

export async function createPost(c: Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const body: {
            title: string,
            content: string,
            tags: string,
        } = await c.req.json();

        const tagNames = body.tags.split(',').map((tag) => tag.trim());

        if(body.title && body.content === null) {
            c.status(400);
            return c.json({
                message: "Invalid user input",
            });
        }

        const post = await prisma.posts.create({
            data: {
                title: body.title,
                content: body.content,
                userId: c.get('userId'),
                tags: {
                    connectOrCreate: tagNames.map(tag => ({
                        where: tag,
                        create: tag,
                    }))
                }
            }, include: {
                tags: true,
            }
        });

        return c.json({
            message: "Post created successfully",
            post: {
                id: post.id,
                title: post.title,
                content: post.content,
                createdAt: post.createdAt,
                tags: post.tags.map((tag: string) => tag.tag)
            }
        })
    } catch (error) {
        console.log(error);
        c.status(500);
        return c.json({
            message: "Internal server error",
        });
    }
}

export async function getUserPosts(c: Context) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const posts = await prisma.posts.findMany({
            where: {
                authorId: c.get("userId"),
            }
        });

        return c.json({
            posts: posts,
        });
    } catch (error) {
        console.log(error);
        c.status(500);
        return c.json({
            message: "Internal server error",
        })
    }
}

export async function updatePost(c: Context) {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

try {
    const id: number = Number(c.req.param("id"));
    const body: {
        title: string,
        content: string,
        tags: string,
    } = await c.req.json();

    const tagNames = body.tags.split(',').map(tag => tag.trim());

    if(body.title && body.content === null) {
        c.status(400);
        return c.json({
            message: "Invalid user input",
        })
    }

    const existingPost = await prisma.posts.findUnique({
        where: {
            authorId: c.get("userId"),
            id: id,
        }
    });

    if(!existingPost) {
        c.status(404);
        return c.json({
            message: "Post does not exist",
        });
    }

    const updatedPost = await prisma.posts.update({
        where: {
            id: id,
            authorId: c.get("userId"),
        },
        data: {
            title: body.title,
            content: body.content,
            tags: {
                connectOrCreate: tagNames.map(tag => ({
                    where: {tags},
                    create: {tags},
                }))
            }
        },
        include: {
            tags: true,
        }
    });

    return c.json({
        message: "Post updated successfully",
        post: {
            id: updatedPost.id,
            title: updatedPost.title,
            content: updatedPost.content,
            tags: updatedPost.tags,
            createdAt: updatedPost.createdAt,
        }
    })
} catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
        message: "Internal server error",
    })
}
}

export async function getPost(c: Context) {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

try {
    const id: number = Number(c.req.param("id"));

    const post = await prisma.posts.findUnique({
        where: {
            id: id,
            authorId: c.get("userId"),
        },
        include: {
            tags: true,
        }
    });

    if(!post) {
        c.status(404);
        return c.json({
            message: "Post does not exists",
        });
    }

    return c.json({
        post: {
            id: post.id,
            title: post.title,
            content: post.content,
            createdAt: post.createdAt,
            tags: post.tags,
        }
    })
} catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
        message: "Internal server error",
    })
}
}

export async function deletePost(c: Context) {
const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

try {
    const id: number = Number(c.req.param("id"));

    const existingPost = await prisma.posts.findUnique({
        where: {
            id: id,
            authorId: c.get("userId"),
        }
    });

    if(!existingPost) {
        c.status(404);
        return c.json({
            message: "Post does not exists",
        });
    }

    const post = await prisma.posts.delete({
        where: {
            id: id,
            authorId: c.get("userId"),
        }
    });

    return c.json({
       message: "Post deleted successfully", 
    });
} catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
        message: "Internal server error",
    })
}
}
