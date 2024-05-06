import gameService from "../services/games.service.js";

const gameController = {
  getGames: async (req, res) => {
    const games = await gameService.getGames();
    res.status(200).json(games);
  },
  getGamesIds: async (req, res) => {
    const ids = await gameService.getGameIds();
    res.status(200).json(ids);
  },
  getFeaturedGames: async (req, res) => {
    const featuredGames = await gameService.getFeaturedGames();
    res.status(200).json(featuredGames);

  }
};
export default gameController;