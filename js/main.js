/// <reference path="../typings/globals/jquery/index.d.ts" />

let zoom=document.getElementsByClassName('zoom');
let imageSelected=document.getElementsByClassName('imageSelected');
let close=document.getElementsByClassName('close');
let confirmPayment=document.getElementsByClassName('confirmPayment');



  zoom[0]?.addEventListener("click",function(){
    imageSelected[0].style.cssText="display:flex !important"
  })



  close[0]?.addEventListener("click",function(){
    imageSelected[0].style.cssText="display:none !important"
  })


confirmPayment[0]?.addEventListener("click",function(){
   imageSelected[0].style.cssText="display:flex !important"

})


// swiper in parent says section
var swiper = new Swiper(".parentSlides", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints:{
    //     0:{
    //         slidesPerView:1
    //     },
    //     520:{
    //         slidesPerView:2
    //     }
    // }
  });