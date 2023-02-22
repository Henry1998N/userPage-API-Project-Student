const renderer = new Renderer();
const emptyContainers = function () {
  $(".user-container").empty();
  $(".quote-container").empty();
  $(".pokemon-container").empty();
  $(".meat-container").empty();
  $(".friends-container").empty();
};
$("#loadUser").on("click", () => {
  emptyContainers();
  renderer.renderUsersData();
  renderer.renderQuoteData();
  renderer.renderAboutSection();
  renderer.renderPokemon();
});
