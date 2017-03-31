document.addEventListener("DOMContentLoaded", function() {

var menu = document.querySelector('.menu');
var menu1 = menu.firstElementChild;
var hidden = document.querySelector('.fold');

menu1.addEventListener('mouseover', function() {
  hidden.style.display = 'block';
})
menu1.addEventListener('mouseout', function() {
  hidden.style.display = 'none';
})

var box1 = document.querySelector('.box1');
var clair = document.querySelectorAll('.clair');

box1.addEventListener('mouseover', function() {
  clair[0].style.display = 'none';
})
box1.addEventListener('mouseout', function() {
  clair[0].style.display = 'block';
})

var box2 = document.querySelector('.box2');
box2.addEventListener('mouseover', function() {
  clair[1].style.display = 'none';
})
box2.addEventListener('mouseout', function() {
  clair[1].style.display = 'block';
})

var markerLeft = document.querySelector('.marker');
var markerRight = document.querySelector('.marker2');
var sliderImg = document.querySelectorAll('.slider li');
var imgNumber = 0;

  sliderImg[0].classList.add('visible');

markerRight.addEventListener('click', function() {
  var prevNumber = imgNumber;
      imgNumber++;

      if (imgNumber < 0) {
        imgNumber = sliderImg.length - 1;
      } else if (imgNumber > sliderImg.length - 1) {
        imgNumber = 0;
      }
      sliderImg[prevNumber].classList.remove('visible');
      sliderImg[imgNumber].classList.add('visible');

})
markerLeft.addEventListener('click', function() {
  var prevNumber = imgNumber;
      imgNumber--;
      if (imgNumber < 0) {
          imgNumber = sliderImg.length - 1;
      } else if (imgNumber > sliderImg.length - 1) {
          imgNumber = 0;
      }
      sliderImg[prevNumber].classList.remove('visible');
      sliderImg[imgNumber].classList.add('visible');
})
});
