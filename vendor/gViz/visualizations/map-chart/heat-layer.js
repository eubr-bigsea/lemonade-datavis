// Initialize the visualization class
gViz.vis.map.heatLayer = function () {
  "use strict";

  // Get attributes values
  var _var = undefined;

  // Main function
  var main = function (step) {

      switch (step) {

        case 'run':

          var points = _var.data.data.map(function(d) { return [d["lat"], d["lon"]]; });
          var topRight    = { "lat": -999, "lon": -999  };
          var bottomLeft  = { "lat": 999, "lon": 999  };

          points.forEach(function(point)  {
            if(point[0] > topRight["lat"]) { topRight["lat"] = point[0];  }
            if(point[1] > topRight["lon"]) { topRight["lon"] = point[1];  }

            if(point[0] < bottomLeft["lat"]) { bottomLeft["lat"] = point[0];  }
            if(point[1] < bottomLeft["lon"]) { bottomLeft["lon"] = point[1];  }
          });

          _var.dataBounds = L.latLngBounds(topRight, bottomLeft);

          if(_var.mode.heatmap) {
            // Initialize scale
            _var.heatScale = d3.scaleLinear().range(_var.heatColors);

            // Initialize hash values
            _var.heatData = {}

            // Define aux variables
            var min = null,
              max = null,
              diff = null;

            // Get bounds
            var data = _var.data.data;

            data.forEach(function(d) {

              // Store heat data for faster use
              _var.heatData[d.id] = d;

              // Set domain from values
              if(min == null || min > +d.value) { min = +d.value; }
              if(max == null || max < +d.value) { max = +d.value; }

            });

            // Check for default values
            if(!min) { min = 0; }
            if(!max) { max = 1; }

            // Get diff
            var diff = Math.abs(max - min) === 0 ? Math.abs(max * 0.1) : Math.abs(max - min) * 0.05;

            var ticks = _var.heatColors.length - 1;
            var interval = (max - min)/ticks;

            _var.heatBounds = [min];
            var current = min;

            while(current < max) {
              current += interval;
              _var.heatBounds.push(current);
            }

            _var.heatScale.domain(_var.heatBounds);

            // Creates layer if it does not exist
            if(!_var.heatLayer) {
              _var.heatLayer = L.featureGroup().addTo(_var.map);
            }

            _var.heatLayer.clearLayers();

            var gradient = {
              0.0: _var.heatScale(0.0),
              0.1: _var.heatScale(0.1),
              0.2: _var.heatScale(0.2),
              0.3: _var.heatScale(0.3),
              0.4: _var.heatScale(0.4),
              0.5: _var.heatScale(0.5),
              0.6: _var.heatScale(0.6),
              0.7: _var.heatScale(0.7),
              0.8: _var.heatScale(0.8),
              0.9: _var.heatScale(0.9),
              1.0: _var.heatScale(1.0),
            };

            _var.heat = L.heatLayer(points, {
              // gradient: gradient,
              // minOpacity: 0.25,
            });

            _var.heatLayer.addLayer(_var.heat);
          }

          else if(_var.mode.points) {
            if(!_var.pointsLayer) {
              _var.pointsLayer = L.featureGroup().addTo(_var.map);
            }

            _var.pointsLayer.clearLayers();

            //var tooltip = _var.data.tooltip ?

            _var.data.data.forEach(function(point) {
              var tooltip = point.name;
              var marker = L.marker(point);

              if(tooltip) { marker.bindPopup(tooltip); }

              marker.addTo(_var.pointsLayer);
            });
          }

          _var.map.fitBounds(_var.dataBounds);

          break;
    }

    return _var;
  };

  // Exposicao de variaveis globais
  ['_var'].forEach(function (key) {
    // Attach variables to main function
    return main[key] = function (_) {
      if (!arguments.length) {
        eval('return ' + key);
      }
      eval(key + ' = _');
      return main;
    };
  });

  // Executa a funcao chamando o parametro de step
  main.run = function (_) {
    return main('run');
  };

  return main;
};
