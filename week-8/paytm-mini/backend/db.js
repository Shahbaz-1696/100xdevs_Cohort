const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:shahbaz7890@cluster0.cktkc6b.mongodb.net/paytm-mini");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50,
        trim: true,
        unique: true,
        lowerCase: true,
    }, 
    password: {
        type: String,
        required: true,
        minLength: 6,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true,
    },
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports ={
    User,
    Account,
}