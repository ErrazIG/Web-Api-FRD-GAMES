'use strict';

//Imports
import 'dotenv/config';
import express from "express";
import 'express-async-errors';
import morgan from "morgan";
import db from "./models/index.js";
import mainRouter from './routes/index.js';

//Accessibilité aux variables d'env
const { NODE_ENV, PORT } = process.env;

db.sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));


if (NODE_ENV === 'dev') {
    // db.sequelize.sync({ force: true });
    // db.sequelize.sync({ alter: true });
    // db.sequelize.sync();
}
//test insert member
// INSERT INTO members (username, email, hash_password, roleId )
// VALUES ('ErrazIG', 'erraz-ig@example.fr', 'g4q5F64Kgq564Gg4q564Eg6q558SVg5q64g856q9', (SELECT id FROM roles WHERE name = 'admin'));


//WEB API
//Initialisation
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('short'));

//Routing
app.use('/api', mainRouter);

//Lancement du serv
app.listen(PORT, () => {
    console.log(`Web API is running on ${PORT} (${NODE_ENV})`);
})