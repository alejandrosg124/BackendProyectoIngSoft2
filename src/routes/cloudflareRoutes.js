import { Router } from "express";
import multer from "multer";
import cloudflareController from "../controllers/cloudflareController.js";

const router = Router();
const upload = multer();

router.put("/cloudflare/usuarios/:id/fotoPerfil", upload.single("file"), cloudflareController.subirFotoPerfil);
router.put("/cloudflare/publicaciones/:id/imagen", upload.single("file"), cloudflareController.subirFotoPublicacion);

export default router;
