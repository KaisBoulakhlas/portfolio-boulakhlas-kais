require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://kaisboulakhlas.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
const description = "Kaïs Boulakhlas, développeur web qui apprend tous les jours. Ce site est un portfolio montrant mes différentes compétences et expériences ainsi que mes différents projets dans l'informatique. Je propose mes services tels que le développement de sites web/applications web et plus...";

module.exports = {
  siteMetadata: {
    title: `Boulakhlas Kaïs`,
    descriptionMeta:description,
    description: `Développeur web qui apprend tous les jours`,
    author: `@kaisboulakhlas`,
    keywords: `kaïs boulakhlas, développeur web, portfolio, projets, expériences, compétences, services`,
    siteUrl: siteUrl,
    image: `src/assets/images/favicon.png`
  },
  flags: {
    DEV_SSR: true,
    PARALLEL_SOURCING: true
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "cv",
        path: `${__dirname}/content/cv`
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${process.env.GA_ID}`
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{userAgent: '*'}]
          },
          'branch-deploy': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Portfolio - Boulakhlas Kaïs`,
        short_name: `BK Portfolio`,
        description: description,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#fff`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
        icon: "src/assets/images/favicon.png"
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['scss','css', 'html', 'js', 'svg','webp', 'png']
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://www.gstatic.com'],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: `${process.env.GA_ID}`, 
          cookieName: 'gatsby-gdpr-google-analytics', 
          anonymize: true, 
          allowAdFeatures: false 
        },
        environments: ['production']
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    'gatsby-plugin-offline', 
    'gatsby-plugin-netlify'
  ],
};