const googleTrackingId = process.env.google_analytics_tracking_id;

module.exports = {
  siteMetadata: {
    siteUrl: 'https://ryanzegray.dev', // used-by- gatsby to generate robots.txt / sitemap.xml
    title: 'Ryan Zegray',
    description:
      'Ryan Zegray Software Developer from Toronto Canada',
    author: 'Ryan Zegray',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleTrackingId,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway:300,400,600,700,800`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ryan Zegray',
        short_name: 'Ryan Zegray',
        start_url: '/',
        background_color: '#F2F2F2',
        theme_color: '#F2F2F2',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
  ],
};
