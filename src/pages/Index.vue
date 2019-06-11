<template>
  <Layout>
    <Deck :items="tags" />
  </Layout>
</template>

<style lang="scss" scoped>
</style>

<script>
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
		return this.$page.allTag.edges.map(edge => edge.node);
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
      }
    }
  }
}
</page-query>
