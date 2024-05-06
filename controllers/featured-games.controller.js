import featuredGameService from "../services/featured-games.service.js";

const featuredGameController = {
  getFeaturedGames: async (req, res) => {
    const featuredGames = await featuredGameService.getFeaturedGames();
    res.status(200).json(featuredGames);
  },
};
export default featuredGameController;
