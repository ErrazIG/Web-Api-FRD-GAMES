"use strict";

import { Router } from "express";
import memberController from "../controllers/member.controller.js";
import { memberUpdatePwdValidator, memberUpdateValidator } from "../validators/member.validator.js";
import { bodyValidatorMiddleware } from "../middlewares/body-validator.middleware.js";

const memberRouter = Router();


memberRouter.route("/:username")
    .get(memberController.getOne)
    .get(memberController.getMemberBestGames)
    .get(memberController.getMemberBestScores)
    .put(bodyValidatorMiddleware(memberUpdateValidator), memberController.update)
    .patch(bodyValidatorMiddleware(memberUpdatePwdValidator), memberController.updatePassword)
    .delete(memberController.delete)
    .all((_, res) => res.sendStatus(405));

memberRouter.route("/:username/friends")


export default memberRouter;