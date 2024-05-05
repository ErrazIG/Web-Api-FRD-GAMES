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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "../../../public/paper-bag-head/OIG3",
        },
    }, {
        timestamps: false,
    });
    return Games;
}