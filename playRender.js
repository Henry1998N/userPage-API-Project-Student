class Renderer {
  constructor() {}
  HandlebarsTemplate(containerName, sourceTemplate, data) {
    const source = $(`#${sourceTemplate}-template`).html();
    const template = Handlebars.compile(source);
    let newHTML = template(data);
    $(`.${containerName}-container`).empty().append(newHTML);
  }
  renderUsersData(mainUser) {
    this.HandlebarsTemplate("user", "users", { mainUser });
  }
  renderFriendsData(friends) {
    this.HandlebarsTemplate("friends", "friends", { friends });
  }
  renderQuoteData(quote) {
    this.HandlebarsTemplate("quote", "quote", quote);
  }
  renderAboutSection(meatData) {
    this.HandlebarsTemplate("meat", "meat", { meatData });
  }
  renderPokemon(pokemon) {
    Handlebars.registerHelper("toProperCase", (string) => {
      return string[0].toUpperCase() + string.slice(1);
    });
    this.HandlebarsTemplate("pokemon", "pokemon", pokemon);
  }
}
