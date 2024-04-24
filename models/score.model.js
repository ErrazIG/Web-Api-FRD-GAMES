'use strict';

import { Sequelize, DataTypes } from "sequelize";

/** score model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {

    const Score = sequelize.define('score', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
    return Score;
}