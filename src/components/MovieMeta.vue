<template>
	<div>
		<time>{{ data.releaseYear }}</time>
		<ul>
			<li v-for="media in data.own" :key="media">
				{{ media }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
	props: {
		data: { type: Object }
	}
}
</script>
