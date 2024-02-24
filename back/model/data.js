const mongoose = require("mongoose");

const data = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    year: {
        type: Number,
        required: true
    },
    scholarId: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    verticals: [
        {
            type: String,
        }
    ],
})

module.exports = mongoose.model("Data",data);