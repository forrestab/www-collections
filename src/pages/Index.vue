<template>
	<Layout>
		<c-deck :items="tags">
			<template slot-scope="{ data }">
				<c-card>
					<!-- image -->
					<c-card-header>
						<h3><g-link :to="data.path">{{ data.title }}</g-link></h3>
					</c-card-header>
				</c-card>
			</template>
		</c-deck>
	</Layout>
</template>

<style lang="scss" scoped>
</style>

<script>
import { sortBy } from "~/utils";
import Deck from "~/components/Deck.vue";
import Card from "~/components/card/Card.vue";
import CardHeader from "~/components/card/CardHeader.vue";
import CardMedia from "~/components/card/CardMedia.vue";
import Image from "~/components/Image.vue";

export default {
	components: {
		"c-deck": Deck,
		"c-card": Card,
		"c-card-header": CardHeader,
		"c-card-media": CardMedia,
		"c-image": Image
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
