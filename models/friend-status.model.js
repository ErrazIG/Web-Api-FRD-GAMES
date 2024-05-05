"use strict";

import { Sequelize, DataTypes } from "sequelize";

/** friendStatus model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {
  const friendStatus = sequelize.define(
    "friendStatus",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    },
    {
      tableName: "friendStatus",
      timestamps: false,
    }
  );
  return friendStatus;
};
