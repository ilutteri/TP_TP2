import { User } from "../Models/models.js";
import { genToken } from "../utils/token.js";
import {Rol} from "../Models/models.js"
import TableroService from "../Services/TableroService.js";


class UserControllers {

  _tableroService = new TableroService();

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
      
      const { name, password, mail } = req.body;
      console.log(req.body);
      const result = await User.create({
        name,
        password,
        mail,
        rolId:1,
      });
        res.status(200).send({
        success: true,
        message: `El usuario ${result.dataValues.name} ha sido creado con exito`,
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
      const tableroId = await this._tableroService.getTableroIdByUserId(data.id)
      if (!data) throw new Error("Usuario no registrado");
      const comparePass = await data.comparePass(password);
      if (!comparePass) throw new Error("Contraseña incorrecta");
      const payload = {
        usuarioId: data.id,
        nameUsuario: data.name,
        tableroId: tableroId,
        rolId: data.rolId
      };
      const token = genToken(payload);
      res.cookie("token", token); 
      res
        .status(200)
        .send({ success: true, message: "usuario logueado con exito", payload });
    } catch (error) {
      res.status(404).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
      const { user } = req;
      
      res.status(200).send({ success: true, return: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  logoutUser = async (req, res) => {
    try {
      res.cookie("token", "");
      res.status(200).send({ success: true, message: "Usuario deslogueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };



}

export default UserControllers;