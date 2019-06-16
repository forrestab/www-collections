<template>
	<Layout>
		<h1>{{$page.tag.title}}</h1>
		{{$page.tag.featureImage}}
		<template v-for="(category, index) in categories">
			<Deck :title="index" :items="category" :key="category.id"/>
		</template>
	</Layout>
</template>

<script>
import { groupBy, sortGroupAndItems } from "~/utils";
import Deck from "~/components/Deck.vue";

export default {
	components: {
		Deck
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
          }
          ... on Movie {
			id
            title
            category
            path
			releaseYear
          }
        }
      }
    }
  }
}
</page-query>
