"use strict";

import { MemberDTO } from "../dto/memberDTO.js";
import db from "../models/index.js";

//TODO ajouter le updatePassword, getById, getByUsername

const memberService = {
  update: async (username, updateData) => {
    const transaction = await db.sequelize.transaction();
    try {
      const member = await db.Member.findOne({ where: { username } });
      console.log("1", member);

      if (!member) {
        console.log("2", member);
        await transaction.rollback();
        return null;
      }
      console.log("3", member);

      await member.update(updateData, { transaction });
      await transaction.commit();
      return !!member ? new MemberDTO(member) : null;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  // updatePassword: async (username, password) => {

  // },

  delete: async (username) => {
    const transaction = await db.sequelize.transaction();
    try {
      const member = await db.Member.findOne({ where: { username } });

      if (!member) {
        throw new Error("L'utilisateur n'existe pas.");
      }

      await member.destroy({ transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
export default memberService;
