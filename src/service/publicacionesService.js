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
}

export default publicacionesService;