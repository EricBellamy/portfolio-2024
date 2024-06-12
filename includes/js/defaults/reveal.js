window.currentReveals = {};
const sectionToggles = document.querySelectorAll("[data-revealid]");
for (let a = 0; a < sectionToggles.length; a++) {
	const toggle = sectionToggles[a];
	if (window.currentReveals[toggle.dataset.revealid] === undefined || window.currentReveals[toggle.dataset.revealid] === false) {
		window.currentReveals[toggle.dataset.revealid] = toggle.classList.contains("clicked") ? toggle : false;
	}

	toggle.reveal = {
		id: a,
		targets: document.querySelectorAll(toggle.dataset.revealtarget)
	}
	toggle.addEventListener("click", function () {
		// Disable the current toggle
		const currentToggle = window.currentReveals[this.dataset.revealid];
		if (currentToggle != false) {
			if (currentToggle.reveal.id === this.reveal.id) return;
			currentToggle.classList.toggle("clicked", false);
			for (const target of currentToggle.reveal.targets) {
				target.classList.toggle("clicked", false);
			}
		}

		// Activate the toggle
		for (const target of this.reveal.targets) {
			target.classList.toggle("clicked", true);
		}
		this.classList.toggle("clicked", true);

		// Set the current toggle
		window.currentReveals[this.dataset.revealid] = this;
	});
}