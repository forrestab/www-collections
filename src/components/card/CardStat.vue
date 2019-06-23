<template>
	<div class="card-stat">
		<p class="card-stat-label">{{ label }}</p>
		<slot />
	</div>
</template>

<script>
export default {
	name: "CCardStat",
	props: {
		label: String
	}
}
</script>

<style>
.card-stat {

	&-label {

	}
}
</style>
