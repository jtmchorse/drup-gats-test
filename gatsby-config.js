module.exports = {
plugins: [
  {
    resolve:'gatsby-source-drupal',
    options: {
      baseURL: "https://dev-smar-gatsby.pantheonsite.io/",
      apiBase: 'jsonapi', // endpoint of Drupal server
    },
  },
],
}
