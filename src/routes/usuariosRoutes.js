import { Router } from "express";
import usuariosController from "../controllers/usuariosController.js";

const router = Router();

router.post("/usuarios", usuariosController.createUser);
router.get("/usuarios", usuariosController.getAllUsers);
router.get("/usuarios/:id", usuariosController.getUserById);
router.delete("/usuarios/:id", usuariosController.deleteUserById);
router.put("/usuarios/:id", usuariosController.updateUserById);

export default router;
