<template>
	<section>
		<slot name="header" :data="data">
			<h2>{{ data.title }}</h2>
		</slot>
		<ul>
			<li v-for="item in data.items" :key="item.title">
				<slot name="card" :data="item" />
			</li>
		</ul>
	</section>
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
