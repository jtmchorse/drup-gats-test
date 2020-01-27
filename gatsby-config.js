module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: "https://dev-smar-gatsby.pantheonsite.io/",
        apiBase: "jsonapi", // endpoint of Drupal server
      },
    },
  ],
}
