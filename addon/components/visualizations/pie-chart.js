/* global gViz */
import Component from '@ember/component';
import layout from '../../templates/components/visualizations/pie-chart';

export default Component.extend({
  layout,

  // Set html elements
  classNames: ["gViz-wrapper"],

  // Draw Chart
  didRender: function(){

    this.set('_var',
      gViz.vis.pieChart()
      ._var(this.get('_var'))
      .container(`.gViz-wrapper-inner[data-id='${this.get('elementId')}']`)
      .data(this.get('data'))
      .build()
    );
  }

});
