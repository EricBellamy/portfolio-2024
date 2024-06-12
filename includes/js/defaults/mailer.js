const forms = document.querySelectorAll('.contact-form');
for (const form of forms) {
	form.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission

		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://form.performanceprojects.ca/process-form', true);
		xhr.onload = function () {
			if (xhr.status === 200) {
				location.reload(); // Reload the page on successful submission
			} else {
				console.error('Form submission failed');
			}
		};
		xhr.onerror = function () {
			console.error('Request failed');
		};
		xhr.send(new FormData(event.target));
		// xhr.send({ hello: "world" });
	});
}