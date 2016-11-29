        var map, pos, zeCircleNotFound, zeCircle, zeCircleMe, zosCircles = [];
        var verdun = {lat: 49.1588, lng: 5.38733 };
        var home = {lat: 49.1587, lng: 5.39053 };
        var zeRadius = 200;
        var redCircles = 0;
        var found = document.querySelector("#pokefound");
        var lost = document.querySelector("#pokelost");
        var reset = document.querySelector("#pokereset");
        

        ///////////// START CIRCLES ////// 
        function pokemonfound(position) {
            if (zeCircle != null) {
                zeCircle.setMap(null);
                zeCircle = null;
            }
            zeCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.5,
              strokeWeight: 5,
              fillColor: 'green',
              fillOpacity: 0.2,
              map: map,
              center: position,
              radius: zeRadius
            });
            zosCircles.push(zeCircle);
            
            if (zeCircleMe != null) {
                zeCircleMe.setMap(null);
                zeCircleMe = null;
            }
            zeCircleMe = new google.maps.Circle({
              strokeColor: 'green',
              strokeOpacity: 0.5,
              strokeWeight: 5,
              fillColor: '#FF0000',
              fillOpacity: 0.3,
              map: map,
              center: position,
              radius: zeRadius - 161
            });
            zosCircles.push(zeCircleMe);
        }    
            
        function pokemonlost(position) {
            if (redCircles < 2) {
            zeCircleNotFound = new google.maps.Circle({
              strokeColor: 'green',
              strokeOpacity: 0.5,
              strokeWeight: 5,
              fillColor: '#FF0000',
              fillOpacity: 0.3,
              map: map,
              center: position,
              radius: zeRadius
            });
            zosCircles.push(zeCircleNotFound);
            redCircles++;
            }
            else {
                return 0;
            }
        }
        ///////////// END CIRCLES ////// 
            
        ///////////////// RESET CIRCLES //////////////////////
        function pokemonreset(circles) {
            for (var circle of circles) { 
            circle.setMap(null);
            circle = null;
            }
            zosCircles = [];
        }
        ///////////////// END RESET CIRCLES //////////////////////
        
        function initMap() {
            var mapOptions = {
            zoom:17,
            center: verdun, 
            disableDefaultUI: true,
            zoomControl: true
            }
            map = new google.maps.Map(document.getElementById("map"),
               mapOptions);
               
            /////////////START GEOLOCALISATION////// 
             if (navigator.geolocation && false) {
                 navigator.geolocation.getCurrentPosition(function (position) {
                 var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                 };
                map.setCenter(pos);
                });

            }
            ///////////// END GEOLOCALISATION////// 

            ///////////// START MARQUEUR POSITION INITIALE////// 
            //var image = 'images/iconemogoradar.png'
            var marker = new google.maps.Marker({
                position: verdun,
                map: map,
                draggable: true
                //icon: image
            });
            ///////////// END MARQUEUR POSITION INITIALE////// 
            google.maps.event.addDomListener(found, 'click', function() {
                pokemonfound(marker.position);
            });
            google.maps.event.addDomListener(lost, 'click', function() {
                pokemonlost(marker.position);
            });
            google.maps.event.addDomListener(reset, 'click', function() {
                pokemonreset(zosCircles);
            });
        }
        
