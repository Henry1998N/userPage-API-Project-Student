class User {
  constructor(firstName, lastName, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
  }
}

// HandlebarsTemplate(containerName, sourceData, data) {
//   const source = $(`#${sourceData}-template`).html();
//   const template = Handlebars.compile(source);
//   let newHTML = template({ data });
//   $(".user-container").append(newHTML);
// }
