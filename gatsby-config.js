require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://cerulean-blini-4e9733.netlify.app/',
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : 'http://localhost:8000/'

module.exports = {
  siteMetadata: {
    title: `Boulakhlas Kaïs`,
    descriptionMeta:`Kaïs Boulakhlas, développeur web qui apprend tous les jours. 
    Ce site est un portfolio montrant mes différentes compétences et 
    expériences ainsi que mes différents projets dans l'informatique. 
    Je propose mes services tels que le développement de sites web/applications web et plus...`,
    description: `Développeur web qui apprend tous les jours`,
    author: `@kaisboulakhlas`,
    keywords: `kaïs boulakhlas, développeur web, portfolio, projets, expériences, compétences, services`,
    siteUrl: siteUrl,
    image: `src/assets/images/favicon.png`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-plugin-netlify-cms", 
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-remark",
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "projets",
        path: `${__dirname}/content/projets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "competences",
        path: `${__dirname}/content/competences`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "experiences",
        path: `${__dirname}/content/experiences`,
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
        "icon": "src/assets/images/favicon.png"
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://www.gstatic.com'],
      },
    },
    "gatsby-plugin-preact",
    'gatsby-plugin-offline', 
    'gatsby-plugin-netlify'
  ],
};