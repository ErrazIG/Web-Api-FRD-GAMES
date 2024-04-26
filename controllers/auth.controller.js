"use strict";
import memberService from "../services/member.service.js";
import { SuccessObjectResponse } from '../response-objects/success.response.js';
import { generateJwt } from "../utils/jwt.utils.js";

const authController = {

    register: async (req, res) => {
        const data = req.body;

        // Remplacer ceci par le middleware de validator (via Yup)
        if (!data || !data.username || !data.password) {
            res.status(422)
                .json({
                    errorMessage: 'Invalid data'
                });
            return;
        }


        const member = await memberService.add(data);

        // TODO Gerer si ca plante
        // -> Error 400

        res.status(201)
            //faudra t'il mettre dans le futur un location vers le client react ?
            // .location('/api/member/' + member.id)
            .json(new SuccessObjectResponse(member, 201));
    },

    login: async (req, res) => {

        console.log('RES !!!!!!!!!!!!!!');

        const data = req.body;


        // Remplacer ceci par le middleware de validator (via Yup)
        if (!data || !data.username || !data.password) {
            res.status(422)
                .json({
                    errorMessage: 'Invalid data'
                });
            return;
        }

        console.log(data);
        const member = await memberService.login(data.username, data.password);

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
        console.log("grrrrr", token.username);
        console.log("token : ", token);

    }
}

export default authController;