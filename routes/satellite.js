import express from "express";
import { findLargestAndSmallest, findByName } from "../helper.js";

const router = express.Router();

// 4.1 Find a satellite by name
router.get("/find/:name/", (request, response) => {
  const satellite = findByName(request.dataset, request.params.name);

  if (!satellite) {
    return response.send(500);
  }

  response.send(satellite);
});

// 4.2 Find the largest or smallest satellite
router.get("/size", (request, response) => {
  const { pick } = request.query;

  const results = findLargestAndSmallest(request.dataset, "radius");

  if (pick === "largest") {
    return response.send(
      `The satellite with the largest radius is ${results.largest.name}, with a radius of ${results.largest.radius}`
    );
  }

  if (pick === "smallest") {
    return response.send(
      `The satellite with the largest radius is ${results.smallest.name}, with a radius of ${results.smallest.radius}`
    );
  }

  response.send(500);
});

// 4.3 Find the densest or least dense satellite
router.get("/density", (request, response) => {
  const { pick } = request.query;

  const results = findLargestAndSmallest(request.dataset, "density");

  if (pick === "highest") {
    return response.send(
      `The satellite with the highest density is ${results.largest.name}, with a density of ${results.largest.density}`
    );
  }

  if (pick === "lowest") {
    return response.send(
      `The satellite with the lowest density is ${results.smallest.name}, with a density of ${results.smallest.density}`
    );
  }

  response.send(500);
});

export default router;
