import { Rol } from "../Models/models.js";

export const rolSeed = async () =>
  await Rol.bulkCreate([
      { name: "admin" },
    { name: "user" },
  ]);

/*   await rolSeed() */