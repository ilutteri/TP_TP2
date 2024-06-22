import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Tablero extends Model { }

Tablero.init(
  {},
  {
    sequelize: connection,
    modelName: "Tablero",
  }
);

export default Tablero;
