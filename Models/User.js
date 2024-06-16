import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
import Tablero from "./Tablero.js";

class User extends Model {
  comparePass = async (password) => {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate (async (user) => {
  const genSalt = await bcrypt.genSalt(10);
  
  const hashedPassword = await bcrypt.hash(user.password, genSalt);
  user.password = hashedPassword;
})

User.afterCreate(async (user) => {
  try {
    const resuTab = await Tablero.create({ userId: user.id });
    console.log(resuTab);
  } catch (error) {
    console.error('Error creating Tablero:', error);
  }
});

export default User;


