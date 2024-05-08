import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const user = await prisma.user.create({
        data: {
            email: username,
            password,
            name,
        },
        select: {
            email: true,
            password: true,
            name: true,
        }
    });
    return user;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const selectedUser = await prisma.user.findFirst({
        where: {
            id: userId,
        }
    });
    return selectedUser;
}