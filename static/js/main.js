const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".slideshow");
const slideshow = document.getElementsByClassName('.slider1');
const slider1 = document.querySelector(".slider1");
let width = slider1.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
  width1 = carousel.offsetWidth;
  
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  for(i=0; i<=slideshow.length-1; i++){
    i.style.transform = "translateX(" + index * -width + "px)"; 
  }
  if (slider1.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  slider1.style.transform = "translateX(" + index * -width + "px)";
});



// var refreshId;
// var restartAnimation = function() {
//     clearInterval(refreshId);
//     refreshId = setInterval( function() 
//     {    
//         $('.slider1').each(function() {
//             if ($(this).offset().left < 0) {
//                 $(this).css("left", "120%");
//             } else if ($(this).offset().left > $('.slideshow').width()) {
//                 $(this).animate({
//                     left: '20%'
//                 }, 500 );
//             } else {
//                 $(this).animate({
//                     left: '-150%'
//                 }, 500 );
//             }
//         });
//     },1000);
// }

// restartAnimation()
// console.log('hello')
