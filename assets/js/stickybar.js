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

var ratiodict = {
  lipids: 0,
  cerevisiae: 0,
  PPP: 0,
};

// I'm so sorry.
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    // section 2 inverts nav to white
    if (dict[entry.target.id] === listitems[1]) {
      Array.from(listitems).forEach(
        entry.isIntersecting && entry.intersectionRatio > 0.4
          ? addInvert
          : rmInvert
      );
    }
    // remove active state
    dict[entry.target.id].classList.remove('active');

    ratiodict[entry.target.id] = entry.intersectionRatio;
  });

  var arr = Object.keys(ratiodict).map(function (key) {
    return ratiodict[key];
  });
  listitems[arr.indexOf(Math.max(...arr))].classList.add('active');
}

const observer = new IntersectionObserver(intersectionCallback, {
  threshold: [0, 0.25, 0.5, 0.75, 1],
});

observer.observe(section1);
observer.observe(section2);
observer.observe(section3);
