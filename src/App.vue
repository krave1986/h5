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
		<div>{{ ua }}</div>
	</div>
</template>

<script>
/* eslint-disable */
export default {
	name: "app",
	methods: {},
	computed: {
		ua() {
			return navigator.userAgent.toLowerCase();
		}
	},
	mounted() {
		var width = 320; // 把照片的宽度缩放到这么大
		var height = 0; // 这个会根据 input stream 进行计算

		var streaming = false;

		var video = null;
		var canvas = null;
		var photo = null;
		var startbutton = null;

		video = document.getElementById("video");
		canvas = document.getElementById("canvas");
		photo = document.getElementById("photo");
		startbutton = document.getElementById("startbutton");

		// 获取 media stream
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: false })
			.then(function(stream) {
				video.srcObject = stream;
				// video.play();
			})
			.catch(function(err) {
				console.log("An error occurred: " + err);
			});
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
#video {
	transform: scaleX(-1);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
}
</style>
