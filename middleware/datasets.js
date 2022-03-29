import planetsDataset from '../planets-dataset.js';
import satellitesDataset from '../satellites-dataset.js';

export function getSatelliteDataset (req, _, next) {
    req.dataset = satellitesDataset;

    next();
}

export function getPlanetDataset(req, _, next) {
    req.dataset = planetsDataset;

    next();
}