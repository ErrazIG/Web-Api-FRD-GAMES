"use strict";

import { Router } from "express";
import memberController from "../controllers/member.controller.js";

const memberRouter = Router();


memberRouter.route("/:id")
    .get()
    .patch(memberController.update)
    .delete(memberController.delete) // Utilisez la méthode delete de votre contrôleur
    .all((_, res) => res.sendStatus(405));

export default memberRouter;