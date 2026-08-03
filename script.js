// The banner is fixed at the top, so push the whole page down by its height
// plus a little breathing room. Re-measure on resize (the nav can wrap) and
// after the web font loads (which can change the banner's height).
var BANNER_GAP = 24; // extra space below the banner, in pixels
function offsetForBanner() {
  var header = document.querySelector('.site-header');
  document.body.style.paddingTop = (header.offsetHeight + BANNER_GAP) + 'px';
}
offsetForBanner();
window.addEventListener('resize', offsetForBanner);
window.addEventListener('load', offsetForBanner);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(offsetForBanner);
}

// Hide the photo if it fails to load (instead of showing a broken image).
document.getElementById('avatar-img').addEventListener('error', function () {
  this.style.display = 'none';
});

// "About" link smoothly returns to the top of the page.
document.getElementById('about-link').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo(0, 0);
});
