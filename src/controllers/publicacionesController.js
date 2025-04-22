import { PrismaClient } from "@prisma/client";
import publicacionesService from "../service/publicacionesService.js"; 

const prisma = new PrismaClient();

const publicacionesController = {
  // crear publication
  createPublication: async (req, res) => {
    try {
      const newPublication = await publicacionesService.createPublication(req.body);
      res.status(201).json(newPublication);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creando publicacion", details: error.message });
    }
  },

  // get all publications
  getAllPublications: async (req, res ) => {
    try {
      const publications = await publicacionesService.getAllPublications();
      res.json(publications);

    } catch (error) {
      console.error(error);
    }
  },

};

export default publicacionesController;
