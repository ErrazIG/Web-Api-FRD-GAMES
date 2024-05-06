"use strict";

import { MemberDTO } from "../dto/memberDTO.js";
import db from "../models/index.js";
import argon2 from "argon2";

const memberService = {
  getOne: async (username) => {
    const member = await db.Member.findOne({ where: { username } });

    try {
      if (!member) {
        return null;
      }
      return !!member ? new MemberDTO(member) : null;
    } catch (error) {
      throw new Error("L'utilisateur est introuvable");
    }
  },
  //TODO A REPARER D'URGENCE
  getMemberBestGamesScores: async (username) => {
    try {
      const member = await db.Member.findOne({
        where: { username },
      });

      if (!member) {
        console.log(
          `Membre avec le nom d'utilisateur "${username}" introuvable.`
        );
        return;
      }
      var scores = [];
      scores = await db.Score.findAll({
        where: { member_id: member.id },
        order: [["bestScore", "DESC"]],
        limit: 3,
        include: db.Game
      });
      // console.log("score", scores);

      const formattedScores = scores.map((score) => {
        // console.log("un seul score tout seul");

        // console.log(JSON.stringify(score, undefined, 4));

        return {
          game_id: score.game_id,
          bestScore: score.bestScore,
          name: score.game.name,
          img: score.game.img,
        };
      });

      return formattedScores;
    } catch (error) {
      console.error("Erreur lors de la récupération des scores :", error);
    }
  },

  getMemberBestFriendsScores: async (username) => {

    try {
      const member = await db.Member.findOne({
        where: { username },
      });

      if (!member) {
        console.log(
          `Membre avec le nom d'utilisateur "${username}" introuvable.`
        );
        return;
      }
      var scores = [];
      scores = await db.Score.findAll({
        where: { member_id: member.id },
        order: [["bestScore", "DESC"]],
        limit: 3,
        include: [
          { model: db.Game },
          { model: db.Member }
      ]
      });
      console.log("score $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", scores);

      const formattedScores = scores.map((score) => {
        // console.log("un seul score tout seul");

        console.log("GAGOUGAGAGOUGAGOUGAGAGAGOUGAGAGOUGAGOUGAGAGAGOUGAGAGOUGAGOUGAGAGAGOUGAGAGOUGAGOUGAGA", JSON.stringify(score, undefined, 4));

        return {
          game_id: score.game_id,
          bestScore: score.bestScore,
          name: score.member.username,
          img: score.member.img,
        };
      });

      return formattedScores;
    } catch (error) {
      console.error("Erreur lors de la récupération des scores :", error);
    }
  },
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
