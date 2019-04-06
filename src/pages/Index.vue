<template>
	<Layout>
		<Deck title="Comics" :data="comics">
			<template slot="card" slot-scope="{ data }">
				<g-link :to="buildPath(data)">
					<Card :data="data" />
				</g-link>
			</template>
		</Deck>
		<Deck title="Movies" :data="movies">
			<template slot="card" slot-scope="{ data }">
				<g-link :to="buildPath(data)">
					<Card :data="data" />
				</g-link>
			</template>
		</Deck>
	</Layout>
</template>

<style lang="scss" scoped>

</style>

<script>
import Deck from "~/components/Deck.vue";
import Card from "~/components/Card.vue";

export default {
	components: {
		Deck,
		Card
	},
	metaInfo: {
		title: "Home"
	},
	methods: {
		buildPath(node) {
			return `/${node.type}/${node.slug}`;
		},
		buildDeck(type) {
			return this.$page.collections.edges
				.filter(({ node }) => node.type === type)
				.map(({ node }) => node)
				.reduce((acc, current) => {
					acc.items.push(current);

					return acc;
				}, { items: [] });
		}
	},
	computed: {

		comics() {
			return this.buildDeck("comic");
		},
		movies() {
			return this.buildDeck("movie");
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
