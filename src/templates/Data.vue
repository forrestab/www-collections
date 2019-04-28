<template>
	<Layout>
		<Deck :data="data">
			<component :is="getHeader" slot="header" slot-scope="{ data }" :data="data" />
			<Card slot="card" slot-scope="{ data }" :data="data">
				<component :is="getOwn" slot-scope="{ data }" :data="data" />
			</Card>
		</Deck>
	</Layout>
</template>

<script>
import Deck from "~/components/Deck.vue";
import Card from "~/components/Card.vue";
import ComicHeader from "~/components/ComicHeader.vue";
import ComicOwn from "~/components/ComicOwn.vue";
import MovieHeader from "~/components/MovieHeader.vue";
import Own from "~/components/Own.vue";

export default {
	components: {
		Deck,
		Card,
		ComicHeader,
		ComicOwn,
		MovieHeader,
		Own
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
		getOwn() {
			if (this.$page.data.type === "comic") {
				return `${this.$page.data.type}Own`;
			}

			return "Own";
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
			cover
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
			cover
			own
		}
	}
}
</page-query>
