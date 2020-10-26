var loadedImgCount = 0;
var two_obj = null;
var curve = null;
var orb = null;
var pct = 0;
var resizeId = null;

setTimeout(function(){ 
  init();
     window.addEventListener('resize', handleResize);
     window.addEventListener('scroll', moveball);
}, 1000);

new ResizeObserver(outputsize).observe(textbox)


function onImgLoad() {
 loadedImgCount++;

   if (loadedImgCount === 4) {

   }
}

function moveball() {
  const curvediv = document.querySelector('#curvething');

  const top = curvediv.getBoundingClientRect().top;
  const total = curvediv.getBoundingClientRect().height;

  if (Math.sign(top) === -1) {
    pct = (Math.abs(top) + window.innerHeight / 2) / total;
  } else {
    pct = (window.innerHeight / 2 - Math.abs(top)) / total;
  }

  curve.getPointAt(pct, orb.translation);
  orb.translation.addSelf(curve.translation);

  two_obj.update();
}

function handleResize() {
  window.clearTimeout(resizeId);
  resizeId = window.setTimeout(doResize, 500);
}

function doResize() {
  const parent = document.getElementsByClassName('humanpractice-section')[0]

  const parentwidth = parent.offsetWidth;
  const parentheight = parent.offsetHeight;
  console.log(parentheight)
  curve.remove();
  orb.remove();
  two_obj.height = parentheight;
  two_obj.width = parentwidth;
  createCurve();
  two_obj.update();
}

function init() {
  const parent = document.getElementsByClassName('humanpractice-section')[0]

  const parentwidth = parent.offsetWidth;
  const parentheight = parent.offsetHeight;
  const elem = document.getElementsByClassName('curvecanvas')[0]

  two_obj = new Two({
    type: Two.Types.webgl,
    height: parentheight,
    width: parentwidth,
  }).appendTo(elem);

  createCurve();
}

function createCurve() {
  const parent = document.getElementsByClassName('humanpractice-section')[0]

  const parentwidth = parent.offsetWidth;
  const parentheight = parent.offsetHeight;


  const sun = document.getElementsByClassName('integrated-sun')[0];

  const box1 = document.getElementsByClassName('ihp-block1')[0];

  console.log(box1.offsetLeft, box1.offsetTop)

  
  var curve = null;

  if (parentwidth > 768) {
    curve = two_obj.makeCurve(
      parentwidth / 2.25,
      sun.offsetTop + sun.offsetHeight / 2,

      parentwidth / 2,
      parentheight / 8.5,

      box1.offsetLeft,
      box1.offsetTop,

      true
    );
  }

  curve.linewidth = 1.75;
  curve.noFill();
  curve.stroke = 'white';

  orb = two_obj.makeCircle(0, 0, 12);
  orb.fill = 'rgb(255, 255, 255)';
  orb.noStroke();

  curve.getPointAt(pct, orb.translation);
  orb.translation.addSelf(curve.translation);

  two_obj.update();
}

// helper

function getElementComputedValue(el, what) {
  return parseInt(
    window
      .getComputedStyle(document.querySelector(el), "")
      .getPropertyValue(what),
    10
  );
}
