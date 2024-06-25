import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
import Tablero from "./Tablero.js";


class User extends Model {


  async comparePass(password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
  };

  static async userExist(mail) {
    try {
      const user = await User.findOne({
        attributes: ["id", "name", "mail"],
        where: { mail },
      });
      return user !== null;
    } catch (error) {
      throw new Error('Error checking if user exists');
    }
  }
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
      unique: true, 
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const userExists = await User.userExist(user.mail);
  if (userExists) {
    throw new Error("El mail ingresado ya se encuentra registrado");
  }
  const genSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, genSalt);
  user.password = hashedPassword;
});

User.afterCreate(async (user) => {
  try {
    await Tablero.create({ userId: user.id });
  } catch (error) {
    console.error('Error creating Tablero:', error);
  }
});

export default User;
