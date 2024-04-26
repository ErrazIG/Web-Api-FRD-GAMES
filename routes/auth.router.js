import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { bodyValidatorMiddleware } from '../middlewares/body-validator.middleware.js';
import { MemberDTO } from '../dto/memberDTO.js';
import { memberLoginValidator, memberRegisterValidator } from '../validators/member.validator.js';


const authRouter = Router();

authRouter.route('/register')
    .post(bodyValidatorMiddleware(memberRegisterValidator), authController.register)
    .all((_, res) => res.sendStatus(405));


authRouter.route('/login')
    .post(bodyValidatorMiddleware(memberLoginValidator), authController.login)
    .all((_, res) => res.sendStatus(405));

export default authRouter;