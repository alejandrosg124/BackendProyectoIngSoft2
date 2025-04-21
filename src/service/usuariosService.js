import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const usuariosService = {
    createUser: async (data) => {
        const createData = {
            nombre: data.nombre,
            email: data.email,
            contrasena: data.contrasena,
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
        })
    },

}

export default usuariosService;
