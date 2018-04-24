// Initialize the visualization class
gViz.vis.map.renderMap = function () {
  "use strict";

  // Get attributes values
  var _var = undefined;

  // Main function
  var main = function (step) {
    switch (step) {

      // Build entire visualizations
      case 'run':
        // Removes events and map if it already exists
        if(_var.map) {
          _var.map.off();
          _var.map.remove();
        }

        // Creates Map
        _var.map = L.map(_var.mapWrapper.node(), {
          minZoom: 2 ,
          attributionControl: false,
          zoomControl: false,
        });

        _var.map.setView([0,0], 3);

        // Adds tiles to map
        _var.tiles[_var.tile].addTo(_var.map);

        break;
    }

    return _var;
  };

  // Exposicao de variaveis globais
  ['_var'].forEach(function (key) {
    // Attach variables to main function
    return main[key] = function (_) {
      if (!arguments.length) { eval(`return ${key}`); }
      eval(`${key} = _`);
      return main;
    };
  });

  // Executa a funcao chamando o parametro de step
  main.run = _ => main('run');

  return main;
};
