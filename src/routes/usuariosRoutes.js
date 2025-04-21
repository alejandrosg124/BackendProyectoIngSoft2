import { Router } from "express";
import usuariosController from "../controllers/usuariosController.js";

const router = Router();

router.post("/usuarios", usuariosController.createUser);

export default router;
