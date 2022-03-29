const slideshow = document.getElementsByClassName('slideshow')[0];
const item = document.getElementsByClassName('slider1');

function next(){
    slideshow.append(item[0]);
}

function prev(){
    slideshow.prepend(item[item.length-1]);
}
  




/*global $,jQuery,console,window*/
// (function ($) {
//     "use strict";
//     var slideshow = (function () {
//         var counter = 0,
//             i,
//             j,
//             slides =  $(".slideshow .slider1"),
//             slidesLen = slides.length - 1;
//         for (i = 0, j = 9999; i < slides.length; i += 1, j -= 1) {
//             $(slides[i]).css("z-index", j);
//         }
//         return {
//             startSlideshow: function () {
//                 window.setInterval(function () {
//                     if (counter === 0) {
//                         slides.eq(counter).fadeOut();
//                         counter += 1;
//                     } else if (counter === slidesLen) {
//                         counter = 0;
//                         slides.eq(counter).fadeIn(function () {
//                             slides.fadeIn();
//                         });
//                     } else {
//                         slides.eq(counter).fadeOut();
//                         counter += 1;
//                     }
//                 }, 2000);
//             }
//         };
//     }());
//     slideshow.startSlideshow();
// }(jQuery));