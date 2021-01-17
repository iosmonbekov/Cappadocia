let sliderIndex = 0;
let sliderIndex2 = 0;

const slides = document.getElementsByClassName("slider_item");
const slides2 = document.getElementsByClassName("slider__item");
const next = document.getElementsByClassName("next");
const prev = document.getElementsByClassName("prev");

next[0].onclick = add;
prev[0].onclick = sub;
next[1].onclick = add2;
prev[1].onclick = sub2;
showSlide(sliderIndex);
showSlide2(sliderIndex2);

function showSlide(num) {
  if (num < 0) num = sliderIndex = slides.length - 1;
  if (num > slides.length - 1) num = sliderIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    if (i === num) {
      slides[num].style.display = "block";
    }
  }
}
function showSlide2(num) {
  {
    if (num < 0) num = sliderIndex2 = slides2.length - 1;
    if (num > slides2.length - 1) num = sliderIndex2 = 0;
    for (let i = 0; i < slides2.length; i++) {
      if (i === num) {
        slides2[num].style.display = "block";
      }
    }
  }
}
function add() {
  slides[sliderIndex].style.display = "none";
  showSlide(++sliderIndex);
}
function sub() {
  slides[sliderIndex].style.display = "none";
  showSlide(--sliderIndex);
}
function add2() {
  slides2[sliderIndex2].style.display = "none";
  showSlide2(++sliderIndex2);
}
function sub2() {
  slides2[sliderIndex2].style.display = "none";
  showSlide2(--sliderIndex2);
}
