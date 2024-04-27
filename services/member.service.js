"use strict";

import db from "../models/index.js";

const memberService = {

    update: async (memberId, updateData) => {

        const transaction = await db.sequelize.transaction();
        try {
            const member = await db.Member.findByPk(memberId);
            console.log(member);
            console.log(updateData);

            if (!member) {
                await transaction.rollback();
                return null;
            }
        
            await member.update(updateData, { transaction });
            await transaction.commit();
            return member;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    delete: async (memberId) => {

        const transaction = await db.sequelize.transaction();
        try {
            const member = await db.Member.findByPk(memberId);
            if (!member) {
                throw new Error("L'utilisateur n'existe pas.");
            }

            await member.destroy({ transaction });
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }

    }
};
export default memberService;