//packages
import "dotenv/config";
import express from "express";
import cors from "cors";

//paths
import { connectToDatabase, connectToGraphiql } from "@middlewares";

//variable-declarations
const app = express();
const { PORT, ROOT_URL } = process.env;

//middlewares
app.use(express.json());
app.use(cors());

connectToDatabase();
connectToGraphiql(app);

app.listen(PORT, () =>
  console.log(`Server Running On \x1B[35m\x1B[4m${ROOT_URL}\x1B[24m\x1B[39m`)
);
