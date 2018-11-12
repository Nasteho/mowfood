/*function initMap() {

  var uluru = {
    lat: 55.708681,
    lng: 9.536134
  };


  var map = new google.maps.Map(document.getElementById('googlemaps'), {
    zoom: 15,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

*/



$(window).on("scroll", function() {
    if($(window).scrollTop() > 70) {
        $("nav").addClass("backgroundcolor");
        $(".nav-link").addClass("navcolor");
        $(".navbar").addClass("navbar-dark");

    } else {
       $("nav").removeClass("backgroundcolor");
         $(".nav-link").removeClass("navcolor");
         $(".navbar").removeClass("navbar-dark");

    }
});

var initialSrc = "../mowfood/assets/images/mowfoodlogosort.png";
var scrollSrc = "../mowfood/assets/images/mowfoodlogo.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 70)
      $(".logo").attr("src", scrollSrc);
   else
      $(".logo").attr("src", initialSrc);
});

  $("#snacksbtn").click(function(){
    $("#snacks").show();
      $("#retter").hide();
      $("#desserter").hide();
      $("#vegetar").hide();

  });


  $("#vegetarbtn").click(function(){
      $("#retter").hide();
      $("#desserter").hide();
      $("#snacks").hide();
        $("#vegetar").show();
  });

  $("#retterbtn").click(function(){
    $("#retter").show();
      $("#vegetar").hide();
      $("#desserter").hide();
      $("#snacks").hide();
  });

  $("#desserterbtn").click(function(){
    $("#desserter").show();
      $("#vegetar").hide();
      $("#retter").hide();
      $("#snacks").hide();
  });


$(document).ready(function() {
    $("#vegetar").hide();
    $("#desserter").hide();
    $("#snacks").hide();
    $("#retter").show();
});

var userFeed = new Instafeed({
  get: 'user',
      userId: '7290506302',
      clientId: '		6f55e5fdb1bf479b81e49cd5109d2edf',
      accessToken: '7290506302.6f55e5f.7cd9333c923d4635b7de743970c86bf7',
      limit: '6',
      resolution: 'low_resolution',
      useHttp: true,


  });
  userFeed.run();
