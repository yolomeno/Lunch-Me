

var distance = require('google-distance');
distance.apiKey = 'AIzaSyCCAH25S435Tvu2oVX4KW7fGvSZg4EOd6M';
var zomato = require('zomato');
var geocode = require('google-geocode');
geocode.setApiKey('AIzaSyBlfREnpaS6btRbcuWrKDJQudacfPBf7SI'); 



var oLon;
var oLat;



 
// distance.get(
// {
//   index: 1,
//   origin: '37.772886,-122.423771',
//   destination: '37.871601,-122.269104'
// },
// function(err, data) {
//   if (err) return console.log(err);
//   console.log(data);
// });



// geocode.getGeocode('Berlin', function(data) { console.log("data " + data); }, function(err) { console.log("error " + err); });



var googleMapsClient = require('@google/maps').createClient({
  key: "AIzaSyCicRPM6zzE6VFEw7iN4ScfF_VVSppnBlQ"
});

function geocoder(address) {
    googleMapsClient.geocode({
  address: address
}, function(err, response) {
  if (!err) {
    console.log(response.json.results[0].geometry.location);
    var oLat = response.json.results[0].geometry.location.lat;
    var oLon = response.json.results[0].geometry.location.lng;


  }
})
}
geocoder("339 E. Chicago Ave, Chicago, IL 60611");


function distances(oLat, oLon, destLat, destLon){googleMapsClient.distanceMatrix({
      origins: [
        oLat,oLon
        ],
      destinations: [
        destLat,destLon
      ]
    }, function(err, response) {
  if (!err) {
    console.log(response.json.rows[0].elements[0].distance.text);
  }
    })
};


// TURN BY TURN directions
    function directions(oLat, oLon, destLat, destLon){googleMapsClient.directions({
      origin: [
      oLat,oLon
        ],
      destination: [
        destLat,destLon
      ]
    }, function(err, response) {
  if (!err) {
    response.json.routes[0].legs[0].steps.forEach(function(element) {
       console.log(element.html_instructions) 
    } );

  }
    })
};
