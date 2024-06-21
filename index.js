import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {corsOptions} from './middlewares/corsOptions.js';
/* import {rolSeed} from "./seed/rolSeed.js"; */
/* import {userSeed} from "./seed/userSeed.js";
import {pokemonSeed} from "./seed/pokemonSeed.js"; */

const app = express();
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

app.use(routes);

app.use((req, res) => {
  res.status(404).send({ success: false, message: "not found" });
});

await connection.sync({force:false});
/*  await rolSeed();  */
/* await userSeed();
await pokemonSeed() */




app.listen(SERVER_PORT, () => {
  console.log(`server ok http://localhost:${SERVER_PORT}`);
});