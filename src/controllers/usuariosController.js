import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const usuariosController = {
  createUser: async (req, res) => {
    try {
      const { nombre, email, contrasena, telefono, foto_perfil } = req.body;

      const usuarioId = new ObjectId().toString();

      const newUser = await prisma.usuario.create({
        data: {
          usuarioId,
          nombre,
          email,
          contrasena,
          telefono,
          fotoPerfil: foto_perfil,
        }
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      if (error.code === 'P2002') {
        res.status(409).json({ error: "El email ya está en uso" });
      } else {
        res.status(500).json({ error: "Error creando usuario", details: error.message });
      }
    }
  }
};

export default usuariosController;
