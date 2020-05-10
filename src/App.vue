<template>
	<div>
		<button id="app" @click="go">
			abc
		</button>
		<div @click="shot" style="background: green;height: 100px;width: 100px;">bb</div>
		<video autoplay ref="v"></video>
	</div>
</template>

<script>
export default {
	name: "app",
	methods: {
		go() {
			console.log(navigator.mediaDevices?.getUserMedia);
		},
		shot() {
			const constraints = {
				video: true
			};
			const vm = this;
			navigator.mediaDevices.getUserMedia(constraints).then(stream => {
				vm.$refs.v.srcObject = stream;
			});
		}
	},
	computed: {
		bb() {
			return navigator.mediaDevices?.getUserMedia;
		}
	}
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
