<template>
	<div>
		<div class="camera">
			<video id="video">Video stream not available.</video>
			<button id="startbutton">Take photo</button>
		</div>
		<canvas id="canvas"></canvas>
		<div class="output">
			<img id="photo" alt="The screen capture will appear in this box." />
		</div>
	</div>
</template>

<script>
export default {
	name: "app",
	methods: {},
	computed: {}
};
</script>

<style lang="scss">
body {
	margin: 0;
	display: grid;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
</style>
