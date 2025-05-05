import { PrismaClient } from "@prisma/client";
import reservacionesService from "../service/reservacionesService.js"; 

const reservacionesController = {
    // crear reservacion
    createReservation: async (req, res) => {
        try {
            const newReservation = await reservacionesService.createReservation(req.body);
            res.status(201).json(newReservation);
        } catch(error) {
            console.error(error);
            res.status(500).json({ error: 'Error creando reservation' });
        }
    },
};

export default reservacionesController;
