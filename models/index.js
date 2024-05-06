'use strict';
import { Sequelize } from "sequelize";
import memberBuilder from "./member.model.js";
import roleBuilder from "./role.model.js";
import friendBuilder from "./friend.model.js";
import friendStatusBuilder from "./friend-status.model.js";
import gameBuilder from "./game.model.js";
import scoreBuilder from "./score.model.js";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
});

const db = {};

db.sequelize = sequelize;
db.Member = memberBuilder(sequelize)
db.Role = roleBuilder(sequelize)
db.Friend = friendBuilder(sequelize)
db.FriendStatus = friendStatusBuilder(sequelize)
db.Game = gameBuilder(sequelize)
db.Score = scoreBuilder(sequelize)


db.Role.hasMany(db.Member, {
    foreignKey: 'role_id'
})
db.Member.belongsTo(db.Role, {
    foreignKey: 'role_id'
});

db.FriendStatus.hasMany(db.Friend, {
    foreignKey: 'status_id'
})
db.Friend.belongsTo(db.FriendStatus, {
    foreignKey: 'status_id'
});

db.Member.hasMany(db.Score, {
    foreignKey: 'member_id'
})
db.Score.belongsTo(db.Member, {
    foreignKey: 'member_id'
})

db.Game.hasMany(db.Score, {
    foreignKey: 'game_id'
})
db.Score.belongsTo(db.Game, {
    foreignKey: 'game_id'
})


export default db;