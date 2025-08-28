const express = require('express');
const router = express.Router();
const functions = require("../controllers/functions")
const middleware = require("../controllers/middleware")



router.get("/", middleware.verifyToken, functions.getHome)

router.get("/userInfo", middleware.verifyToken, functions.getUserInfo)
router.patch("/userInfo", middleware.verifyToken, functions.updateUserInfo)

router.post("/product", functions.addProduct)
router.get("/product", functions.getProducts)
router.delete("/product/:id", functions.deleteProduct)

router.post("/kategori", functions.addKategori)
router.get("/kategori", functions.getKategori)
router.delete("/kategori/:id", functions.deleteKategori)

router.get("/banner", functions.getBanner)
router.post("/banner", functions.addBanner)

router.delete("/sil/:user", functions.deleteUser)

router.post("/cikis", functions.cikis)

router.post("/kampanya", functions.addKampanya)
router.get("/kampanya", functions.getKampanya)
router.delete("/kampanya/:id", functions.deleteKampanya)

router.get("/user/:id", functions.getUser)

module.exports = router;