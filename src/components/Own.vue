<template>
	<ul class="own-tags">
		<li v-for="item in data" :key="item" :class="[ownTag, getClass(item)]">
			{{ getClass(item) }}
		</li>
	</ul>
</template>

<style lang="scss" scoped>
.own {

	&-tags {
		display: flex;
	}

	&-tag {
		border-radius: 0.25rem;
		font-weight: 600;
		padding: 0.15rem 0.75rem;

		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
}

.own {
	background-color: #84BF04;
}

.bluray {
	background-color: #72C1F2;
}

.dvd {
	background-color: #F22E3E;
}

.cloud {
	background-color: #B96CFF;
}
</style>

<script>
export default {
	props: {
		data: { type: Array }
	},
	data() {
		return {
			ownTag: "own-tag"
		};
	},
	methods: {
		getClass(item) {
			return typeof item === "boolean" ? "own" : item;
		}
	}
}
</script>
