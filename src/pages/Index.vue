<template>
	<Layout>
		<Deck :items="tags"/>
	</Layout>
</template>

<style lang="scss" scoped>
</style>

<script>
import { sortBy } from "~/utils";
import Deck from "~/components/Deck.vue";

export default {
	components: {
		Deck
	},
	metaInfo: {
		title: "Home"
	},
	computed: {
		tags() {
			return sortBy(
				this.$page.allTag.edges.map(edge => edge.node),
				"title"
			);
		}
	}
};
</script>

<page-query>
query {
  allTag {
    edges {
      node {
        id
        title
        path
		featureImage
      }
    }
  }
}
</page-query>
