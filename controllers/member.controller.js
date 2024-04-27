"use strict";
import memberService from "../services/member.service.js";

const memberController = {

    get: async (req, res) => {
        res.sendStatus(501);
    },

    update: async (req, res) => {
        res.sendStatus(501);
    },

    delete: async (req, res) => {
        const memberId = req.params.id;

        await memberService.delete(memberId);

        res.sendStatus(200);
    },

};
export default memberController;