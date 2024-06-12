function updateDistortionMode(mode) {
	if (window.distortionScroller.mode != mode) {
		switch (mode) {
			case 0:
				window.distortionScroller.changeMode(
					0,
					[1, 1, 1],
					0,
					0.93,
					0.95
				);
				break;
			case 1:
				// const contactBounds = contactSection.getBoundingClientRect();
				window.distortionScroller.changeMode(
					1,
					// [0.06666666666666667, 0.06666666666666667, 0.06666666666666667],
					[0, 0, 0],
					// window.scrollY + contactBounds.top - windowHeight * 0.75,
					scrollHeightSections[2],
					0.93,
					0.95
				);
				break;
		}
	}
}