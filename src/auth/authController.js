import authService from "./authService.js";

const authController = {
  login: async (req, res) => {
    try {
      const token = await authService.login(req.body.email, req.body.contrasena);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },
};

export default authController;
