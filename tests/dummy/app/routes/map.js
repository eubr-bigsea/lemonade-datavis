import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  beforeModel(){
    this._super(...arguments);
    $.ajaxSetup({
      headers: {
        'X-Auth-Token': '123456',
      }
    });
  },

  model(params){
    const path = '/data/visualizations';
    const dataUrl = params['data'] ? `${path}/${params['data']}` : `${path}/map-chart.json`;
    return $.ajax({
      url: dataUrl,
      type: 'GET'
    });
  },
})

