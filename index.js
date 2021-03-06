'use strict';

module.exports = {
  name: 'lemonade-datavis',
  included(app) {
    this._super(...arguments);
    this._super.included.apply(this, arguments);

    app.import('vendor/gViz/libs/d3.v4/d3.v4.min.js');
    app.import('vendor/gViz/libs/leaflet-heat/leaflet-heat.js');

    app.import('node_modules/lodash/lodash.js'); // gridstack requirements
    app.import('node_modules/jquery-ui-dist/jquery-ui.css'); // gridstack requirements
    app.import('node_modules/jquery-ui-dist/jquery-ui.theme.css'); // gridstack requirements
    app.import('node_modules/jquery-ui-dist/jquery-ui.structure.css'); // gridstack requirements
    app.import('node_modules/jquery-ui-dist/jquery-ui.js'); // gridstack requirements
    app.import('node_modules/gridstack/dist/gridstack.css');
    app.import('node_modules/gridstack/dist/gridstack-extra.css');
    app.import('node_modules/gridstack/dist/gridstack.all.js');

    app.import("vendor/gViz/_init.js");
    app.import("vendor/gViz/shared/_init.js");
    app.import("vendor/gViz/shared/helpers/colors.js");
    app.import("vendor/gViz/shared/helpers/date.js");
    app.import("vendor/gViz/shared/helpers/loading.js");
    app.import("vendor/gViz/shared/helpers/number.js");
    app.import("vendor/gViz/shared/helpers/selection.js");
    app.import("vendor/gViz/shared/helpers/style.js");
    app.import("vendor/gViz/shared/helpers/text.js");
    app.import("vendor/gViz/shared/visual-components/axis-guide.js");
    app.import("vendor/gViz/shared/visual-components/background-grid.js");
    app.import("vendor/gViz/shared/visual-components/gradient.js");
    app.import("vendor/gViz/shared/visual-components/shadow.js");
    app.import("vendor/gViz/shared/visual-components/tooltip.js");
    app.import("vendor/gViz/shared/visual-components/tooltip-table.js");
    app.import("vendor/gViz/visualizations/donut-chart/_init.js");
    app.import("vendor/gViz/visualizations/donut-chart/initialize.js");
    app.import("vendor/gViz/visualizations/donut-chart/create.js");
    app.import("vendor/gViz/visualizations/donut-chart/elements.js");
    app.import("vendor/gViz/visualizations/donut-chart/events.js");
    app.import("vendor/gViz/visualizations/donut-chart/misc.js");
    app.import("vendor/gViz/visualizations/donut-chart/parse.js");
    app.import("vendor/gViz/visualizations/area-chart/_init.js");
    app.import("vendor/gViz/visualizations/area-chart/initialize.js");
    app.import("vendor/gViz/visualizations/area-chart/create.js");
    app.import("vendor/gViz/visualizations/area-chart/x-scale.js");
    app.import("vendor/gViz/visualizations/area-chart/y-scale.js");
    app.import("vendor/gViz/visualizations/area-chart/axis.js");
    app.import("vendor/gViz/visualizations/area-chart/elements.js");
    app.import("vendor/gViz/visualizations/area-chart/events.js");
    app.import("vendor/gViz/visualizations/area-chart/style.js");
    app.import("vendor/gViz/visualizations/area-chart/misc.js");
    app.import("vendor/gViz/visualizations/line-chart/_init.js");
    app.import("vendor/gViz/visualizations/line-chart/initialize.js");
    app.import("vendor/gViz/visualizations/line-chart/create.js");
    app.import("vendor/gViz/visualizations/line-chart/x-scale.js");
    app.import("vendor/gViz/visualizations/line-chart/y-scale.js");
    app.import("vendor/gViz/visualizations/line-chart/axis.js");
    app.import("vendor/gViz/visualizations/line-chart/elements.js");
    app.import("vendor/gViz/visualizations/line-chart/events.js");
    app.import("vendor/gViz/visualizations/line-chart/style.js");
    app.import("vendor/gViz/visualizations/line-chart/misc.js");
    app.import("vendor/gViz/visualizations/map-chart/_init.js");
    app.import("vendor/gViz/visualizations/map-chart/initialize.js");
    app.import("vendor/gViz/visualizations/map-chart/create.js");
    app.import("vendor/gViz/visualizations/map-chart/heat-layer.js");
    app.import("vendor/gViz/visualizations/map-chart/render-map.js");
    app.import("vendor/gViz/visualizations/map-chart/geojson-layer.js");
    app.import("vendor/gViz/visualizations/map-chart/tiles.js");
    app.import("vendor/gViz/visualizations/map-chart/misc.js");
    app.import("vendor/gViz/visualizations/pie-chart/_init.js");
    app.import("vendor/gViz/visualizations/pie-chart/initialize.js");
    app.import("vendor/gViz/visualizations/pie-chart/create.js");
    app.import("vendor/gViz/visualizations/pie-chart/elements.js");
    app.import("vendor/gViz/visualizations/pie-chart/events.js");
    app.import("vendor/gViz/visualizations/pie-chart/legend.js");
    app.import("vendor/gViz/visualizations/pie-chart/misc.js");
    app.import("vendor/gViz/visualizations/pie-chart/parse.js");
    app.import("vendor/gViz/visualizations/scatter-plot/_init.js");
    app.import("vendor/gViz/visualizations/scatter-plot/initialize.js");
    app.import("vendor/gViz/visualizations/scatter-plot/create.js");
    app.import("vendor/gViz/visualizations/scatter-plot/x-scale.js");
    app.import("vendor/gViz/visualizations/scatter-plot/y-scale.js");
    app.import("vendor/gViz/visualizations/scatter-plot/z-scale.js");
    app.import("vendor/gViz/visualizations/scatter-plot/axis.js");
    app.import("vendor/gViz/visualizations/scatter-plot/elements.js");
    app.import("vendor/gViz/visualizations/scatter-plot/events.js");
    app.import("vendor/gViz/visualizations/scatter-plot/track.js");
    app.import("vendor/gViz/visualizations/scatter-plot/misc.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/_init.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/initialize.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/style.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/events.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/create.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/x-scale.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/y-scale.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/axis.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/elements.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/bars.js");
    app.import("vendor/gViz/visualizations/vertical-bar-chart/misc.js");
  }
};
