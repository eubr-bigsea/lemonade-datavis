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

  model(){
    return $.ajax({
      url: 'https://teste.ctweb.inweb.org.br/caipirinha/dashboards/47',
      type: 'GET'
    });
  },
})

