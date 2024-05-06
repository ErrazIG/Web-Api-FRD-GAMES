import db from "../models/index.js";
import { findMostFrequentIntegers } from "../utils/mostFrequentFeaturedGames.js";

const gamesService = {
  getGames: async () => {
    const games = await db.Game.findAll();
    console.log(games);
    return games;
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
  //TODO DEMANDE POURQUOI ICI ON A BBESOIN D UNE FONCTION NORMALE ET NON FLECHEE ?????
  getFeaturedGames: async function() {
    try {
      const gameIds = await this.getGameIds();
      const featuredGameIds = findMostFrequentIntegers(gameIds);
      const featuredGames = await db.Game.findAll({
        where: {
          id: featuredGameIds, 
        },
      });
      console.log(featuredGames);
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
export default gamesService;
