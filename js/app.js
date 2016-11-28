        var map;
        var verdun = {lat: 49.1588, lng: 5.38733 };
        var home = {lat: 49.1587, lng: 5.39053 };
        var zeRadius = 200;

            ///////////// START CIRCLES ////// 
        function pokemonfound() {
            var zeCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.5,
              strokeWeight: 5,
              fillColor: 'green',
              fillOpacity: 0.2,
              map: map,
              center: marker.position,
              radius: zeRadius
            });
            
            var zeCircleMe = new google.maps.Circle({
              strokeColor: 'green',
              strokeOpacity: 0.5,
              strokeWeight: 5,
              fillColor: '#FF0000',
              fillOpacity: 0.3,
              map: map,
              center: marker.position,
              radius: zeRadius - 161
            });
        }    
            
        function pokemonlost() {
            var zeCircleNotFound = new google.maps.Circle({
              strokeColor: 'green',
              strokeOpacity: 0.5,
              strokeWeight: 5,
              fillColor: '#FF0000',
              fillOpacity: 0.3,
              map: map,
              center: marker.position,
              radius: zeRadius
            });
        }
            ///////////// END CIRCLES ////// 
        
        
        function initMap() {
            var mapOptions = {
            zoom:17,
            center: verdun, 
            disableDefaultUI: true,
            zoomControl: true
            }
            var map = new google.maps.Map(document.getElementById("map"),
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
            var marker = new google.maps.Marker({
                position: verdun,
                map: map,
                draggable: true
            });
            ///////////// END MARQUEUR POSITION INITIALE////// 
            
        }
