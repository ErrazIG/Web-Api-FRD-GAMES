"use strict";
import memberService from "../services/member.service.js";
import { SuccessObjectResponse } from '../response-objects/success.response.js';
import { generateJwt } from "../utils/jwt.utils.js";

const authController = {

    register: async (req, res) => {
        const data = req.body;
        const member = await memberService.add(data);

        res.status(201)
            //faudra t'il mettre dans le futur un location vers le client react ?
            // .location('/api/member/' + member.id)
            .json(new SuccessObjectResponse(member, 201));
    },

    login: async (req, res) => {
        const data = req.body;

        // Validation
        if (!data || !data.username || !data.password) {
            res.status(422)
                .json({
                    errorMessage: 'Invalid data'
                });
            return;
        }

        // Login via le service
        const member = memberService.login(data.username, data.password);

        if (!member) {
            res.status(400)
                .json({
                    errorMessage: 'Invalid credential'
                });
            return;
        }

        // Générer le JWT
        const token = await generateJwt(member);

        // Envoi du token
        res.status(200)
            .json({ token });
    },
    logout: async (req, res) => {
        res.sendStatus(501);
    }
}

export default authController;