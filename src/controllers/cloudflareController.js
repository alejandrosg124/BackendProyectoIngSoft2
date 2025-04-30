import { PrismaClient } from "@prisma/client";
import usuariosService from "../service/usuariosService.js"; 
import publicacionesService from "../service/publicacionesService.js";
import multer from "multer";
import { uploadImageToR2 } from "../service/cloudflareService.js";

const prisma = new PrismaClient();
const upload = multer();

const cloudflareController = {
  subirFotoPerfil: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No se subió ningún archivo" });
      }

      const fileBuffer = req.file.buffer;
      const mimeType = req.file.mimetype;

      const originalName = req.file.originalname;
      const extension = originalName.substring(originalName.lastIndexOf('.')) || '';
      const filename = `${req.params.id}${extension}`;
      console.log("Nombre de archivo usado para subir:", filename);

      const urlPublica = await uploadImageToR2(fileBuffer, filename, mimeType);
      const updatedUser = await usuariosService.updateUserById(req.params.id, { fotoPerfil: urlPublica });

      res.status(200).json({ message: "Foto de perfil actualizada", user: updatedUser });
    } catch (error) {
      console.error("Error subiendo foto de perfil:", error);
      res.status(500).json({ error: "Error subiendo foto de perfil", details: error.message });
    }
  },

  subirFotoPublicacion: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No se subió ningún archivo" });
      }

      const fileBuffer = req.file.buffer;
      const mimeType = req.file.mimetype;

      const originalName = req.file.originalname;
      const extension = originalName.substring(originalName.lastIndexOf('.')) || '';
      const filename = `${req.params.id}${extension}`;
      console.log("Nombre de archivo usado para subir publicación:", filename);

      const urlPublica = await uploadImageToR2(fileBuffer, filename, mimeType);

      const updatedPublication = await publicacionesService.updatePublicationById(req.params.id, {
        imagenes: [urlPublica],
      });

      res.status(200).json({ message: "Imagen de publicación actualizada", publication: updatedPublication });
    } catch (error) {
      console.error("Error subiendo imagen de publicación:", error);
      res.status(500).json({ error: "Error subiendo imagen de publicación", details: error.message });
    }
  },
}

export default cloudflareController;
