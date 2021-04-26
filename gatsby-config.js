module.exports = {
  siteMetadata: {
    title: `Swastik Yadav || Full stack software engineer.`,
    name: `Swastik Yadav`,
    siteUrl: `https://swastikyadav.com`,
    description: `Full-Stack web development blogs, courses, tutorials, and projects. Learn web development best practices the right way.`,
    hero: {
      heading: `Full-Stack web development blogs, tutorials, courses, and projects.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/codeSwastik`,
      },
      {
        name: `github`,
        url: `https://github.com/Swastikyadav`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/swastik-yadav-6386b71b5/`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCHs73qDeimVFGTa-MzjtnLA`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Swastik Yadav`,
        short_name: `Swastik`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://swastikyadav.com/`,
        stripQueryString: true,
      },
    },
  ],
};
