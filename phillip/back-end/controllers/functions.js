const path = require("path")
const Urun = require("../models/urun")
const Banner = require("../models/banner")
const Kategori = require("../models/kategori")
const User = require("../models/user")
const Kampanya = require("../models/kampanya")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")

dotenv.config()


const getHome = (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "../public/panel.html"))
}

const addProduct = async (req, res) => {
    try {
        const product = await Urun.create(req.body)
        res.status(200)
    }catch (err){
        console.log(err)
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Urun.find().populate("kategori")
        res.json(products)
    } catch (error) {
        console.log(error) 
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Urun.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Ürün silindi." })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Ürün silinirken bir hata oluştu." })
        
    }
}

const getBanner = async (req, res) => {
    try {
        const banners = await Banner.find()
        res.json(banners)
    } catch (error) {
        console.log(error)
    }
}

const addBanner = async (req, res) => {
    try {
        const banner = await Banner.create(req.body)
    } catch (error) {
        console.log(error)
    }
}

const addKategori = async (req, res) => {
    try {
        const kategori = await Kategori.create(req.body)
    } catch (error) {
        console.log(error)
    }

}

const getKategori = async (req, res) => {
    const kategoriler = await Kategori.find()
    res.json(kategoriler)
}

const deleteKategori = async (req, res) => {
    try {
        const kategori =  await Kategori.findByIdAndDelete(req.params.id)
        const urun = await Urun.deleteOne( { kategori: req.params.id } )
        res.status(200).json({ message: "Kategori ve ilgili ürünler silindi." })
    } catch (error) {
        console.log(error)    
        res.status(500).json({ error: "Kategori silinirken bir hata oluştu." })
    }
}

const getLogin = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/login.html"))
}

const createUser = async (req, res) => {
    const { kullanıcıAdı, şifre, re_şifre } = req.body;

    if (!kullanıcıAdı || !şifre || !re_şifre) {
        return res.status(400).json({ error: "Kullanıcı adı ve şifre gereklidir." });
    }

    if (şifre !== re_şifre) {
        return res.status(400).json({ error: "Şifreler eşleşmiyor." });
    }

    for (let n = 0; n < kullanıcıAdı.length; n++) {
        if (kullanıcıAdı[n] === " " || kullanıcıAdı[n] === "@" || kullanıcıAdı[n] === "#" || kullanıcıAdı[n] === "$" || kullanıcıAdı[n] === "%" || kullanıcıAdı[n] === "^" || kullanıcıAdı[n] === "&" || kullanıcıAdı[n] === "*") {
            return res.status(400).json({ error: "Kullanıcı adı boşluk içeremez." });
        }
    }

    const users = await User.find()
    const existingUser = users.find(user => user.kullanıcıAdı === kullanıcıAdı)

    if (existingUser) {
        return res.status(400).json({ error: "Bu kullanıcı adı zaten alınmış." });
    }

    const hashedPassword = await bcrypt.hash(şifre, 10)

    const user = {
        kullanıcıAdı: kullanıcıAdı,
        şifre: hashedPassword,
        kayıtTarihi: new Date(),
        sonGirişTarihi: new Date()
    }

    const USER = await User.create(user)

    const token = jwt.sign({ kullanıcıAdı: USER.kullanıcıAdı, id: USER._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000
    })

    res.status(200).json({ message: "Kayıt başarılı" });
}

const existingUser = async (req, res) => {
    const { kullanıcıAdı, şifre } = req.body;
    const users = await User.find()

    if (!kullanıcıAdı || !şifre) {
        return res.status(400).json({ error: "Kullanıcı adı ve şifre gereklidir." });
    }

    const user = users.find( user => user.kullanıcıAdı === kullanıcıAdı)

    if (!user) {
        return res.status(401).json({ error: "Kullanıcı adı veya şifre yanlış." });
    }

    const match = await bcrypt.compare(şifre, user.şifre)

    if (!match) {
        return res.status(401).json({ error: "Kullanıcı adı veya şifre yanlış." });
    }

    user.sonGirişTarihi = new Date()
    await user.save()

    const zama = "zingo"

    const token = jwt.sign({ kullanıcıAdı: user.kullanıcıAdı, id: user._id  }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000
    })

    res.status(200).json({ message: "Giriş başarılı." });
}

