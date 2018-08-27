module.exports = {
  siteMetadata: {
    title: 'Kelsey Oates | UX Designer and Writer',
  },
  plugins: ['gatsby-plugin-react-helmet'],

  resolve: `gatsby-plugin-amplitude-analytics`,
  options: {
    // Specify the API key for your Amplitude Project (required)
    apiKey: "39bf26222268da08e8ec1059b6250027",
    // Puts tracking script in the head instead of the body (optional)
    head: false,
    // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
    respectDNT: true,
    // Avoids sending pageview hits from custom paths (optional)
    exclude: ["/preview/**", "/do-not-track/me/too/"],
    // Override the default event types (optional)
    eventTypes: {
      outboundLinkClick: 'OUTBOUND_LINK_CLICK',
      pageView: 'PAGE_VIEW',
    },
    // Amplitude JS SDK configuration options (optional)
    amplitudeConfig: {
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    }
  },


  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: "UA-109165782-1",
    // Puts tracking script in the head instead of the body
    head: false,
    // Setting this parameter is optional
    anonymize: true,
    // Setting this parameter is also optional
    respectDNT: true,
    // Avoids sending pageview hits from custom paths
    exclude: ["/preview/**", "/do-not-track/me/too/"],
  },
};
