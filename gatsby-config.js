module.exports = {
      plugins: [
            {
                  resolve: `gatsby-source-mongodb`,
                  options: {
                        dbName: `nameOfTheDatabase`,
                        collection: `nameOfTheCollection`,
                        connectionString: `mongodb+srv://<USERNAME>:<PASSWORD>@<SERVERNAME>.mongodb.net`
                        // more options here: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-mongodb#plugin-options
                  },
            },
      ],
}