window.loadDistortion = function (initCallback) {
	const image = document.createElement("img");
	image.addEventListener("load", function () {
		setTimeout(function () {
			window.distortionScroller = new WebGLDistortionScroller({
				displacement: image,
				afterInit: initCallback,
				mode: [0, [1, 1, 1], 0, 0.93, 0.95]
			});
			window.distortionScroller.init();
		}, 100);
	});
	// image.src = "https://use.performanceprojects.site/website/portfolio/jpg/webgl/distortion.jpg";
	image.setAttribute("alt", "webgl distortion noise map");
	image.width = 128;
	image.height = 128;
	image.src = "/exports/img/distortion.jpg";
	image.style.opacity = 0;
	image.style.zIndex = -100;
	document.body.appendChild(image);
}