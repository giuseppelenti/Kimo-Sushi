// JavaScript Document

var map;
  function initMap() {
	map = new google.maps.Map(document.getElementById('where'), {
		//setto latitudine e longitudine del centro della mappa
		center: {lat: 38.711946, lng: -9.1435017},
		//setto il livello di zoom (1 = min - 21 = max)
		zoom: 15,
		//disabilito lo zoom mediante la rotellina del mouse
		scrollwheel: false,
		//////////////// styles inizio ////////////////
		styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
		///////////// .styles fine //////////////////
	});
	//contenuti della finestra info
	 var contentString = '<div id="content">'+
			'<div class="colonne">' +
            '<div class="col-sx"><img src="assets/immagini/trends-people.jpg" /></div>'+
			'<div class="col-dx">'+
            '<h2 class="markerTitle">Trends people</h2>'+
            '<p><b>Trends people</b>, è un locale in cui puoi incontrare persone di tendenza e, naturalmente, gustare un eccezionale boccale di birra.</p>'+
            '<p><a href="#">guarda il menù</a></p>'+
            '</div>'+
            '</div>'+
            '</div>';
	  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
	  
	var marker = new google.maps.Marker({
		  //latitudine e longitudine del marker (centro della mappa)
          position: {lat: 38.709, lng: -9.1435017},
		  //mappa su cui viene posizionato il marker
          map: map,
		  //titolo del marker
          title: 'Hello World!',
		  //icona custom
		  icon: "assets/css/googlemap-marker.png"
        });
	marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  }