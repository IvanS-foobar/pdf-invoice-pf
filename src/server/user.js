const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema (
    {
        userEmail: {type: String, unique: true},
        title: String,
        role: String
    },
    { timestamps: true }
);


module.exports = mongoose.model("user", user);