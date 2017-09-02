

module.exports = function zomatoData(longitude, latitude, radius, restaurant) {
        var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + restaurant + "&count=5&lat=" + latitude + "&lon=" + longitude + "&radius=" + radius + "&sort=real_distance&order=asc";
        var globalLocations = []; 
        $.ajax({
            url: zomatoQueryURL,
            headers: {
                'user-key': 'b8910995d9facc1a087e4ef0101c4b60'
            },
            method: 'GET'
        }).done(function(data) {

            var restaurantListDiv = $('<div class="rInfoDiv">');
             if (data.restaurants.length > 0) {
            for (var i = 0; i < data.restaurants.length; i++) {
                var resLon = data.restaurants[i].restaurant.location.longitude;
                var resLat = data.restaurants[i].restaurant.location.latitude;
                var rInfoDiv = $('<div>');
                 var temp = [];
                for(var j=0; j < 4; j++){
                    if (j===0) {
                        temp.push(data.restaurants[i].restaurant.name)
                    } else if (j===1){
                        temp.push(+data.restaurants[i].restaurant.location.latitude)
                    } else if (j===2){
                        temp.push(+data.restaurants[i].restaurant.location.longitude)
                    } else {temp.push(i + 1)
                       }
                      }
                globalLocations.push(temp);
                  
                rInfoDiv.html(
                    "<input class='form-check-input' type='radio' name='restaurantRadio' data-required='true' data-parsley-error-message='Please Choose a Restaurant' required class='radioButton' value=" 
                    + i + ">" + "<div id='restaurantList'>" + data.restaurants[i].restaurant.name 
                    + "<br>" + data.restaurants[i].restaurant.location.address + "<br>" 
                    + data.restaurants[i].restaurant.location.city + data.restaurants[i].restaurant.location.latitude + data.restaurants[i].restaurant.location.longitude +"<br><br></div>");

                restaurantListDiv.append(rInfoDiv);
     
            };
             var btn = $('<button class="btn btn-warning" id="modalSubmit">Submit</button>');
            restaurantListDiv.append(btn);
            $("#restaurantContent").html(restaurantListDiv);}
  //new two line
            else {restaurantListDiv.html("No Results Found");
            $("#restaurantContent").html(restaurantListDiv);
        };
        });
         console.log(globalLocations);
         return globalLocations;
     }