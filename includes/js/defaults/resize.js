window.resizeItems = [];
if (window.resize === undefined) window.resize = {};
window.resize.listen = function (callback) {
	callback();
	window.resizeItems.push(callback);
}
const resizeDebounced = window.debounce((function () {
	for (const callback of window.resizeItems) callback(window.innerWidth, window.innerHeight);
}), 100, { leading: true, maxWait: 100 });

// Observe the body for changes
const resizeObserver = new ResizeObserver(function(){
	resizeDebounced();
});
resizeObserver.observe(document.body);