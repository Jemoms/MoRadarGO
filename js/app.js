        var map;
        var verdun = {lat: 49.1588, lng: 5.38733 };
        var verdun2 = {lat: 49.158, lng: 5.387 };
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
            
            ///////////// START CIRCLE ////// 
            var zeCircle = new google.maps.Circle({
              strokeColor: 'green',
              strokeOpacity: 0.5,
              strokeWeight: 2,
              fillColor: 'green',
              fillOpacity: 0.2,
              map: map,
              center: marker.position,
              radius: 200
            });
            var zeCircle2 = new google.maps.Circle({
              strokeColor: 'red',
              strokeOpacity: 0.5,
              strokeWeight: 2,
              fillColor: 'red',
              fillOpacity: 0.3,
              map: map,
              center: verdun2,
              radius: 200
            });
            ///////////// END CIRCLE ////// 
        }
        
        function detectBrowser() {
          var useragent = navigator.userAgent;
          var mapdiv = document.getElementById("map");
        
          if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
            mapdiv.style.width = '100%';
            mapdiv.style.height = '100%';
          } else {
            mapdiv.style.width = '600px';
            mapdiv.style.height = '800px';
          }
        }

    //detectBrowser();