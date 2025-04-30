import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const publicacionesService = {
    createPublication: async (data) => {
        const createData = {
            publicacionId: data.publicacionId,
            usuarioId: data.usuarioId,
            titulo: data.titulo,
            descripcion: data.descripcion,
            ubicacion: data.ubicacion,
            precioNoche: data.precioNoche,
            imagenes: data.imagenes || [],
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
        try {
            const deleted = await prisma.publicacion.delete({
                where: {
                    id: id,
                },
            });
            return deleted;
        } catch (error) {
            console.error("Error en deletePublicationById:", error);
            throw error;
        }
    },
}

export default publicacionesService;