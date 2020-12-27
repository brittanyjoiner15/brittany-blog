module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Brittany`,
    author: `Brittany Joiner`,
    description: `Hi! Learn more about me and my dev projects on this site.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/britt_joiner`,
      },
      {
        name: `github`,
        url: `https://github.com/brittanyjoiner15`,
      },
    ],
  },
}
