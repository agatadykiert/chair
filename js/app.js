document.addEventListener("DOMContentLoaded", function() {
//zad. 1
var menu = document.querySelector('.menu');
var menu1 = menu.firstElementChild;
var hidden = document.querySelector('.fold');

menu1.addEventListener('mouseover', function() {
  hidden.style.display = 'block';
})
menu1.addEventListener('mouseout', function() {
  hidden.style.display = 'none';
})
//zad.2
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
//zad.3
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
//drop-down
var listArrow = document.querySelectorAll('.form .drop_down_list .list_arrow');
var click = 0;

  listArrow[0].addEventListener('click', function(){
      click ++;
      if(click%2 == 0){
        this.nextElementSibling.style.display = 'none';
    } else {
        this.nextElementSibling.style.display = 'block';
    }
  })
  listArrow[1].addEventListener('click', function(){
      click ++;
      if(click%2 == 0){
        this.nextElementSibling.style.display = 'none';
    } else {
        this.nextElementSibling.style.display = 'block';
    }
  })
  listArrow[2].addEventListener('click', function(){
      click ++;
      if(click%2 == 0){
        this.nextElementSibling.style.display = 'none';
    } else {
        this.nextElementSibling.style.display = 'block';
    }
  })

var options = document.querySelectorAll('.form li');
var title = document.querySelector('.title');
var titleValue = document.querySelectorAll('h4');
var color = document.querySelector('.color');
var colorValue = document.querySelector('div.panel_right span.color.value');
var pattern = document.querySelector('.pattern');
var patternValue = document.querySelector('div.panel_right span.pattern.value');
var input = document.querySelector('input');
var transport = document.querySelector('.transport');
var transportValue = document.querySelector('div.panel_right span.transport.value');
var strong = document.querySelector('strong');
var suma = 0;

  options[0].addEventListener('click', function() {
        title.innerText = options[0].innerText;
        titleValue[1].innerText = '500';
        suma = 500;
        strong.innerText = suma;
  })
  options[1].addEventListener('click', function() {
        title.innerText = options[1].innerText;
        titleValue[1].innerText = '600';
        suma = 600;
        strong.innerText = suma;
  })
  options[2].addEventListener('click', function() {
        title.innerText = options[2].innerText;
        titleValue[1].innerText = '700';
        suma = 700;
        strong.innerText = suma;
  })
  options[3].addEventListener('click', function() {
        color.innerText = options[3].innerText;
        colorValue.innerText = '0';
  })
  options[4].addEventListener('click', function() {
        color.innerText = options[4].innerText;
        colorValue.innerText = '0';
  })
  options[5].addEventListener('click', function() {
        color.innerText = options[5].innerText;
        colorValue.innerText = '0';
  })
  options[6].addEventListener('click', function() {
        pattern.innerText = options[6].innerText;
        patternValue.innerText = '0';
  })
  options[7].addEventListener('click', function() {
        pattern.innerText = options[7].innerText;
        patternValue.innerText = '500';
        suma += 500;
        strong.innerText = suma;
  })
  input.addEventListener('click', function() {
    input.classList.toggle('active');
      if(input.className == 'active') {
          transport.innerText = 'Transport';
          transportValue.innerText = '80';
          suma += 80;
          strong.innerText = suma;
        } else {
          transport.innerText = '';
          transportValue.innerText = '';
          suma -= 80;
          strong.innerText = suma;
        }
  })
});
