'use strict';

gViz.vis.map.initialize = function() {
  // Get attributes values
  var _id         = null;
  var _var        = null;
  var container   = null;
  var data        = [];
  var tile        = "default";
  var startPoint  = [0, 0];
  var zoom        = null;
  var margin      = { top: 20, right: 20, bottom: 20, left: 20 };

  // Main function
  var main = function(step) {

    switch (step) {
      // Build entire visualizations
      case 'run':

        // Initialize variables
        if (!_var) { _var = {}; }
        _var._id = _id;

        // Get container
        _var.container = {
          selector: container,
          d3: d3.select(container),
          el: d3.select(container).node(),
          clientRect: d3.select(container).node().getBoundingClientRect()
        };

        // Get data
        _var.data = data;
        _var.margin = margin;

        // Define height and width
        _var.height = _var.container.clientRect.height;
        _var.width = _var.container.clientRect.width;

        // Set attribute _id to container
        _var.container.d3.attr('data-vis-id', _var._id);

        _var.headerWrapper = _var.container.d3.selectAll(".header-wrapper").data(["header-wrapper"]);
        _var.headerWrapper.exit().remove();
        _var.headerWrapper = _var.headerWrapper.enter().append("div").attr("class", "header-wrapper").merge(_var.headerWrapper);


        // NO DATA AVAILABLE
        if (_var.data.length === 0) {
          var styleStr = `line-height: ${_var.container.clientRect.height}px; text-align: center`;
          _var.container.d3.html(`<h5 style='${styleStr}'>NO DATA AVAILABLE</h5>`);
        }
        else {
          _var.container.d3.selectAll("h5").remove();
        }

        // Tile to be loaded
        _var.tile = tile;

        // Map Mode
        _var.mode = _var.data.mode;

        // parse int
        if(_var.mode.heatmap || _var.mode.points) {
          _var.data.data.forEach((point, idx) => {
            _var.data.data[idx]['lat'] = +_var.data.data[idx]['lat'];
            _var.data.data[idx]['lon'] = +_var.data.data[idx]['lon'];
          })
        }

        if(_var.mode.polygon === true) {
          _var.heatColors = ['#BD0026', '#E31A1C', '#FC4E2A',
            '#FD8D3C', '#FEB24C', '#FED976'].reverse();
        }

        if(_var.mode.heatmap === true) {
          _var.heatColors = ['blue', 'cyan', 'yellow', 'orange', 'red'];
        }

      break;
    }

    return _var;
  };

  // Expose global variables
  ['_id','_var','container','data', 'tile', 'startPoint', 'zoom'].forEach(function(key) {
    // Attach variables to main function
    return main[key] = function(_) {
      if (arguments.length) {
        eval(`${key} = _`);
      }

      return main;
    };
  });

  // Execute the specific called function
  main.run = _ => main('run');

  return main;
};
