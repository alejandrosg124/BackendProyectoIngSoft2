import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const usuariosService = {
  createUser: async (data) => {
    //  Encriptar la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(data.contrasena, 10);

    const createData = {
      nombre: data.nombre,
      email: data.email,
      contrasena: hashedPassword, // Usar contraseña encriptada
      telefono: data.telefono,
      fotoPerfil: data.foto_perfil,
    };

    console.log("Creating user with data:", createData);
    return await prisma.usuario.create({
      data: createData,
    });
  },

  getAllUsers: async () => {
    return await prisma.usuario.findMany();
  },

  getUserById: async (id) => {
    return await prisma.usuario.findUnique({
      where: {
        id: id,
      },
    });
  },

  deleteUserById: async (id) => {
    return await prisma.usuario.delete({
      where: {
        id: id,
      },
    });
  },
};

export default usuariosService;
