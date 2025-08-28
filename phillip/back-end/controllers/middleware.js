const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")    

dotenv.config()


const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: "Token bulunamadı." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Token geçersiz." });
        }
        req.user = decoded;
        next();
    })    
}


module.exports = {
    verifyToken
}