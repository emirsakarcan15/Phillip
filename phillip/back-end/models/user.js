const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({
    kullanıcıAdı: String,
    şifre: String,
    kayıtTarihi: { type: Date, default: Date.now },
    sonGirişTarihi: Date
}))

module.exports = User