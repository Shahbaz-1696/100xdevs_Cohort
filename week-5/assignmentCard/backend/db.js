const mongoose = require("mongoose");

mongoose.connect("mongodb-url");

const businessCardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    linkedInUrl: String,
    twitterUrl: String,
});

const businessCard = mongoose.model("businessCard", businessCardSchema);

module.exports = {
    businessCard
}