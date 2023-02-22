class Renderer {
  constructor() {}
  renderUsersData() {
    let userApi = new APIManager("https://randomuser.me/api/?results=7");
    let userData = userApi.getData();
    userData
      .then((data) => {
        const mainUser = data.results.splice(0, 1);
        const source = $("#users-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({ mainUser });
        $(".user-container").append(newHTML);
        const friends = data.results.splice(0, data.results.length);
        return friends;
      })
      .then((friends) => {
        const source = $("#friends-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({ friends });
        $(".friends-container").append(newHTML);
      });
  }
  renderQuoteData() {
    let quoteApi = new APIManager("https://api.kanye.rest/");
    let quoteData = quoteApi.getData();
    quoteData.then((quote) => {
      const source = $("#quote-template").html();
      const template = Handlebars.compile(source);
      let newHTML = template(quote);
      $(".quote-container").append(newHTML);
    });
  }
  renderAboutSection() {
    let aboutMeApi = new APIManager(
      "https://baconipsum.com/api/?type=all-meat&sentences=2&start-with-lorem=1"
    );
    let aboutMeData = aboutMeApi.getData();
    aboutMeData.then((text) => {
      const source = $("#meat-template").html();
      const template = Handlebars.compile(source);
      let newHTML = template({ text });
      $(".meat-container").append(newHTML);
    });
  }
  renderPokemon() {
    let randomId = Math.floor(Math.random() * 949);
    let pokemonApi = new APIManager(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    let pokemonData = pokemonApi.getData();
    pokemonData.then((pokemon) => {
      const source = $("#pokemon-template").html();
      const template = Handlebars.compile(source);
      let newHTML = template(pokemon);
      console.log(pokemon);
      $(".pokemon-container").append(newHTML);
    });
  }
}
