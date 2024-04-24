'use strict';

import { Sequelize, DataTypes } from "sequelize";

/** games model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {

    const Games = sequelize.define('games', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: false,
    });
    return Games;
}