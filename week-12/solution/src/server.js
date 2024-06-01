const express = require("express");
const config = require("./config");
const surveyRoutes = require("./routes/surveyRouter");

const app = express();

app.use(express.json());

app.use("/api/v1/surveys", surveyRoutes);

app.listen(config.port, () => {
    console.log(`Server started running on port ${config.port}`);
});