"use stricr";
import { MemberDto } from "../dto/memberDto.js";
import argon2 from "argon2";
import db from "../models/index.js";


const memberService = {
    add: async (userData) => {
        // console.log("userData :", userData);

        //Vérifier si existe deja
        const userExists = await db.Member.findOne({
            where: {
                    email: userData.email,
                    username: userData.username,
            }

        });

        //Si existe, error
        if (userExists) {
            throw new Error('L\'utilisateur existe déjà.');
        }

        //Hashe pwd
        const hashedPassword = await argon2.hash(userData.password);

        //Ajout en DB
        const userCreated = await db.Member.create({
            username: userData.username,
            email: userData.email,
            hash_password: hashedPassword,
            role_id: 3,
        });

        return new MemberDto({ 
            ...userCreated.dataValues
        });
    }
};

export default memberService;