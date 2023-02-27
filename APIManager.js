// //This is the class that will manage all your APIs

// class APIManager {
//   constructor(apiUrl) {
//     this.apiUrl = apiUrl;
//     this.data = {};
//   }
//   getData() {
//     return $.ajax({
//       method: "GET",
//       url: this.apiUrl,
//       success: function () {},
//       error: function (xhr, text, error) {
//         console.log(text);
//       },
//     });
//   }
//   getRandomUsers() {
//     let userApi = new APIManager("https://randomuser.me/api/?results=7");
//     let userData = userApi.getData();
//     userData.then((users) => {
//       const mainUser = users.results.splice(0, 1);
//       this.data["mainUser"] = mainUser;
//     });
//   }
// }
