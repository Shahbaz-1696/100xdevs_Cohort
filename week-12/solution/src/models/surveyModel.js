import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient();

class SurveyModel {
    static async getAllSurveys() {
        return await prisma.survey.findMany();
    }

    static async getSurveyById() {
        return await prisma.survey.findUnique({
            where: {
                id
            }
        })
    }

    static async createSurvey() {
        return await prisma.survey.create({
            data
        });
    }

    static async updateSurvey() {
        return await prisma.survey.update({
            where: {
                id
            }, data
        })
    }

    static async deleteSurvey() {
        return await prisma.survey.delete({
            where: {
                id
            }
        })
    }
}