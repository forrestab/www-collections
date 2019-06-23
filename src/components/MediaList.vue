<template>
	<ul>
		<li class="text" :class="cloudCss">
			<fa icon="play" transform="shrink-10 down-1" mask="cloud" />
			<span>Streaming</span>
		</li>
		<li class="text" :class="blurayCss">
			<fa icon="compact-disc" fixed-width />
			<span>Blu-ray</span>
		</li>
		<li class="text" :class="dvdCss">
			<fa icon="compact-disc" fixed-width />
			<span>DVD</span>
		</li>
	</ul>
</template>

<script>
export default {
	name: "CMediaList",
	props: {
		items: Array
	},
	computed: {
		blurayCss() {
			return this.buildCss("bluray");
		},
		cloudCss() {
			return this.buildCss("cloud");
		},
		dvdCss() {
			return this.buildCss("dvd");
		}
	},
	methods: {
		buildCss(media) {
			return {
				[media]: true,
				[`${media}-own`]: this.items.includes(media)
			};
		}
	}
}
</script>

<style lang="scss">
.text {
	display: flex;
	flex-flow: column;
	align-items: center;
	font-size: 2.5rem;
	font-style: italic;
	font-weight: 700;
	word-break: keep-all;

	& span {
		font-size: 40%;
		margin-top: -5px;
	}
}

.bluray,
.dvd,
.cloud {
	color: #555;
}

.bluray-own {
	color: blue;
}

.dvd-own {
	color: red;
}

.cloud-own {
	color: purple;
}
</style>
