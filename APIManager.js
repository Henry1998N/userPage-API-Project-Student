//This is the class that will manage all your APIs

class APIManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.data = {};
  }
  getUsersData() {
    return $.ajax({
      method: "GET",
      url: this.apiUrl,
      success: function (user) {},
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }
}
