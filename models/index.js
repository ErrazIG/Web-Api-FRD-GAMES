'use strict';

import { Sequelize } from "sequelize";
import memberBuilder from "./member.model.js";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
});

const db = {};

db.sequelize = sequelize;
db.Member = memberBuilder

export default db;