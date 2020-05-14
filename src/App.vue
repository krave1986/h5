<template>
	<div>
		<div>{{ "intrinsic width: " + intrinsicWidth }}</div>
		<div>{{ "intrinsic height: " + intrinsicHeight }}</div>
		<div>{{ "viewport width: " + viewportWidth }}</div>
		<div>{{ "viewport height: " + viewportHeight }}</div>
		<div>{{ "screen height: " + screenHeight }}</div>
		<div>{{ "screen width: " + screenWidth }}</div>
		<div class="camera">
			<video id="video" autoplay playsinline muted>Video stream not available.</video>
			<button id="startbutton">Take photo</button>
		</div>
		<canvas id="canvas"> </canvas>
		<div class="output">
			<img id="photo" alt="The screen capture will appear in this box." />
		</div>
	</div>
</template>

<script>
/* eslint-disable */

export default {
	name: "App",
	data() {
		return {
			intrinsicWidth: 0,
			intrinsicHeight: 0,
			viewportWidth: 0,
			viewportHeight: 0,
			screenWidth: 0,
			screenHeight: 0
		};
	},
	methods: {},
	mounted() {
		const vm = this;

		var width = 320; // We will scale the photo width to this
		var height = 0; // This will be computed based on the input stream

		var streaming = false;

		var video = null;
		var canvas = null;
		var photo = null;
		var startbutton = null;

		video = document.getElementById("video");
		canvas = document.getElementById("canvas");
		photo = document.getElementById("photo");
		startbutton = document.getElementById("startbutton");

		// 获取媒体流
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then(function(stream) {
				video.srcObject = stream;
				// video.play();
			})
			.catch(function(err) {
				console.log("An error occurred: " + err);
			});

		// 设置 canplay 事件，准备去拿 video 的 intrinsic 高宽
		video.addEventListener("canplay", function(ev) {
			if (!streaming) {
				// height = video.videoHeight / (video.videoWeight/width)
				setTimeout(() => {
					vm.intrinsicWidth = video.videoWidth;
					vm.intrinsicHeight = video.videoHeight;
					vm.viewportWidth = document.body.clientWidth;
					vm.viewportHeight = document.body.clientHeight;
					vm.screenWidth = screen.width;
					vm.screenHeight = screen.height;
				}, 200);
			}
		});
	}
};
</script>

<style></style>
