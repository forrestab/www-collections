// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Collections",
	plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				// Normally you want data files to be in `src/data/*`, however, I
				// dont want these files published since building their pages
				// using graphql.
				path: "data/**/*.md",
				typeName: "Data",
				route: "/:type/:slug"
			}
		},
		{
			use: "gridsome-plugin-netlify-cms",
			options: {
				publicPath: "/admin"
			}
		}
	]
}
