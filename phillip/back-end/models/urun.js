const mongoose = require("mongoose")

const Urun = mongoose.model("Urun", new mongoose.Schema({
    isim: String,
    aciklama: String,
    kategori: { type: mongoose.Schema.Types.ObjectId, ref: "Kategori"},
    stok: Number,
    fiyat: Number,
    fotoğraf_url: String
}))

module.exports = Urun