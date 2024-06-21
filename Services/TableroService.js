import Tablero from "../Models/Tablero.js";

class TableroService {

    async getTableroIdByUserId(userId =""){
        const tablero = await Tablero.findOne({
            attributes: ["id", "userId"],
            where: {
              userId,
            },
          });
        return tablero.id;
    }

}

export default TableroService;