"use strict";
import memberService from "../services/member.service.js";

const memberController = {
  get: async (req, res) => {
    res.sendStatus(501);
  },

  update: async (req, res) => {
    const username = req.params.username;
    const updateData = req.body;
    try {
      const updatedDataMember = await memberService.update(
        username,
        updateData
      );
      if (!updatedDataMember) {
        return res.status(404).send({ message: "Membre non trouvé." });
      }
      res.send(updatedDataMember);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  verifyCurrentPassword: async (req, res) => {
    const username = req.params.username;
    // console.log(username);
    const currentPassword = req.body.currentPassword;
    // console.log(currentPassword);

    try {
      const verifyCurrentPassword = await memberService.verifyCurrentPassword(
        username,
        currentPassword
      );

      if (!verifyCurrentPassword) {
        return res
          .status(401)
          .send({ message: "Mot de passe actuel incorrect." });
      }
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  updatePassword: async (req, res) => {
    const username = req.params.username;
    console.log("username :", username);
    const newPwd = req.body.password;
    console.log("new pwd :", newPwd);

    try {
      const updatePwd = await memberService.updatePassword(
        username,
        newPwd
      );
      console.log("updatePwd :", updatePwd);
      if (!updatePwd) {
        return res
          .status(404)
          .send({ message: "Echec de la mise a jour du mot de passe." });
      }
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  delete: async (req, res) => {
    const memberId = req.params.id;

    await memberService.delete(memberId);

    res.sendStatus(200);
  },
};
export default memberController;
