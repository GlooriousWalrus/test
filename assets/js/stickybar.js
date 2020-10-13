const listitems = document.querySelector('#list').children;

const section1 = document.querySelector('#lipids');
const section2 = document.querySelector('#cerevisiae');
const section3 = document.querySelector('#PPP');

const dict = {
  lipids: listitems[0],
  cerevisiae: listitems[1],
  PPP: listitems[2],
};

function addInvert(elem) {
  elem.classList.add('invert');
}

function rmInvert(elem) {
  elem.classList.remove('invert');
}

function intersectionCallback(entries) {
  entries.forEach((entry) => {
    // section 2 inverts nav to white
    if (dict[entry.target.id] === listitems[1]) {
      Array.from(listitems).forEach(
        entry.isIntersecting ? addInvert : rmInvert
      );
    }

    dict[entry.target.id].classList.toggle('active', entry.isIntersecting);
  });
}

const observer = new IntersectionObserver(intersectionCallback, {
  threshold: 0.4,
});

observer.observe(section1);
observer.observe(section2);
observer.observe(section3);
