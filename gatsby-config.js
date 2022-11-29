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
    "gatsby-plugin-image", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sharp", 
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/assets/images/`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "img",
        path: `${__dirname}/static/img`,
      },
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "services",
        path: `${__dirname}/content/services`,
      },
    }, 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "1999"
      }
    }, 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/images/icon.png"
      }
    }, 
    `gatsby-plugin-mdx`,
    'gatsby-plugin-offline', 
    'gatsby-plugin-netlify'
],
};