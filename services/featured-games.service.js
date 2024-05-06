import { findMostFrequentIntegers } from "../utils/mostFrequentFeaturedGames.js";

const featuredGamesService = {
  //TODO DEMANDE POURQUOI ICI ON A BBESOIN D UNE FONCTION NORMALE ET NON FLECHEE ????? ca creer une erreur avec getgam
  getFeaturedGames: async () => {
    try {
      const gameIds = await this.getGameIds();
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