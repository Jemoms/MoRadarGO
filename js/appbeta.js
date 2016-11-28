        var map;
        var verdun = {lat: 49.1588, lng: 5.38733 };
        var home = {lat: 49.1587, lng: 5.39053 };
        var zeRadius = 201;
        function initMap() {
            var mapOptions = {
            zoom:17,
            maxZoom: 18,
            minZoom: 16,
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
            
            ///////////// START CIRCLE ////// 
            var zeCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.5,
              strokeWeight: 5,
              fillColor: 'green',
              fillOpacity: 0,
              map: map,
              center: marker.position,
              radius: zeRadius,
            });
            
            var zeCircleMe = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 1,
              strokeWeight: 0,
              fillColor: '#FF0000',
              fillOpacity: 1,
              map: map,
              center: marker.position,
              radius: zeRadius - 161,
            });
            
            for (var i = 5; i <= 305; i = i + 5) {

                var zeCible = new google.maps.Circle({
                  strokeColor: '#FF0000',
                  strokeOpacity: 1,
                  strokeWeight: 9,
                  fillColor: '',
                  fillOpacity: 0,
                  map: map,
                  center: marker.position,
                  radius: (zeRadius + i)
                });
                
            }
            var zeCircleNotFound = new google.maps.Circle({
              strokeColor: 'green',
              strokeOpacity: 0.5,
              strokeWeight: 20,
              fillColor: '#FF0000',
              fillOpacity: 1,
              map: map,
              center: verdun2,
              radius: zeRadius,
            });
    
            ///////////// END CIRCLE ////// 
        }
        