import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Tablero extends Model {}

Tablero.init(
  {
    /* userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }, */
  },
  {
    sequelize: connection,
    modelName: "Tablero",
  }
);

export default Tablero;
