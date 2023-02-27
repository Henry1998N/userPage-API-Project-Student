//This is the class that will manage all your APIs

class APIManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.data = {};
    this.render = new Renderer();
  }
  getData() {
    return $.ajax({
      method: "GET",
      url: this.apiUrl,
      success: function () {},
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }
  getRandomUsers() {
    let userApi = new APIManager("https://randomuser.me/api/?results=7");
    let userData = userApi.getData();
    userData.then((users) => {
      const mainUser = users.results.splice(0, 1);
      this.data["mainUser"] = mainUser;
      this.data["friends"] = users;
      this.render.renderUsersData(mainUser);
      this.render.renderFriendsData(this.data["friends"]);
    });
  }
  getQuoteData() {
    let quoteApi = new APIManager("https://api.kanye.rest/");
    let quoteData = quoteApi.getData();
    quoteData.then((quote) => {
      this.data["quote"] = quote;
      this.render.renderQuoteData(quote);
    });
  }
  getPokemonData() {
    let randomId = Math.floor(Math.random() * 949);
    let pokemonApi = new APIManager(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    let pokemonData = pokemonApi.getData();
    pokemonData.then((pokemon) => {
      this.data["pokemon"] = pokemon;
      this.render.renderPokemon(pokemon);
    });
  }
  getAboutMeData() {
    let meatApi = new APIManager(
      "https://baconipsum.com/api/?type=all-meat&sentences=2&start-with-lorem=1"
    );
    let meatData = meatApi.getData();
    meatData.then((meatData) => {
      this.data["aboutMeSection"] = meatData;
      this.render.renderAboutSection(meatData);
    });
  }
}
