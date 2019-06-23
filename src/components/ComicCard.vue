<template>
	<c-card>
		<!-- image -->
		<c-card-header>
			<h3><g-link :to="data.path">{{ data.title }}</g-link></h3>
		</c-card-header>
		<c-card-stat label="Release Year">
			<h5>{{ data.releaseYear }}</h5>
		</c-card-stat>
		<c-card-stat label="Publisher">
			<h5>{{ data.publisher }}</h5>
		</c-card-stat>
	</c-card>
</template>

<script>
import Card from "~/components/card/Card.vue";
import CardHeader from "~/components/card/CardHeader.vue";
import CardMedia from "~/components/card/CardMedia.vue";
import CardStat from "~/components/card/CardStat.vue";
import Image from "~/components/Image.vue";
import MediaList from "~/components/MediaList.vue";

export default {
	name: "CComicCard",
	components: {
		"c-card": Card,
		"c-card-header": CardHeader,
		"c-card-media": CardMedia,
		"c-card-stat": CardStat,
		"c-image": Image,
		"c-media-list": MediaList
	},
	props: {
		data: Object
	}
};
</script>

<style lang="scss">

</style>
