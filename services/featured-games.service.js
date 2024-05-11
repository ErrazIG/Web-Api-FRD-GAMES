import db from "../models/index.js";
import { findMostFrequentIntegers } from "../utils/mostFrequentFeaturedGames.js";
import gamesService from './games.service.js';

const featuredGamesService = {
  getFeaturedGames: async () => {
    try {
      const gameIds = await gamesService.getGameIds();
      const featuredGameIds = findMostFrequentIntegers(gameIds);
      console.log("1", featuredGameIds);

      const featuredGames = await db.Game.findAll({
        where: {
          id: featuredGameIds,
        },
      });

      console.log("2", featuredGames);
      return featuredGames;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des jeux en vedette :",
        error
      );
      return [];
    }
  },
};
export default featuredGamesService;