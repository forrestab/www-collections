<template>
	<dl class="stat">
		<dt class="stat-label">{{ label }}</dt>
		<dd class="stat-value"><slot /></dd>
	</dl>
</template>

<style lang="scss" scoped>
.stat {
	align-items: flex-start;
	display: flex;
	flex-flow: column nowrap;

	&-label {
		text-transform: uppercase;
	}

	&-value {
		font-size: 2rem;
		font-weight: 400;
		margin: 0;
	}
}
</style>

<script>
export default {
	props: {
		label: { type: String }
	}
}
</script>
