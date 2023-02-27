class Renderer {
  constructor() {}
  HandlebarsTemplate(containerName, source, data) {}
  renderUsersData(mainUser) {
    const source = $("#users-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ mainUser });
    console.log({ mainUser });
    $(".user-container").empty().append(newHTML);
  }
  renderFriendsData(friends) {
    const source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ friends });
    console.log({ friends });
    $(".friends-container").empty().append(newHTML);
  }
  renderQuoteData(quote) {
    const source = $("#quote-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template(quote);
    $(".quote-container").empty().append(newHTML);
  }
  renderAboutSection(meatData) {
    const source = $("#meat-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ meatData });
    $(".meat-container").empty().append(newHTML);
  }
  renderPokemon(pokemon) {
    Handlebars.registerHelper("toProperCase", (string) => {
      return string[0].toUpperCase() + string.slice(1);
    });
    const source = $("#pokemon-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template(pokemon);
    $(".pokemon-container").empty().append(newHTML);
  }
}
