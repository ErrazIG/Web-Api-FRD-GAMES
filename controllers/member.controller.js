"use strict";
import memberService from "../services/member.service.js";

const memberController = {
  getOne: async (req, res) => {
    const username = req.params.username;
    console.log("le user de fdp", username);
    const member = await memberService.getOne(username);

    if (!member) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(member);
  },
  getMemberBestGamesScores: async (req, res) => {
    const username = req.params.username
    const bestGamesScores = await memberService.getMemberBestGamesScores(username);

    if (!bestGamesScores) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(bestGamesScores);

    
  },
  getMemberBestFriendsScores: async (req, res) => {
    const username = req.params.username
    const bestFriendsScores = await memberService.getMemberBestFriendsScores(username);

    if (!bestFriendsScores) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(bestFriendsScores);
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

  updatePassword: async (req, res) => {
    const username = req.params.username;
    // console.log("username :", username);
    const currentPassword = req.body.currentPassword;
    // console.log(currentPassword);
    const newPwd = req.body.password;
    // console.log("new pwd :", newPwd);

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
      const updatePwd = await memberService.updatePassword(username, newPwd);
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
    const username = req.params.username;

    await memberService.delete(username);

    res.sendStatus(200);
  },
};
export default memberController;
