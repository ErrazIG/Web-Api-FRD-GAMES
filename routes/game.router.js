import { Router } from 'express';
import gameController from '../controllers/game.controller.js';


const gameRouter = Router();

gameRouter.route('/')
    .get(gameController.getGames)
    .all((_, res) => res.sendStatus(405));


gameRouter.route('/ids')
    .get(gameController.getGamesIds)
    .all((_, res) => res.sendStatus(405));


gameRouter.route('/featured-games')
    .get(gameController.getFeaturedGames)
    .all((_, res) => res.sendStatus(405));



export default gameRouter;