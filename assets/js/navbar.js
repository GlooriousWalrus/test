// scroll handler for navbar
const navbar = document.querySelector('.mainNav');

let last_known_scroll_position = 0;
let ticking = false;

function handleScroll(scroll_pos) {
  // Do something with the scroll position
  if (scroll_pos >= 100) {
    navbar.classList.add('navbar-shrink');
  } else {
    navbar.classList.remove('navbar-shrink');
  }
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      handleScroll(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
