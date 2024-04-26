'use strict';

import 'dotenv/config';
import db from "./../models/index.js";

const initDB = async () => {
  await db.sequelize.authenticate();

  db.Role.create({
    id: 1,
    name: "Admin",
  });
  db.Role.create({
    id: 2,
    name: "Modo",
  });
  db.Role.create({
    id: 3,
    name: "Member",
  });



};
initDB();