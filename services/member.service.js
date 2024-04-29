"use strict";

import { MemberDTO } from "../dto/memberDTO.js";
import db from "../models/index.js";

const memberService = {
  update: async (username, updateData) => {
      const member = await db.Member.findOne({ where: { username } });

            if (!member) {
                await transaction.rollback();
                return null;
            }
        
            await member.update(updateData, { transaction });
            await transaction.commit();
            return new MemberDTO(member);
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    delete: async (memberId) => {

  delete: async (username) => {
      const member = await db.Member.findOne({ where: { username } });

            await member.destroy({ transaction });
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }

    }
};
export default memberService;