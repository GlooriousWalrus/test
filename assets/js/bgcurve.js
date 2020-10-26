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


function onImgLoad() {
 loadedImgCount++;

   if (loadedImgCount === 4) {

   }

}


function onImgLoad() {
  loadedImgCount++;

    if (loadedImgCount === 4) {
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', moveball);
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
  const parentwidth = document.querySelector('.centralizer').offsetWidth;
  const parentheight = getElementComputedValue('.centralizer', 'height');
  curve.remove();
  orb.remove();
  two_obj.height = parentheight;
  two_obj.width = parentwidth;
  createCurve();
  two_obj.update();
}

function init() {
  const parentwidth = this.getElementComputedValue('.centralizer', 'width');
  const parentheight = this.getElementComputedValue('.centralizer', 'height');
  const elem = document.querySelector('#curvething');

  two_obj = new Two({
    type: Two.Types.webgl,
    height: parentheight,
    width: parentwidth,
  }).appendTo(elem);

  createCurve();
}

function createCurve() {
  const parentwidth = this.getElementComputedValue('.centralizer', 'width');
  const parentheight = this.getElementComputedValue('.centralizer', 'height');

  const text1 = document.querySelector('.text1');

  const sun = document.querySelector('.sun');
  const sunheight = sun.clientHeight;
  const sunmargintop = parseInt(
    window.getComputedStyle(sun, null).getPropertyValue('margin-top'),
    10
  );
  const sunmarginbottom = parseInt(
    window.getComputedStyle(sun, null).getPropertyValue('margin-bottom'),
    10
  );
  const suntotal = sunheight + sunmargintop + sunmarginbottom;

  const nanoyeast = document.querySelector('.nanoyeast');
  const discoyeast = document.querySelector('.discoyeast');
  const lipid = document.querySelector('.lipid');
  const lipid2 = document.querySelector('.lipid2');

  const text2 = document.querySelector('.text2');
  const text3 = document.querySelector('.text3');

  if (parentwidth < 768) {
    curve = two_obj.makeCurve(
      sun.offsetLeft + sun.offsetWidth / 2,
      sun.offsetTop + sun.offsetHeight / 2,

      parentwidth / 1.95,
      suntotal,

      text1.offsetLeft + text1.offsetWidth * 0.8,
      text1.offsetTop,

      text1.offsetLeft + text1.offsetWidth * 0.8,
      text1.offsetTop + text1.offsetHeight,

      parentwidth / 2,
      nanoyeast.offsetTop + nanoyeast.offsetHeight / 2.75,

      parentwidth / 2.4,
      nanoyeast.offsetTop + nanoyeast.offsetHeight,

      text2.offsetWidth * 0.15,
      text2.offsetTop * 1.05,

      text2.offsetWidth * 0.1,
      text2.offsetTop + text2.offsetHeight / 2,

      text2.offsetWidth * 0.2,
      text2.offsetTop + text2.offsetHeight,

      discoyeast.offsetLeft + discoyeast.offsetWidth / 2,
      discoyeast.offsetTop + discoyeast.offsetHeight / 2,

      lipid.offsetLeft + lipid.offsetWidth / 2,
      lipid.offsetTop + lipid.offsetHeight / 2,

      text3.offsetLeft + text3.offsetWidth * 0.2,
      text3.offsetTop,

      text3.offsetLeft + text3.offsetWidth * 0.15,
      text3.offsetTop + text3.offsetHeight / 2,

      text3.offsetLeft + text3.offsetWidth * 0.2,
      text3.offsetTop + text3.offsetHeight,

      parentwidth / 2,
      parentheight,

      true
    );
  } else {
    // bigger than 768
    curve = two_obj.makeCurve(
      parentwidth / 2,
      sun.offsetTop + sun.offsetHeight / 2,

      parentwidth / 1.85,
      suntotal,

      parentwidth / 1.1,
      nanoyeast.offsetTop * 1.3,

      parentwidth / 1.05,
      nanoyeast.offsetTop + nanoyeast.offsetHeight,

      parentwidth / 2,
      nanoyeast.offsetTop + nanoyeast.offsetHeight * 1.2,

      parentwidth / 3.5,
      discoyeast.offsetTop + discoyeast.offsetHeight / 2,

      parentwidth / 5,
      discoyeast.offsetTop + discoyeast.offsetHeight * 1.5,

      parentwidth / 2.35,
      lipid.offsetTop + lipid.offsetHeight / 2,

      parentwidth / 1.5,
      lipid2.offsetTop + lipid2.offsetHeight / 2,

      parentwidth / 1.75,
      lipid2.offsetTop + lipid2.offsetHeight,

      parentwidth / 2,
      parentheight * 0.98,

      parentwidth / 2,
      parentheight,

      true
    );
  }

  curve.linewidth = 3;
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
      .getComputedStyle(document.querySelector(el), null)
      .getPropertyValue(what),
    10
  );
}
