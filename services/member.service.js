"use strict";

import { MemberDTO } from "../dto/memberDTO.js";
import db from "../models/index.js";
import argon2 from "argon2";

//TODO ajouter le updatePassword, getById, getByUsername

const memberService = {
  getOne: async (username) => {
    const member = await db.Member.findOne({ username });

    try {
      if (!member) {
        return null;
      }
      return !!member ? new MemberDTO(member) : null;
    } catch (error) {
      throw new Error("L'utilisateur est introuvable");
    }
  },
  getMemberBestGames: async (username) => {
    const member = await db.Member.findOne({ username });
    
  },
  getMemberBestScores: async (username) => {},
  update: async (username, updateData) => {
    const transaction = await db.sequelize.transaction();
    try {
      const member = await db.Member.findOne({ where: { username } });

      if (!member) {
        await transaction.rollback();
        return null;
      }

      await member.update(updateData, { transaction });
      await transaction.commit();
      return !!member ? new MemberDTO(member) : null;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  verifyCurrentPassword: async (username, currentPassword) => {
    const member = await db.Member.findOne({ where: { username } });

    if (!member) {
      throw new Error("L'utilisateur est introuvable.");
    }

    const isMatch = await argon2.verify(member.hash_password, currentPassword);
    return isMatch;
  },
  updatePassword: async (username, newPwd) => {
    const transaction = await db.sequelize.transaction();

    try {
      const member = await db.Member.findOne({ where: { username } });

      if (!member) {
        await transaction.rollback();
        return null;
      }
      const newHashPwd = await argon2.hash(newPwd);

      // Assurez-vous de spécifier l'attribut 'password' dans l'objet de mise à jour
      await member.update({ hash_password: newHashPwd }, { transaction });
      await transaction.commit();
      return true; // Ajoutez un retour pour indiquer le succès de la mise à jour
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  delete: async (username) => {
    const transaction = await db.sequelize.transaction();
    try {
      const member = await db.Member.findOne({ where: { username } });

      if (!member) {
        throw new Error("L'utilisateur est introuvable.");
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
