module.exports = {
  siteMetadata: {
    title: `Boulakhlas Kaïs`,
    description: `Développeur web qui apprend tout les jours`,
    author: `@kaisboulakhlas`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-netlify-cms", 
    "gatsby-plugin-sass", 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "1999"
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/images/icon.png"
      }
    }, 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "markdown",
        path: "./content/services",
      },
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, 
    'gatsby-plugin-offline', 
    'gatsby-plugin-netlify'
],
};