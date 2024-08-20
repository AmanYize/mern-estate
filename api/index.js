import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/user", userRouter);

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
