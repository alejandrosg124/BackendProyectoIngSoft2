import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const publicacionesService = {
    createPublications: async (data) => {
        const createData = {
            nombre: data.nombre,
            email: data.email,
            contrasena: data.contrasena,
            telefono: data.telefono,
            fotoPerfil: data.foto_perfil,
        };
        console.log("Creando publicacion con los datos = ", createData);
        return await prisma.publicacion.create({
            data: createData,
        });
    },

    getAllPublications: async () => {
        return await prisma.publicacion.findMany();
    },

    getPublicationById: async (id) => {
        return await prisma.publicacion.findUnique({
            where: {
                id: id,
              },
        })
    },

    deletePublicationById: async (id) => {
        return await prisma.publicacion.delete({
          where: {
            id: id,
          },
        });
    },
}

export default publicacionesService;