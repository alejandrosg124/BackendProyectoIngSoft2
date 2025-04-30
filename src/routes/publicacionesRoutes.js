import { Router } from "express";
import publicacionesController from "../controllers/publicacionesController.js";

const router = Router();

router.post("/publicaciones", publicacionesController.createPublication);
router.get("/publicaciones", publicacionesController.getAllPublications);
router.get("/publicaciones/:id", publicacionesController.getPublicationById);
router.delete("/publicaciones/:id", publicacionesController.deletePublicationById);
router.put("publicaciones/:id", publicacionesController.updatePublicationById)

export default router;
