import { Router } from "express";
import reservacionesController from "../controllers/reservacionesController.js";

const router = Router();

router.post("/reservaciones", reservacionesController.createReservation);

export default router;