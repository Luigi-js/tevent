var mykey = config.MY_KEY;

var CITIES = {
  london: {
    lat: 51.508530,
    lng: -0.076132
  },
  madrid: {
    lat: 40.416775,
    lng: -3.703790
  },
  rome: {
    lat: 41.902782,
    lng: 12.496365
  }
};

/*
// Add marker
var marker = new google.maps.Marker({
  position:{lat:51.5667,lng:-0.0333},
  map:map
});

var infoWindow = new google.maps.InfoWindow({
  content:'<h1>Wanstead Barrio</h1>'
});

marker.addListener('click', function(){
  infoWindow.open(map, marker);
});
*/

//Array of markers
var markers = [{
    coords: {
      lat: 51.5667,
      lng: -0.0333
    },
    content: '<h6>Irish music with violin</h6>'
  },
  {
    coords: {
      lat: 51.376495,
      lng: -0.100594
    },
    content: '<h6>Authentic English songs</h6>'
  },
  {
    coords: {
      lat: 51.656489,
      lng: -0.39032
    },
    content: '<h6>Jazz music in my home</h6>'
  },
  {
    coords: {
      lat: 51.48619,
      lng: -0.3083
    },
    content: '<h6>Little Rock concert in my garage</h6>'
  },
  {
    coords: {
      lat: 51.502361,
      lng: -0.191757
    },
    content: '<h6>Live portrait with a selection of English cakes</h6>'
  },
  {
    coords: {
      lat: 51.559143,
      lng: -0.119820
    },
    content: '<h6>Let me introduce you to poetry</h6>'
  },
  {
    coords: {
      lat: 40.473673,
      lng: -3.696656
    },
    content: '<h6>Listen my own music with a glass of wine</h6>'
  },
  {
    coords: {
      lat: 40.435009,
      lng: -3.620456
    },
    content: '<h6>Performance of classic soprano</h6>'
  },
  {
    coords: {
      lat: 40.379064,
      lng: -3.603983
    },
    content: '<h6>Little artistic ceramic creations</h6>'
  },
  {
    coords: {
      lat: 40.347673,
      lng: -3.701444
    },
    content: '<h6>Artistic cakes</h6>'
  },
  {
    coords: {
      lat: 40.379064,
      lng: -3.767334
    },
    content: '<h6>Wood objects</h6>'
  },
  {
    coords: {
      lat: 40.425078,
      lng: -3.691149
    },
    content: '<h6>Live flamenco concert in my dining room</h6>'
  },
  {
    coords: {
      lat: 41.852765,
      lng: 12.567272
    },
    content: '<h6>How to cook an artistic dinner</h6>'
  },
  {
    coords: {
      lat: 41.821558,
      lng: 12.472557
    },
    content: '<h6>Handmade jewelry in my garage</h6>'
  },
  {
    coords: {
      lat: 41.914621,
      lng: 12.559036
    },
    content: '<h6>Best selection of italian songs</h6>'
  },
  {
    coords: {
      lat: 41.869641,
      lng: 12.462948
    },
    content: '<h6>Artistic draws in the sand</h6>'
  },
  {
    coords: {
      lat: 41.936078,
      lng: 12.469125
    },
    content: '<h6>Let\'s do art with candles</h6>'
  },
  {
    coords: {
      lat: 41.903379,
      lng: 12.502069
    },
    content: '<h6>Paint your dishes!</h6>'
  },
];

function initMap() {
  // Map options
  var options = {
    zoom: 10,
    center: {
      lat: 51.508530,
      lng: -0.076132
    }
  };

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Add Marker Function
  function addMarker(props) {
    // Add marker
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }
  }

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  $('#inputCity').on('keyup', function(e) {
    var cityArtist = e.target.value.toLowerCase();
    if (CITIES[cityArtist]) {
      map.setCenter(CITIES[cityArtist]);
      call(cityArtist);
      $('#hiddenContainer').removeClass('cardPlusMap').addClass('cardPlusMap2');
    }

  });
}

function call(search) {
  //Get data of artists from json files on github
  $.getJSON("https://luigi-js.github.io/artistData/" + search + ".json", function(data) {
      var userArtist = '';
      $.each(data, function(key, value) {
        userArtist += '<div class="card">';
        userArtist += '<div class="artistImage" style="background-image: url(' + value.img + ');">';
        userArtist += '</div>';
        userArtist += '<div class="card-body">';
        userArtist += '<h5 class="card-title">' + value.artType + '</h5>';
        userArtist += '<p class="card-text">' + 'Created by ' + value.name + '</p>';
        userArtist += '<p class="card-text" style="float:left;">' + value.city + '</p>';
        userArtist += '<p class="card-text text-right">' + value.price + '</p>';
        userArtist += '<p class="card-text text-right">' + '<i class="fas fa-users fa-1x"></i> ' + value.numberPeople + '</p>';
        userArtist += '</div>';
        userArtist += '</div>';
      });
      $('#groupCards').prepend().html(userArtist);
  });
}

/*$('#inputCity').on('keyup', function(e) {
  var cityArtist = e.target.value.toLowerCase();
});*/
