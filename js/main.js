    $(document).ready(function()  {
      $.getJSON("data/changepop.json")
                .done(function(data) {
                        var info = processData(data);
    function processData(data) {
            var timestamps = [];
            var min = Infinity
            var max = -Infinity

            for (var feature in data.features) {
              var properties = data.features[feature].properties
              if ( attribute != ‘id’ &&
				  attribute != ‘name’ &&
				  attribute != ‘lat’ &&
				  attribute != ‘lon’ ) {

					if ( $.inArray(attribute,timestamps) === -1) {
						timestamps.push(attribute);
					}
					if (properties[attribute] < min) {
						min = properties[attribute];
					}

					if (properties[attribute] > max) {
						max = properties[attribute];
					}
				}
			}
      		}

		return {
			timestamps : timestamps,
			min : min,
			max : max

    	function createLegend(min, max) {

		if (min < 10) {
			min = 10; 
		}

		function roundNumber(inNumber) {

				return (Math.round(inNumber/10) * 10);
		}

		var legend = L.control( { position: ‘bottomright’ } );3
		legend.onAdd = function(map) {

		var legendContainer = L.DomUtil.create(“div”, “legend”);
		var symbolsContainer = L.DomUtil.create(“div”, “symbolsContainer”);
		var classes = [roundNumber(min), roundNumber((max-min)/2), roundNumber(max)];
		var legendCircle;
		var lastRadius = 0;
		var currentRadius;
		var margin;

		L.DomEvent.addListener(legendContainer, ‘mousedown’, function(e) {
			L.DomEvent.stopPropagation(e);
		});
		$(legendContainer).append(“<h2 id=’legendTitle’># of somethings</h2>”);

		for (var i = 0; i <= classes.length-1; i++) {

			legendCircle = L.DomUtil.create(“div”, “legendCircle”);

			currentRadius = calcPropRadius(classes[i]);

			margin = -currentRadius - lastRadius - 2;

			$(legendCircle).attr(“style”, “width: “ + currentRadius*2 +
				“px; height: “ + currentRadius*2 +
				“px; margin-left: “ + margin + “px” );
			$(legendCircle).append(“<span class=’legendValue’>”+classes[i]+”</span>”);

			$(symbolsContainer).append(legendCircle);

			lastRadius = currentRadius;

		}

		$(legendContainer).append(symbolsContainer);

		return legendContainer;

		};

		legend.addTo(map);

	} // end createLegend()
		}
	}
              })

              var cities;
              var map = L.map('map',  {
                      center:  [37.8, -96]
                      zoom: 4
                      minZoom: 4
              });

              L.tileLayer(
                ‘{s}.acetate.geoiq.com/tiles/acetate/{z}/{x}/{y}.png’, {
                        attribution: ‘Acetate tileset from GeoIQ’
                }).addTo(map);
    });
