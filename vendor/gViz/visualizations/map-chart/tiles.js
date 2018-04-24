gViz.vis.map.tiles = function() {
  "use strict";

  // Get attributes values
  var _var = undefined;

  // Main function
  var main = function main(step) {

    switch (step) {
      // Build entire visualizations
      case 'run':

        // Define tiles array
        _var.tiles = {
        "default":  L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"),
        "carto-light":  L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"),
        "carto-dark":   L.tileLayer("http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"),
        "wikimedia":    L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"),
      }

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

  // Execute the specific called function
  main.run = function (_) {
    return main('run');
  };

  return main;
};
