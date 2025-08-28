const express = require("express")
const app = express();
const homeRouter = require("./tasks/home")
const path = require("path")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const connectDb = require("./db/connect")
const loginRouter = require("./tasks/login")
const cookieParser = require("cookie-parser")
const cors = require("cors")

dotenv.config();
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


app.use("/phillip", express.static(path.join(__dirname, 'public')));

app.use("/phillip/login", loginRouter)

app.use("/phillip/panel", homeRouter)


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on ${process.env.PORT}...`)
        })
    }catch (err){
        console.log(err)
    }
}

start();