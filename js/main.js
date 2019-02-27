    $(document).ready(function()  {

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
