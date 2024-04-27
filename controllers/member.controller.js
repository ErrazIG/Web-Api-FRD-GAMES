"use strict";
import memberService from "../services/member.service.js";

const memberController = {

    get: async (req, res) => {
        res.sendStatus(501);
    },

    update: async (req, res) => {

        const memberId = req.params.id;
        const updateData = req.body;
        try {
            const updatedDataMember = await memberService.update(memberId, updateData);
            if (!updatedDataMember) {
                return res.status(404).send({ message: 'Membre non trouvé.' });
            }
            res.send(updatedDataMember);
        } catch (err) {
            res.status(400).send(err.message);
        }
    },

    delete: async (req, res) => {
        const memberId = req.params.id;

        await memberService.delete(memberId);

        res.sendStatus(200);
    },

};
export default memberController;