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
    const id = params.id ? params.id : 47;
    return $.ajax({
    //url: 'https://teste.ctweb.inweb.org.br/caipirinha/dashboards/47',
      url: `https://teste.ctweb.inweb.org.br/caipirinha/dashboards/${id}`,
      type: 'GET'
    });
  },
})

