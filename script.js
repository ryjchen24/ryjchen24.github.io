// Measure the fixed banner and expose its height as the --banner-h CSS
// variable. The stylesheet uses that single value for both the page's top
// offset and the anchor-scroll spacing, so nav links line up correctly.
// Re-measure on resize (the nav can wrap) and after the web font loads
// (which can change the banner's height).
function measureBanner() {
  var header = document.querySelector('.site-header');
  document.documentElement.style.setProperty('--banner-h', header.offsetHeight + 'px');
}
measureBanner();
window.addEventListener('resize', measureBanner);
window.addEventListener('load', measureBanner);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(measureBanner);
}

// Hide the photo if it fails to load (instead of showing a broken image).
document.getElementById('avatar-img').addEventListener('error', function () {
  this.style.display = 'none';
});
