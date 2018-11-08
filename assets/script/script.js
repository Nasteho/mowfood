function initMap() {

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
}

$(document).ready(function(){
    $("#retterbtn").click(function(){
        $("#retter").hide();
    });
});
