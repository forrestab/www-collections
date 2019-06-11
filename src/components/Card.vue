<template>
	<figure>
		<CloudinaryImage :src="data.cover" v-if="data.cover" />
		<figcaption>
			<h1>{{ data.title }}</h1>
			<slot :meta="data" />
		</figcaption>
	</figure>
</template>

<style lang="scss" scoped>
.card {
	//border-radius: 0.5rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr auto;
	height: 100%;
	//overflow: hidden;

	/*& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}*/

	&-image {
		height: 100%;
		object-fit: cover;
		object-position: top center;
		width: 100%;
	}

	&-body {
		//background-color: rgba(0,0,0,0.4);
		//color: #fff;
		//display: flex;
		//flex-flow: column nowrap;
		//justify-content: flex-end;
		padding: 1rem;
	}

	&-time {
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	&-title {
		font-size: 1.7rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}
}
</style>

<script>
import CloudinaryImage from "~/components/CloudinaryImage.vue";

export default {
	components: {
		CloudinaryImage
	},
	props: {
		data: { type: Object }
	}
}
</script>
