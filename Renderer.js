class Renderer {
  constructor() {}
  renderUsersData() {
    let api = new APIManager("https://randomuser.me/api/?results=7");
    let userData = api.getUsersData();
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
        console.log(friends);
        const source = $("#friends-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({ friends });
        $(".friends-container").append(newHTML);
      });
  }
}
