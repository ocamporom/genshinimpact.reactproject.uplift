import express from "express";
import process from "node:process";
import { readFile, writeFile, stat } from "node:fs/promises";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("port", PORT);

app.use(cors()); // For simplicity
app.use(bodyParser.json()); // To parse JSON body

// GET Request localhost:3000
app.get("/genshindata", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});