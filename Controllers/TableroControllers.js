import { Tablero } from "../Models/models.js";

class TableroControllers {

  async getAllTablero(req, res) {
    try {
      const result = await Tablero.findAll({
        attributes: ["id", "userId"]
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

  async getTableroById(req, res) {
    try {
      const { id } = req.params;
      const result = await Tablero.findOne({
        attributes: ["id", "userId"],
        where: {
          id,
        },
      });

      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }

}

export default TableroControllers;
