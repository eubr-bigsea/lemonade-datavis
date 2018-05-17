'use strict';

// Initialize the visualization class
gViz.vis.map = function () {
  // Auxiliar Functions
  var components = {
    initialize:     gViz.vis.map.initialize,
    misc:           gViz.vis.map.misc,
    create:         gViz.vis.map.create,
    tiles:          gViz.vis.map.tiles,
    renderMap:      gViz.vis.map.renderMap,
    heatLayer:      gViz.vis.map.heatLayer,
    geoJsonLayer:   gViz.vis.map.geoJsonLayer,
  };

  // Get attributes values

  // Get attributes values
  var _id         = `vis-map-chart-${Math.floor(Math.random() * ((1000000000 - 5) + 1)) + 5}`;
  var _var        = null;
  var action      = 'build';
  var container   = null;
  var data        = [];
  var tile        = "default";

  // Validate attributes
  var validate = function (step) {
    switch (step) {
      case 'build':         return (container != null) && (d3.selectAll(container).size() !== 0 || d3.select(container).size() !== 0);
      case 'initialize':    return true;
      case 'misc':          return data != null && data.data != null;
      case 'create':        return data != null && data.data != null;
      case 'tiles':         return data != null && data.data != null;
      case 'renderMap':     return data != null && data.data != null;
      case 'heatLayer':     return data != null && data.data != null;
      case 'geoJsonLayer':  return data != null && data.data != null;
      default:              return false;
    }
  };

  // Main function
  var main = function main(step) {
    //Validate attributes if necessary
    if (validate(step)) {

      switch (step) {

        // Build entire visualizations
        case 'build':
          main('initialize');
          main('misc');
          main('create');
          main('tiles');
          main('renderMap');
          main('heatLayer');
          main('geoJsonLayer');
          break;


        // Initialize visualization variable
        case 'initialize':

          if (!_var) { _var = {};  }

          //_var = gViz.vis.map.initialize()
          _var = components.initialize()
            ._var(_var)
            ._id((_var._id != null) ? _var._id : _id)
            .container(container)
            .data(data)
            .tile(tile)
            .run();

          break;

        // Initialize tiles
        case 'tiles':

          // Setup
          _var = components.tiles()
            ._var(_var)
            .run();

          break;

        // Create initial elements
        case 'renderMap':

          // Creating wrappers
          _var = components.renderMap()
            ._var(_var)
            .run();
          break;

        // Create initial elements
        case 'heatLayer':

          if(_var.mode.heatmap || _var.mode.points)
          {
            // Creating wrappers
            _var = components.heatLayer()
            ._var(_var)
            .run();
          }

          break;

        // Create initial elements
        case 'geoJsonLayer':

          if(_var.mode.polygon && _var.data.geojson)
          {
            // Creating wrappers
            _var = components.geoJsonLayer()
            ._var(_var)
            .run();
          }

          break;

        // Create initial elements
        case 'create':

          // Creating wrappers
          _var = components.create()
            ._var(_var)
            .run();
          break;

        // Show legend
        case 'misc':

          // Running
          _var = components.misc()
            ._var(_var)
            .components(components)
            .run();
          break;
      }
    }

    else { console.log("Failed to validate on step " + step); }

    return _var;
  };

  // Expose global variables
  ['_id', '_var', 'action', 'container', 'data', 'tile', 'startPoint', 'zoom'].forEach(function (key) {
    // Attach variables to validation function
    validate[key] = function (_) {
      if (!arguments.length) {
        eval('return ' + key);
      }
      eval(key + ' = _');
      return validate;
    };

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
  main.build = function (_) {
    return main("build");
  };

  return main;
};
