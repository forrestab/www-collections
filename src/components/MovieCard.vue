<template>
	<c-card>
		<c-card-media>
			<c-image :src="data.coverImage" />
		</c-card-media>
		<c-card-header>
			<h3><g-link :to="data.path">{{ data.title }}</g-link></h3>
		</c-card-header>
		<c-card-stat label="Release Year">
			<h5>{{ data.releaseYear }}</h5>
		</c-card-stat>
		<c-card-stat label="Media Owned">
			<!--<h5 v-for="media in data.own" :key="media">{{ media }}</h5>-->
			<c-media-list :items="data.own" />
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
	name: "CMovieCard",
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
