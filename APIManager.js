//This is the class that will manage all your APIs

class APIManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.data = {};
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
  getAllData() {
    return this.data;
  }
}
