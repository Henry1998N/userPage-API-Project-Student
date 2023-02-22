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
      console.log(text);
      const source = $("#meat-template").html();
      const template = Handlebars.compile(source);
      let newHTML = template({ text });
      $(".meat-container").append(newHTML);
    });
  }
}
