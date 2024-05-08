import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function dropTables() {
    await prisma.user.deleteMany({});
    await prisma.todos.deleteMany({});
}

module.exports = { dropTables };