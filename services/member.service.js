"use stricr";
import { MemberDTO } from "../dto/memberDTO.js";
import argon2 from "argon2";
import db from "../models/index.js";


const memberService = {

    // login: async (username, password) => {
    //     const member = await db.Member.find(m => m.username === username && m.password === password);
    //     return !!member ? new MemberDTO(member) : null;
    // },

    login: async ({ username, password }) => {

        const member = await db.Member.findOne({ username });
        if (!member) {
            return null;
        }

        const pwdIsValid = await argon2.verify(member.password, password);
        if (!pwdIsValid) {
            return null;
        }
        
        return !!member ? new MemberDTO(member) : null;

    },

    add: async (userData) => {

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

        return new MemberDTO({
            ...userCreated.dataValues
        });
    }
};

export default memberService;