var original = "../assets/images/mowfoodlogosort.png";
var scroll = "../assets/images/mowfoodlogo.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 70)
      $(".logo").attr("src", scroll);
   else
      $(".logo").attr("src", original);
});
