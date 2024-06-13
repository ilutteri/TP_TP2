import { Tablero } from "../Models/models.js";

class TableroControllers {
  async getAllTablero(req, res) {
    try {
      const result = await Tablero.findAll({
        attributes: ["id", "userId"]
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
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
      res.status(400).send({ success: false, message: error });
    }
  }

  async createTablero(req, res) {
    try {
      const { userId } = req.body;
      const result = await Tablero.create({
        userId,
        
      });
      res.status(200).send({
        success: true,
        message: `Tablero de usuario aca ${result.dataValues.userId} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
      console.log(message)
    }
    
  }
  async updateTablero(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const result = await Tablero.update(
        { userId },
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: "Tablero de usuario modificado con exito" });
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
