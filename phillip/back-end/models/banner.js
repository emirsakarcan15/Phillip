const mongoose = require("mongoose")

const Banner = mongoose.model("Banner", new mongoose.Schema({
    açıklama: String,
    sıra: Number,
    fotoğraf_url: String,
    url: String
}))

module.exports = Banner