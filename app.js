// import modules

const { json, urlencoded } = express;
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressValidator from "express-validator";
import path from "path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter";
import authRouter from "./routes/authRouter";

// app
dotenv.config();
const app = express();

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

const PORT = process.env.PORT;

// routes
app.use("/user", userRouter);
app.use("/auth", authRouter);

//
mongoose
  .connect(process.env.BASE_URL)
  .then(() => {
    console.log("DBconnection successful");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT || 5000, () => {
  console.log(`server is listening to PORT ${PORT}`);
});
