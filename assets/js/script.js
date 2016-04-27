$(document).ready(function() {

  // QUESTION 6
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $('body').removeClass("button-active");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  })
 
  // QUESTION 7

  $(".page-wrapper").click(function() {
      if ($(".sidebar-container").hasClass("sidebar-active")) {
        $('body').removeClass("button-active");
        $("#sidebar-button").removeClass("button-active");
        $(".sidebar-container").removeClass("sidebar-active");
        $(".page-wrapper").removeClass("wrapper-active");
      }
  });

  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
    $("#carousel-next").click(function() {
      var currMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (currMargin == -3840) {
        return false
      } else {
        var newMargin = currMargin - 960;
        $('#carousel').css('margin-left', newMargin);
      }
   });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
    $("#carousel-prev").click(function() {
      var currMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (currMargin == 0) {
        return false
      } else {
        var newMargin = currMargin + 960;
        $('#carousel').css('margin-left', newMargin);
      }
   });


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});