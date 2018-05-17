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
    const dataUrl = params['data'] ? `${path}/${params['data']}` : `${path}/line-chart.json`;

    const model = await $.get({
      url: dataUrl,
      error(err) {
        throw err;
      }
    });

    return model;
  },
})

