import { Tablero } from "../Models/models.js";

class TableroControllers {
  async getAllTablero(req, res) {
    try {
      const result = await Tablero.findAll({
        attributes: ["id", "name", "mail"]
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async getTableroById(req, res) {
    try {
      const { id } = req.params;
      // const result = await Tablero.findOne({
      //   attributes: ["id", "name", "mail"],
      //   where: {
      //     id,
      //   },
      // });
      const result = await Tablero.findByPk(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  async createTablero(req, res) {
    try {
      const { name, mail, password } = req.body;
      const result = await Tablero.create({
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
  async updateTablero(req, res) {
    try {
      const { id } = req.params;
      const { name, mail, password } = req.body;
      const result = await Tablero.update(
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

  async deleteTablero(req, res) {
    try {
      const { id } = req.params;
      const result = await Tablero.destroy({
        where: {
          id,
        },
      });
      console.log(`🚀 ~ TableroControllers ~ updateTablero ~ result:`, result);
      res
        .status(200)
        .send({ success: true, message: "usuario eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default TableroControllers;
