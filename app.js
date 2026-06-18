import express from "express";
import dotenv from "dotenv";


import connectDB from "./config/db.connect.js";
import userRoutes from "./config/routes/user.routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello There");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});