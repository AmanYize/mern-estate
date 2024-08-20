import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
mongoose
  .connect(process.env.MONGOSECRET)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();
