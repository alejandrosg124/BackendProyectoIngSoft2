import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const reservacionesService = {
    createReservation: async (data) => {
        const createData = {
            usuarios: {
                set: data.usuarios, // array de objetos UsuarioRol tiene { usuarioId, rolReservacion }
            },
            publicacionId: data.publicacionId,
            fechaInicio: data.fechaInicio,
            fechaFin: data.fechaFin,
            costoTotal: data.costoTotal,
            precioServicio: data.precioServicio,
        };
        console.log("Creando reservacion con los datos = ", createData);
        return await prisma.reservacion.create({
            data: createData,
        })
    }
};

export default reservacionesService;
