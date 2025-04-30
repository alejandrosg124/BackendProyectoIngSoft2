import { PrismaClient } from "@prisma/client";
import usuariosService from "../service/usuariosService.js"; 

const prisma = new PrismaClient();

const usuariosController = {
  // crear user
  createUser: async (req, res) => {
    try {
      const newUser = await usuariosService.createUser(req.body);
      res.status(201).json(newUser);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creando usuario", details: error.message });
    }
  },

  // get all users
  getAllUsers: async (req, res ) => {
    try {
      const users = await usuariosService.getAllUsers()
      res.json(users);

    } catch (error) {
      console.error(error);
    }
  },

  // get user por id
  getUserById: async (req,res) => {
    try {
      const user = await usuariosService.getUserById(req.params.id);
      res.json(user);

    } catch (error) {
      console.error(error);
    }
  },

  // delete user por id
  deleteUserById: async (req,res) => {
    try {
      const deletedUser = await usuariosService.deleteUserById(req.params.id);
      res.json(deletedUser);

    } catch(error) {
      console.error(error);
    }
  },

  updateUserById: async (req, res) => {
    try {
      const updatedUser = await usuariosService.updateUserById(req.params.id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error en updateUserById:", error);
      res.status(500).json({ error: "Error actualizando usuario", details: error.message });
    }
  },
};

export default usuariosController;
