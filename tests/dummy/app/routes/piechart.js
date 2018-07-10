import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model: async function(params) {
    const path = '/data/visualizations';
    const dataUrl = params['data'] ? `${path}/${params['data']}` : `${path}/pie-chart.json`;

    const model = await $.get({
      url: dataUrl,
      error(err) {
        throw err;
      }
    });

    return model;
  },
})

