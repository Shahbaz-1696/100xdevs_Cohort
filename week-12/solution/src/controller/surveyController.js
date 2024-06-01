const SurveyModel = require("../models/surveyModel");

class SurveyController {
    async getAllSurveys(req, res) {
        try {
            const surveys = await SurveyModel.find();
            res.status(200).json(surveys);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async getSurveyById(req, res) {
        try {
            const survey = await SurveyModel.findById({ _id: req.params.id });
            if(survey === null) {
                res.status(404).json({ message: "Survey does not exists" });
            }
            res.status(200).json(survey);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async createSurvey(req, res) {
        const survey = new SurveyModel(req.body);
        try {
            const newSurvey = await survey.save();
            res.status(201).json(newSurvey);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async updateSurvey(req, res) {
        try {
            const updatedSurvey = await SurveyModel.update({ _id: req.params.id }, req.body);
            res.status(200).json({ message: "Updated survey successfully" }, updatedSurvey);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async deleteSurvey(req, res) {
        try {
            const deletedSurvey = await SurveyModel.delete({ _id: req.params.id });
            res.status(200).json({ message: "Deleted survey successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = new SurveyController();