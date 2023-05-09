function initMap() {
<<<<<<< HEAD
  var uluru = { lat: -25.363, lng: 131.044 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
=======
    var myLatLng = {lat: 50.66406, lng: 3.18023};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Ma position'
    });
  }
  
  initMap();
>>>>>>> 8a71bc65fd825531bf1c5d624564bd5d081638e9
