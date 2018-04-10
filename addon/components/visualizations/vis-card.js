import Component from '@ember/component';
import layout from '../../templates/components/visualizations/vis-card';
import $ from 'jquery';

export default Component.extend({
  layout,

  didInsertElement: function() {
    $("[data-toggle=tooltip]").tooltip();
  },
});
