import express from "express";
import { findByName, findLargestAndSmallest } from "../helper.js";

const router = express.Router();

// 5.1 Find a planet by name
router.get("/find/:name/", (request, response) => {
  const planet = findByName(request.dataset, request.params.name);

  if (!planet) {
    return response.send(500);
  }

  response.send(planet);
});

// 5.2 Find the largest or smallest planet
router.get("/size", (request, response) => {
  const { pick } = request.query;

  const results = findLargestAndSmallest(request.dataset, "radius");

  if (pick === "largest") {
    return response.send(
      `The planet with the largest radius is ${results.largest.name}, with a radius of ${results.largest.radius}`
    );
  }

  if (pick === "smallest") {
    return response.send(
      `The planet with the largest radius is ${results.smallest.name}, with a radius of ${results.smallest.radius}`
    );
  }

  response.send(500);
});

// 5.3 Find the planets with the most and least moons
router.get("/moons", (request, response) => {
  const { pick } = request.query;

  const results = findLargestAndSmallest(request.dataset, "numberOfMoons");

  if (pick === "most") {
    return response.send(
      `The planet with the most moons is ${results.largest.name}, with ${results.largest.numberOfMoons}`
    );
  }

  if (pick === "none") {
    return response.send(results.smallest.numberOfMoons);
  }

  response.send(500);
});

// 5.4 Find the planets closest to and furthest from the sun
router.get("/sun", (request, response) => {
  const { pick } = request.query;

  const results = findLargestAndSmallest(request.dataset, "distanceFromSun");

  if (pick === "furthest") {
    return response.send(
      `The planet furthest from the sun is ${results.largest.name}, with a distance of ${results.largest.distanceFromSun}`
    );
  }

  if (pick === "closest") {
    return response.send(
      `The planet closest to the sun is ${results.smallest.name}, with a distance of ${results.smallest.distanceFromSun}`
    );
  }

  response.send(500);
});

// 5.5 Find the hottest and coldest planets
router.get("/temperature", (request, response) => {
  const { pick } = request.query;

  const results = findLargestAndSmallest(request.dataset, "meanTemperature");

  if (pick === "hottest") {
    return response.send(
      `The hottest planet is ${results.largest.name}, with a temperature of ${results.largest.meanTemperature}`
    );
  }

  if (pick === "coldest") {
    return response.send(
      `The coldest planet is ${results.smallest.name}, with a temperature of ${results.smallest.meanTemperature}`
    );
  }

  response.send(500);
});

// 5.6 Find the planets with the longest and shortest day
router.get("/day", (request, response) => {
  const { pick } = request.query;

  const results = findLargestAndSmallest(request.dataset, "lengthOfDay");

  if (pick === "longest") {
    return response.send(
      `The planet with the longest day is ${results.largest.name}, with a length of ${results.largest.lengthOfDay}`
    );
  }

  if (pick === "shortest") {
    return response.send(
      `The planet with the shortest day is ${results.smallest.name}, with a length of ${results.smallest.lengthOfDay}`
    );
  }

  response.send(500);
});

export default router;
