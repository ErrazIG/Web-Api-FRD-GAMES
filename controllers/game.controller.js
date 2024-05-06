import gameService from "../services/games.service.js";
import featuredGameService from "../services/featured-games.service.js";

const gameController = {
  getGames: async (req, res) => {
    const games = await gameService.getGames();
    res.status(200).json(games);
  },
  getOne: async (req, res) => {
    const id = req.params.id;
    const game = await gameService.getOne(id);
    res.status(200).json(game);
  },
  getGamesIds: async (req, res) => {
    const ids = await gameService.getGameIds();
    res.status(200).json(ids);
  },
  getFeaturedGames: async (req, res) => {
    const featuredGames = await featuredGameService.getFeaturedGames();
    res.status(200).json(featuredGames);
  }
};
export default gameController;