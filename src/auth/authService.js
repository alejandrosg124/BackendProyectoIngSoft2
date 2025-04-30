import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SECRET = process.env.JWT_SECRET || "secreto123"; 

const authService = {
  login: async (email, contrasena) => {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) throw new Error("Usuario no encontrado");

    const valid = await bcrypt.compare(contrasena, user.contrasena);
    if (!valid) throw new Error("Contraseña incorrecta");

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "2h" });
    return token;
  },
};

export default authService;
