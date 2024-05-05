'use strict';

import { Sequelize, DataTypes } from "sequelize";

/** friend model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {

    const Friend = sequelize.define('friend', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_friends_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_friends_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
    return Friend;
}