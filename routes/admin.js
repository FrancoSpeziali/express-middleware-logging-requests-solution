import express from "express";
import { promises as fsPromises } from "fs";

const router = express.Router();

router.get("/log", (request, response) => {
  fsPromises
    .readFile("log.txt", "utf-8")
    .then((data) => {
      response.send(data);
    })
    .catch(() => {
      response.status(500).send("error");
    });
});

export default router;
