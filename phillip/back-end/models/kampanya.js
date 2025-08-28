const mongoose = require('mongoose');  

const Kampanya = mongoose.model("Kampanya", new mongoose.Schema({
    açıklama: String,
    hedefKategori: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Kategori'
    },
    yüzdeDeğer: Number,
    kuponKodu: String,
    başlangıçTarihi: Date,
    bitişTarihi: Date,
}))

module.exports = Kampanya;