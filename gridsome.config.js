module.exports = {
	siteName: "Collections",
	plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "content/comics/**/*.md",
				typeName: "Comic",
				route: "/:tags/comics/:slug",
				refs: {
					tags: "Tag"
				}
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "content/movies/**/*.md",
				typeName: "Movie",
				route: "/:tags/movies/:slug",
				refs: {
					tags: "Tag"
				}
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "content/tags/**/*.md",
				typeName: "Tag",
				route: "/:id"
			}
		},
		{
			use: "gridsome-plugin-netlify-cms",
			options: {
				configPath: "static/admin/config.yml",
				modulePath: "static/admin/index.js",
				publicPath: "/admin"
			}
		}
	]
}
