const api = new APIManager();

$("#displayUser").on("click", () => {
  api.getRandomUsers();
  api.getQuoteData();
  api.getPokemonData();
  api.getAboutMeData();
});
