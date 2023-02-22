class Renderer {
  constructor() {}
  renderUserData() {
    let api = new APIManager("https://randomuser.me/api/");
    let userData = api.getUsersData();
    userData.then((data) => {
      const source = $("#users-template").html();
      const template = Handlebars.compile(source);
      let newHTML = template({ data });
      $(".user-container").append(newHTML);
    });
  }
  renderFriendsData() {
    let api = new APIManager("https://randomuser.me/api/?results=6");
    let userData = api.getUsersData();
    userData.then((friends) => {
      const source = $("#friends-template").html();
      const template = Handlebars.compile(source);
      let newHTML = template({ friends });
      $(".friends-container").append(newHTML);
    });
    // for (let i = 0; i < 6; i++) {
    //   userData.then((data) => {
    //     let resultsArray = data.results;
    //     let firstName = resultsArray[0].name.first;
    //     let lastName = resultsArray[0].name.last;
    //     let newUser = new User(firstName, lastName);
    //     friends.friends.push(newUser);
    //   });
    // }
  }
}
