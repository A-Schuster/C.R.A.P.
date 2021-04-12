$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() < $("#green").height()){
         $(".navbar").removeClass("bg-dark");
      }
      else{
         $(".navbar").addClass("bg-dark");
      }
    });
  });

  $(window).scroll(function(e) {

   // add/remove class to navbar when scrolling to hide/show
   var scroll = $(window).scrollTop();
   if (scroll >= 150) {
       $('.navbar').addClass("navbar-hide");
   } else {
       $('.navbar').removeClass("navbar-hide");
   }

});