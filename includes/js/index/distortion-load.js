window.loadDistortion = function (initCallback) {
	const img = document.getElementById("displacementMap");
	img.addEventListener("load", function () {
		setTimeout(function () {
			window.distortionScroller = new WebGLDistortionScroller({
				displacement: document.getElementById("displacementMap"),
				afterInit: initCallback,
				// afterInit: function () {


				// 	// switch (window.distortionScroller.mode) {
				// 	// 	case 0:
				// 	// 		document.body.style.background = `#000`;
				// 	// 		break;
				// 	// 	case 1:
				// 	// 		document.body.style.background = `#fff`;
				// 	// 		break;
				// 	// }

				// 	// window.distortionScroller.start();

				// 	// // This is the scroll function that determines what is happening on the page based on what section we're in
				// 	// // highPerformanceScroll();
				// },
				mode: [0, [1, 1, 1], 0, 0.93, 0.95]
			});
			window.distortionScroller.init();
		}, 100);
	});
	img.src = img.dataset.src;
}