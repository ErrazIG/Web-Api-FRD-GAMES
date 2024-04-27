"use strict";
import authService from "../services/auth.service.js";
import { SuccessObjectResponse } from '../response-objects/success.response.js';
import { generateJwt } from "../utils/jwt.utils.js";

const authController = {

    register: async (req, res) => {
        const data = req.body;

        const member = await authService.register(data);


        res.status(201)
            //faudra t'il mettre dans le futur un location vers le client react ?
            // .location('/api/member/' + member.id)
            .json(new SuccessObjectResponse(member, 201));
    },

    login: async (req, res) => {
        const data = req.body;

        const member = await authService.login(data.username, data.password);

        if (!member) {
            res.status(400)
                .json({
                    errorMessage: 'Invalid username or email'
                });
            return;
        }

        const token = await generateJwt(member);

        res.status(200)
            .json({ token });

    },
};
export default authController;