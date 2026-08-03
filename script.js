// The banner is fixed at the top, so push the whole page down by exactly its
// height. Re-measure on resize since the nav can wrap and change that height.
function offsetForBanner() {
  var header = document.querySelector('.site-header');
  document.body.style.paddingTop = header.offsetHeight + 'px';
}
offsetForBanner();
window.addEventListener('resize', offsetForBanner);

// Hide the photo if it fails to load (instead of showing a broken image).
document.getElementById('avatar-img').addEventListener('error', function () {
  this.style.display = 'none';
});

// "About" link smoothly returns to the top of the page.
document.getElementById('about-link').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo(0, 0);
});
