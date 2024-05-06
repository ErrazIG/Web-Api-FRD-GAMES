'use strict';

//Imports
import 'dotenv/config';
import express from "express";
import 'express-async-errors';
import cors from 'cors';
import morgan from "morgan";
import db from "./models/index.js";
import mainRouter from './routes/index.js';
import { authTokenMiddleware } from './middlewares/authentification.middleware.js';


//Accessibilité aux variables d'env
const { NODE_ENV, PORT } = process.env;

db.sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));


if (NODE_ENV === 'dev') {
    // db.sequelize.sync({ force: true });
    // db.sequelize.sync({ alter: { drop: false} });
    // db.sequelize.sync()
}


//WEB API
//Initialisation
const app = express();

//Middlewares
app.use(cors())
app.use(express.static("public"))
app.use(express.json());
app.use(morgan('short'));
app.use(authTokenMiddleware())

//Routing
app.use('/api', mainRouter);

//Lancement du serv
app.listen(PORT, () => {
    console.log(`Web API is running on ${PORT} (${NODE_ENV})`);
})

/* 
INSERT INTO friends (user_friends_1, user_friends_2, status) VALUES ("", "", )
INSERT INTO scores (member_id, game_id, latestScore, bestScore) VALUES ('', '', '', '')
*/