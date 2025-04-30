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
      res.status(500).json({ error: "Error obteniendo publicaciones", details: error.message });
    }
  },

  //get publication by id
  getPublicationById: async (req, res) => {
    try {
      const publication = await publicacionesService.getPublicationById(req.params.id);
      res.json(publication);
    } catch(error) {
      console.error(error);
      res.status(500).json({ error: "Error obteniendo la publicación", details: error.message });
    }
  },

  //delete publication by id 
  deletePublicationById: async (req, res) => {
    try {
      const deletedPublication = await publicacionesService.deletePublicationById(req.params.id);
      res.status(200).json({ message: "Publicación eliminada correctamente", deletedPublication });
    } catch(error) {
      console.error(error);
      res.status(500).json({ error: "Error eliminando la publicación", details: error.message });
    }
  },

  //update publication by id
  updatePublicationById: async (req, res) => {
    try {
      const updatedPublication = await publicacionesService.updatePublicationById(req.params.id, req.body);
      res.status(200).json(updatedPublication);
    } catch (error) {
      console.error("Error en updatePublicationById:", error);
      res.status(500).json({ error: "Error actualizando publicación", details: error.message });
    }
  },
};

export default publicacionesController;
