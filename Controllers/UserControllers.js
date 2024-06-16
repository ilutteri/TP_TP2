import { User } from "../Models/models.js";
import { genToken } from "../utils/token.js";
import {Rol} from "../Models/models.js"
class UserControllers {
  async getAllUser(req, res) {
    try {
      const result = await User.findAll({
        attributes: ["id", "name", "mail"],
        include:{
          model: Rol,
          attributes: ["name"]
        }
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
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
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const { name, password,  mail, rolId} = req.body;
      const result = await User.create({
        name,
        password,
        mail,
        rolId
      });
     
        res.status(200).send({
        success: true,
        message: `El ${Rol.findOne(result.dataValues.rolId)} ${result.dataValues.name} creado con exito  creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
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
      res.status(400).send({ success: false, message: error.message });
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
      res.status(400).send({ success: false, message: error.message });
    }
  }
  login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      const data = await User.findOne({
        where: {
          mail,
        },
      });
      if (!data) throw new Error("Usuario no registrado");
      const comparePass = await data.comparePass(password);
      if (!comparePass) throw new Error("Contraseña incorrecta");
      const payload = {
        id: data.id,
        name: data.name,
      };
      console.log(payload)
      const token = genToken(payload);
      console.log(token)
      res.cookie("token", token); 
      res
        .status(200)
        .send({ success: true, message: "usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
      const { user } = req;
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };



}

export default UserControllers;