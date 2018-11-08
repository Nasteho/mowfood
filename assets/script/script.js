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
