const mongoose = require("mongoose")

const Kategori = mongoose.model("Kategori", new mongoose.Schema({
    isim: String
}))

module.exports = Kategori