"use strict";
import memberService from "../services/member.service.js";
import { SuccessObjectResponse } from '../response-objects/success.response.js';

const authController = {

    register: async (req, res) => {
        const member = await memberService.add(req.body);

        res.status(201)
            // .location('/api/member/' + member.id)
            .json(new SuccessObjectResponse(member, 201));
    },

    login: async (req, res) => {
        res.sendStatus(501);
    },
    logout: async (req, res) => {
        res.sendStatus(501);
    }
}

export default authController;