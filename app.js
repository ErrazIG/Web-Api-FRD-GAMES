import 'dotenv/config';
//Imports
import express from "express";
import 'express-async-errors';
import morgan from "morgan";

//Accessibilité aux variables d'env
const { NODE_ENV, PORT } = process.env;

//WEB API
//Initialisation
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('short'));

//Lancement du serv
app.listen(PORT, () => {
    console.log(`Web API is running on ${PORT} (${NODE_ENV})`);
})