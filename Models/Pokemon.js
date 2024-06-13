import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Pokemon extends Model {}

Pokemon.init(
  {
    nroPokemon: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    apodo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },

    
  },
  {
    sequelize: connection,
    modelName: "Pokemon",
  }
);

export default Pokemon;