const getUserInfo = (req, res) => {
    res.json({ kullanıcıAdı: req.user.kullanıcıAdı, id: req.user.id })
}

const deleteUser = async (req, res) => {
    const user = await User.find({ kullanıcıAdı: req.params.user })

    if (!user) {
        return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    try {
        await User.deleteOne({ kullanıcıAdı: req.params.user })
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            })
        res.status(200).json({ message: "Kullanıcı silindi." });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Kullanıcı silinirken bir hata oluştu." });
    }
}

const updateUserInfo = async (req, res) => {
    const { id, mevcutUsername, yeniUsername, reYeniUsername, yeniŞifre, reYeniŞifre } = req.body

    if (!yeniUsername || !reYeniUsername || !yeniŞifre || !reYeniŞifre) {
        return res.status(401)
    }

    if (yeniUsername !== reYeniUsername) {
        return res.status(401)
    }

    if (yeniŞifre !== reYeniŞifre) {
        return res.status(401)
    }

    for (let n = 0; n < yeniUsername.length; n++) {
        if (yeniUsername[n] === " " || yeniUsername[n] === "@" || yeniUsername[n] === "#" || yeniUsername[n] === "$" || yeniUsername[n] === "%" || yeniUsername[n] === "^" || yeniUsername[n] === "&" || yeniUsername[n] === "*") {
            return res.status(400).json({ error: "Kullanıcı adı boşluk içeremez." });
        }
    }

    const users = await User.find()
    const existingUser = users.find( user => user.mevcutUsername === yeniUsername)

    if (existingUser) {
        return res.status(401)
    }

    if (yeniUsername === mevcutUsername) {
        return res.status(401)
    }

    const user = await User.findOne({ _id: id })

    if (!user) {
        return res.status(401)
    }

    const match = await bcrypt.compare(yeniŞifre, user.şifre)

    if (match) {
        return res.status(401)
    }

    const hashedYeniPassword = await bcrypt.hash(yeniŞifre, 10)

    user.şifre = hashedYeniPassword
    user.kullanıcıAdı = yeniUsername

    await user.save()
    
    res.status(200).json({ mevcutUsername: yeniUsername })
}

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json( { mevcutUsername: user.kullanıcıAdı } )
}


const cikis = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "strict"
    })
    res.status(200).json({ message: "Çıkış yapıldı." });
}

const addKampanya = async (req, res) => {
    const { açıklama, hedefKategori, yüzdeDeğer, kuponKodu, başlangıçTarihi, bitişTarihi } = req.body;

    if (!açıklama || !hedefKategori || !yüzdeDeğer || !kuponKodu || !başlangıçTarihi || !bitişTarihi) {
        return res.status(400).json({ error: "Tüm alanlar gereklidir." });
    }

    if (isNaN(yüzdeDeğer) || yüzdeDeğer < 0 || yüzdeDeğer > 100) {
        return res.status(400).json({ error: "Yüzde değer 0 ile 100 arasında olmalıdır." });
    }

    if (başlangıçTarihi >= bitişTarihi) {
        return res.status(400).json({ error: "Başlangıç tarihi bitiş tarihinden önce olmalıdır." });
    }

    const kampanya = {
        açıklama,
        hedefKategori,
        yüzdeDeğer,
        kuponKodu,
        başlangıçTarihi,
        bitişTarihi
    };

    const KAMPANYA = await Kampanya.create(kampanya);
    res.status(200).json({ message: "Kampanya başarıyla eklendi." });
}

const getKampanya = async (req, res) => {
    try {
        const kampanyalar = await Kampanya.find().populate("hedefKategori");
        res.json(kampanyalar);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Kampanyalar alınırken bir hata oluştu." });
    }
}

const deleteKampanya = async (req, res) => {
    try {
        const kampanya = await Kampanya.findByIdAndDelete(req.params.id)
        res.status(201)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}


module.exports = {
    getHome,
    addProduct,
    addBanner,
    getKategori,
    addKategori,
    deleteKategori,
    getLogin,
    createUser,
    existingUser,
    getUserInfo,
    deleteUser,
    cikis,
    getProducts,
    deleteProduct,
    addKampanya,
    getKampanya,
    deleteKampanya,
    updateUserInfo,
    getUser,
    getBanner
}