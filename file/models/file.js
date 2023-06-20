const mongoose = require('mongoose');
const File = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    originalname:
    {
        type: String,
        required: true,
    },
    password: String,
    downloadcount:
    {
        type: Number,
        default: 0,
        required: true,
    }
})
module.exports = mongoose.model("file", File)
