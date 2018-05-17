// Initialize the visualization class
gViz.vis.map.misc = function () {
  "use strict";

  // Get attributes values
  var _var      = undefined;
  var components = {};

  // Main function
  var main = function(step) {

    switch (step) {

      // Build entire visualizations
      case 'run':

        // Update height based on title
        var top = 0;

        if(_var.data.title) { top += 35; }
        if(_var.data.legend) { top += 30; }

        // Draw title wrapper
        var titleClass = "title-wrapper-" + _var._id;
        _var.titleWrapper = _var.headerWrapper.selectAll("." + titleClass).data(["title-wrapper"]);// svg:g
        _var.titleWrapper.exit().remove();
        _var.titleWrapper = _var.titleWrapper.enter().append('div').attr('class', titleClass).merge(_var.titleWrapper);

        var moveIcon = '<i class="fa fa-arrows"'
        moveIcon += 'style="float: right; margin-top: 3px; cursor: pointer;">';
        moveIcon += '</i>';

        _var.titleWrapper
          .style('padding', '10px 10px 10px')
          .style('oveflow', 'hidden')
          .style('white-space', 'nowrap')
          .style('text-overflow', 'ellipsis')
          .style('background-color', '#eee')
          .style('color', '#666')
          .style('font-size', '12px')
          .html(function() {
            if(_var.data.title) { return _var.data.title + moveIcon; }
            else return moveIcon;
          });

        // Legend is only available in heatmap
        if(_var.mode.heatmap || _var.mode.polygon) {

          var hasLegend = _var.data.legend ? _var.data.legend : null;

          // Draw legend wrapper
          var legendClass = "legend-wrapper-" + _var._id;
          _var.legendWrapper = _var.headerWrapper.selectAll("." + legendClass).data(hasLegend ? ["legend-wrapper"] : []); // svg:g
          _var.legendWrapper.exit().remove();
          _var.legendWrapper = _var.legendWrapper.enter().append('div').attr('class', legendClass).merge(_var.legendWrapper);

          _var.legendWrapper
            .style('width', '100%')
            .style('height', '30px')
            .style('oveflow-y', 'hidden')
            .style('oveflow-x', 'auto')
            .style('padding-left', _var.margin.left + "px")
            .style('padding-top', "10px");

          var scaleClass = "scale-wrapper-" + _var._id;
          _var.scaleWrapper = _var.legendWrapper.selectAll(".scale-wrapper." + scaleClass).data(["scale-wrapper"]);
          _var.scaleWrapper.exit().remove();
          _var.scaleWrapper = _var.scaleWrapper.enter().append("div").attr("class", "scale-wrapper " + scaleClass).merge(_var.scaleWrapper);

          _var.scaleWrapper
            .each(function(d) {
              $(this).empty();
              d3.select(this).append("span").attr("class", "legend-left").text("Low");
              d3.select(this).append("svg").attr("class", "scale-rect").attr("width", 100).attr("height", 10);
              d3.select(this).append("span").attr("class", "legend-right").text("High");
            });

          // Set margin left and display style
          _var.scaleWrapper.select('.' + scaleClass + ', .scale-wrapper-full').style('display', 'block');

          d3.select('.scale-rect')
            .style('background', "linear-gradient(to right," + _var.heatColors.join(',') + ")");

        };

        break;

    }

    return _var;

  };

  // Exposicao de variaveis globais
  ['_var','components'].forEach(function(key) {
    // Attach variables to main function
    return main[key] = function(_) {
      if (!arguments.length) { eval(`return ${key}`); }
      eval(`${key} = _`);
      return main;
    };
  });

  // Executa a funcao chamando o parametro de step
  main.run = _ => main('run');

  return main;
};
