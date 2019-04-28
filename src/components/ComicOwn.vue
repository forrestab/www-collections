<template>
	<Own :data="[data]" />
</template>

<script>
import Own from "~/components/Own.vue";

export default {
	components: {
		Own
	},
	props: {
		data: { type: Boolean }
	}
}
</script>
