import { User, Rol } from "../Models/models.js";

export const validateRol = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: {
        model: Rol,
        attributes: ["name"]
      }
    });

    if (!user) {
      return res.status(404).send({ success: false, message: "Usuario no encontrado" });
    }

    const rolesPermitidos = ["admin", "superAdmin"];
    if (!rolesPermitidos.includes(user.Rol.name)) {
      return res.status(403).send({ success: false, message: "Acceso denegado" });
    }

    next();
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

