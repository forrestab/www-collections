<template>
	<Layout>
		<h2>Comics</h2>
		<ul>
			<li v-for="{ node } in comics" :key="node.id">
				<g-link :to="buildPath(node)">{{ node.title }}</g-link>
			</li>
		</ul>
		<h2>Movies</h2>
		<ul>
			<li v-for="{ node } in movies" :key="node.id">
				<g-link :to="buildPath(node)">{{ node.title }}</g-link>
			</li>
		</ul>
	</Layout>
</template>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>

<script>
export default {
	metaInfo: {
		title: "Home"
	},
	methods: {
		buildPath(node) {
			return `/${node.type}/${node.slug}`;
		}
	},
	computed: {
		comics() {
			return this.$page.collections.edges.filter(({ node }) => node.type === "comic");
		},
		movies() {
			return this.$page.collections.edges.filter(({ node }) => node.type === "movie");
		}
	}
};
</script>

<page-query>
query Collections {
	collections: allData {
		edges {
			node {
				id
				type
				slug
				title
			}
		}
	}
}
</page-query>
