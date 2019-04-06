<template>
	<Layout>
		<Deck :data="data">
			<component :is="getHeader" slot="header" slot-scope="{ data }" :data="data" />
			<Card slot="card" slot-scope="{ data }" :data="data">
				<component :is="getMeta" slot-scope="{ meta }" :data="meta" />
			</Card>
		</Deck>
	</Layout>
</template>

<script>
import Deck from "~/components/Deck.vue";
import Card from "~/components/Card.vue";
import ComicHeader from "~/components/ComicHeader.vue";
import ComicMeta from "~/components/ComicMeta.vue";
import MovieHeader from "~/components/MovieHeader.vue";
import MovieMeta from "~/components/MovieMeta.vue";

export default {
	components: {
		Deck,
		Card,
		ComicHeader,
		ComicMeta,
		MovieHeader,
		MovieMeta
	},
	metaInfo() {
		return {
			title: this.$page.data.title
		}
	},
	computed: {
		data() {
			return this.$page[this.$page.data.type];
		},
		getHeader() {
			return `${this.$page.data.type}Header`;
		},
		getMeta() {
			return `${this.$page.data.type}Meta`;
		}
	}
};
</script>

<page-query>
query Collection($path: String!) {
	data (path: $path) {
		path
		type
		title
	}
	movie: data (path: $path) {
		path
		slug
		title
		publisher
		releaseYear
		items: movies {
			title
			alias
			releaseYear
			own
		}
	}
	comic: data (path: $path) {
		path
		slug
		publisher
		releaseYear
		title
		items: issues {
			title: issueNumber
			own
		}
	}
}
</page-query>
