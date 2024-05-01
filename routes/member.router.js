"use strict";

import { Router } from "express";
import memberController from "../controllers/member.controller.js";
import { memberUpdatePwdValidator, memberUpdateValidator } from "../validators/member.validator.js";
import { bodyValidatorMiddleware } from "../middlewares/body-validator.middleware.js";

const memberRouter = Router();


memberRouter.route("/:username")
    .get()
    .put(bodyValidatorMiddleware(memberUpdateValidator), memberController.update)
    .post(memberController.verifyCurrentPassword)
    .patch(bodyValidatorMiddleware(memberUpdatePwdValidator), memberController.updatePassword)
    .delete(memberController.delete)
    .all((_, res) => res.sendStatus(405));

export default memberRouter;