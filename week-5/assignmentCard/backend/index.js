const express = require("express");
const { createCard } = require("./types");
const { businessCard } = require("./db");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/details", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createCard.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msge: "You have entered wrong inputs",
        });
        return;
    }

    await businessCard.create({
        name: createPayload.name,
        description: createPayload.description,
        interests: createPayload.interests,
        linkedInUrl: createPayload.linkedInUrl,
        twitterUrl: createPayload.twitterUrl,
    });

    res.json({
        msge: "Business card created",
    })

});

app.get("/cards", async function(req, res){
    const cards = await businessCard.find({});
    res.json({
        cards,
    });
});


app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});