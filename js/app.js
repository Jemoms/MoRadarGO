        var map;
        var verdun = {lat: 49.1588, lng: 5.38733 };
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
            var zeCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: verdun,
              radius: 200
            });
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

    detectBrowser();