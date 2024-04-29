"use strict";

import { Router } from "express";
import memberController from "../controllers/member.controller.js";
import { memberUpdateValidator } from "../validators/member.validator.js";
import { bodyValidatorMiddleware } from "../middlewares/body-validator.middleware.js";

const memberRouter = Router();


memberRouter.route("/:id")
    .get()
    .put(bodyValidatorMiddleware(memberUpdateValidator), memberController.update)
    .delete(memberController.delete) // Utilisez la méthode delete de votre contrôleur
    .all((_, res) => res.sendStatus(405));

export default memberRouter;