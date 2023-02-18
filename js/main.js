// use strict
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

//  

  $('.top-slider__inner').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 5L7.99988 12L14.9999 19" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> </button>',
    nextArrow: '<button type="button" class="slick-next"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00012 5L16.0001 12L9.00012 19" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> </button>',
  }); 


 //  
 var mixer = mixitup('.products__inner');
  

 //
  $(function () {
    $(".products-star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true
    });
   })
