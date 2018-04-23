import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  /*
  beforeModel(){
    this._super(...arguments);
    $.ajaxSetup({
      headers: {
        'X-Auth-Token': '123456',
      }
    });
  },
  */

  model: async function(params) {
    const path = '/data/visualizations';
    const dataUrl = params['data'] ? `${path}/${params['data']}` : `${path}/map-chart.json`;

    const model = await $.get({
      url: dataUrl,
      error(err) {
        throw err;
      }
    });

    // mode is polygon and geojson
    if(model.mode.polygon && model.geojson && model.geojson.url) {
      model.geojson = await $.get({
        url: model.geojson.url,
        error(err) {
          throw err;
        }
      });
    }

    // filters empty geometries
    model.geojson.features = model.geojson.features.filter(function(d) { return d.geometry; });

    // converts linestrings to polygons
    model.geojson.features.forEach(function(feature, idx) {
      if(feature.geometry.type.toLowerCase() === 'linestring') {
        const coordinates = feature.geometry.coordinates;
        feature.geometry.coordinates = [];

        feature.geometry.type = 'Polygon';
        feature.geometry.coordinates.push(coordinates);

        model.geojson.features[idx] = feature;
      }
    });

    return model;
  },
})

