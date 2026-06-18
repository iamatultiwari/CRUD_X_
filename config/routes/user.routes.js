import express from "express";
import { createUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", (req, res) => {
  res.json({
    message: "Users route working"
  });
});

export default router;