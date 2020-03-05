<template>
	<div class="text-gray-700">
		<navbar />
		<nuxt />
	</div>
</template>

<script>
import navbar from '~/components/common/navbar'

export default {
	components: {
		navbar
	}
}
</script>

<style>
html {
	font-family: 'Product sans';
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

body {
	@apply bg-gray-100;
}
</style>
