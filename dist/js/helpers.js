// empty event handlers for iOS to recognize :active pseudo-classes and label clicks
if (document.addEventListener) {
	document.addEventListener('touchstart', function() {}, false);
	document.addEventListener('click', function() {}, false);
}
