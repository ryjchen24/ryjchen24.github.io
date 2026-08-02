// Hide the photo if it fails to load (instead of showing a broken image).
document.getElementById('avatar-img').addEventListener('error', function () {
  this.style.display = 'none';
});

// "About" link smoothly returns to the top of the page.
document.getElementById('about-link').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo(0, 0);
});
