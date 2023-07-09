import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js"
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();


try {
    await db.authenticate();
    console.log('Database Connected...')
    // await Users.sync();
} catch (error) {
    console.log(error);
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router);

const port = 4500;
app.listen(port, ()=> console.log(`Server on port ${port}`));