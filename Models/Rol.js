import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Rol extends Model {}

Rol.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Rol",
  }
);

export default Rol;
