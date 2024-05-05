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
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        latestScore: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        bestScore: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
    return Score;
}