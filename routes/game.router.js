import { Router } from 'express';
import gameController from '../controllers/game.controller.js';
import featuredGameController from '../controllers/featured-games.controller.js';


const gameRouter = Router();

gameRouter.route('/')
    .get(gameController.getGames)
    .all((_, res) => res.sendStatus(405));

gameRouter.route('/:id')
    .get(gameController.getOne)
    .all((_, res) => res.sendStatus(405));

gameRouter.route('/ids')
    .get(gameController.getGamesIds)
    .all((_, res) => res.sendStatus(405));

gameRouter.route('/featured-games')
    .get(featuredGameController.getFeaturedGames)
    .all((_, res) => res.sendStatus(405));



export default gameRouter;