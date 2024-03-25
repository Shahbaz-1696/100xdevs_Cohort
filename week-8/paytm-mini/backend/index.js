const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);


const PORT = 3000;

app.listen(PORT, function(err) {
    if(err) console.log(err);
    console.log(`Server is running on port ${PORT}`);
});