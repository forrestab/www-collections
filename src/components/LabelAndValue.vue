<template>
	<dl>
		<dt>{{ label }}</dt>
		<dd><slot /></dd>
	</dl>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
	props: {
		label: { type: String }
	}
}
</script>
