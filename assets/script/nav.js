var initialSrc = "../assets/images/mowfoodlogosort.png";
var scrollSrc = "../assets/images/mowfoodlogo.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 70)
      $(".logo").attr("src", scrollSrc);
   else
      $(".logo").attr("src", initialSrc);
});
