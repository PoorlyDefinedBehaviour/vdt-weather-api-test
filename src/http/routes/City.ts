import express, { Router } from "express";

import { CityController } from "../controllers/City";

export const router: Router = express.Router();

router.get("/city", CityController.index);
router.get("/city/available", CityController.available);
router.get("/city/:id", CityController.get_by_id);
