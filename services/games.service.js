import db from "../models/index.js";
import { findMostFrequentIntegers } from "../utils/mostFrequentFeaturedGames.js";

const gamesService = {
  getGames: async () => {
    const games = await db.Game.findAll();
    console.log(games);
    return games;
  },
  getOne: async (id) => {
    console.log(id);
    const game = await db.Game.findByPk(id);
    return game;
  },
  getGameIds: async () => {
    try {
      const gameIds = await db.Score.findAll({
        attributes: ["game_id"],
      });
      console.log(gameIds);

      // gameIds contiendra un tableau d'objets avec les game_id
      return gameIds.map((score) => score.game_id);
    } catch (error) {
      console.error("Erreur lors de la récupération des game_id :", error);
      return [];
    }
  },
};
export default gamesService;
