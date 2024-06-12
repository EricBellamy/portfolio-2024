window.debounce = function (t, n, e) { let i, l, o, a, r, c, u, d, g; if ("function" != typeof t) throw TypeError("Expected a function"); function f(n, e) { let l = c, a = u; if (-1 != e) { if (!1 === o) return; o && 0 === e ? (d = n, g = n) : c = u = i = void 0 } t.apply(a, [e, ...l]) } function s() { let t = Date.now(), e = function t(e) { let i = e - d, l = e - g; return { trailingEdge: i >= n, bugTrailingEdge: i < 0, maxWait: a && r <= l } }(t); if (e.trailingEdge || e.bugTrailingEdge) return f(t, 1); (!e.maxWait || (f(t, 0), !0 == o)) && (i = $(s)) } function $(t) { return window.cancelAnimationFrame(i), window.requestAnimationFrame(t) } return n = +n || 0, e && "object" == typeof e && (l = !!e.leading, r = (a = "maxWait" in e) ? Math.max(+e.maxWait || 0, n) : n, o = "trailing" in e ? e.trailing : void 0), function (...t) { let n = Date.now(); c = t, u = this, d = n, !1 == (void 0 != i) && (g = n, l && f(n, -1), i = $(s)) } };
window.casualScrollItems = [];
window.urgentScrollItems = [];
window.scroll.listen = {
	casual: function (callback) {
		window.casualScrollItems.push(callback);
	},
	urgent: function (callback) {
		window.urgentScrollItems.push(callback);
	}
}

window.scrollInfo = {
	top: 0,
	bottom: 0,
};
const casualScrollDebounced = window.debounce((function () {
	const scrollTop = document.documentElement.scrollTop;
	const scrollBottom = scrollTop + window.innerHeight;
	const scrollStatus = document.body.classList.contains("scrolled");
	const e = 15 < scrollTop;
	if (scrollStatus === !e) document.body.classList.toggle("scrolled", e);
	for (const callback of window.casualScrollItems) callback(scrollTop, scrollBottom);
}), 100, { leading: true, maxWait: 250 });

window.urgentScrollFunction = function() {
	const scrollTop = document.documentElement.scrollTop;
	const scrollBottom = scrollTop + window.innerHeight;

	window.scrollInfo.top = scrollTop;
	window.scrollInfo.bottom = scrollBottom;

	const scrollStatus = document.body.classList.contains("scrolled");
	const e = 15 < scrollTop;
	if (scrollStatus === !e) document.body.classList.toggle("scrolled", e);
	for (const callback of window.urgentScrollItems) callback(scrollTop, scrollBottom);
}
const urgentScrollDebounced = window.debounce(window.urgentScrollFunction, 100, { leading: true, maxWait: 100 });

window.addEventListener("scroll", function () {
	casualScrollDebounced();
	urgentScrollDebounced();
});