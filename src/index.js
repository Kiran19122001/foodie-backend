import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();
app.use(express.json());
//cors for resources sharing
app.use(cors());
//router for login and register routes
app.use("/auth", userRouter);
//cnnecting to the mogoDb server
mongoose.connect(
  "mongodb://Kiranbandla:Kiranbandla@cluster0-shard-00-00.7z4juun.mongodb.net:27017,cluster0-shard-00-01.7z4juun.mongodb.net:27017,cluster0-shard-00-02.7z4juun.mongodb.net:27017/recipiedb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
);

//port listening
app.listen(3001, () => {
  console.log("listening on http://localhost:3001");
});
