import { User } from "../Models/models.js";

class UserControllers {
  async getAllUser(req, res) {
    try {
      const result = await User.findAll({
        attributes: ["id", "name", "mail"]
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async getUserById(req, res) {
    try {
      const { id } = req.params;
       const result = await User.findOne({
        attributes: ["id", "name", "mail"],
         where: {
          id,
        },
       });
      
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  async createUser(req, res) {
    try {
      const { name, mail, password } = req.body;
      const result = await User.create({
        name,
        mail,
        password,
      });
      res.status(200).send({
        success: true,
        message: `usuario ${result.dataValues.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, mail, password } = req.body;
      const result = await User.update(
        { name, mail, password },
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: "usuario modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const result = await User.destroy({
        where: {
          id,
        },
      });
      console.log(`🚀 ~ UserControllers ~ updateUser ~ result:`, result);
      res
        .status(200)
        .send({ success: true, message: "usuario eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default UserControllers;