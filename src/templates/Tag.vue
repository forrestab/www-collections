<template>
	<Layout>
		<h1>{{$page.tag.title}}</h1>
		{{$page.tag.featureImage}}
		<template v-for="(category, index) in categories">
			<c-deck :title="index" :items="category" :key="category.id">
				<component :is="getCard(index)"  slot-scope="{ data }" :data="data" />
			</c-deck>
		</template>
	</Layout>
</template>

<script>
import { groupBy, sortGroupAndItems } from "~/utils";
import Deck from "~/components/Deck.vue";
import ComicCard from "~/components/ComicCard.vue";
import MovieCard from "~/components/MovieCard.vue";

export default {
	components: {
		"c-deck": Deck,
		"c-comic-card": ComicCard,
		"c-movie-card": MovieCard
	},
	metaInfo() {
		return {
			title: this.$page.tag.title
		};
	},
	computed: {
		categories() {
			return sortGroupAndItems(
				groupBy(
					this.$page.tag.belongsTo.edges.map(edge => edge.node),
					node => node.category
				),
				"releaseYear"
			);
		}
	},
	methods: {
		getCard(category) {
			return `c-${category.replace("s", "")}-card`;
		}
	}
};
</script>

<page-query>
query ($path: String!) {
  tag (path: $path) {
    id
    title
	featureImage
    belongsTo {
      edges {
        node {
          ... on Comic {
			id
            title
            category
            path
			releaseYear
			publisher
          }
          ... on Movie {
			id
            title
            category
            path
			releaseYear
			coverImage
			own
          }
        }
      }
    }
  }
}
</page-query>
