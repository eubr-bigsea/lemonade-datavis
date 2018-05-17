import { empty } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../templates/components/visualizations/vis-wrapper';
import $ from 'jquery';

export default Component.extend({
  layout,

  // Set html elements
  tagName: "div",
  classNames: ["gViz-outer-wrapper"],

  // Initialize data
  data: null,
  isEmpty: empty('data'),
  resizeIndex: 0,

  // Initialize data
  didInsertElement() {

    // Store this
    var self = this;

    if(self.get('viz').visu === "table-visualization"){
      var container = this.elementId;
      $("#" + container).addClass("table-overflowing");
    }

    // Bind resize
    self.$().resizable({
      start: function() {
        self.$().removeClass('hovering').addClass('hovering').css('opacity', 0.6);
      },
      stop: function() {
        self.incrementProperty('resizeIndex');
        self.$().removeClass('hovering').css('opacity', 1);
      },
      containment: self.$().parent(),
      minWidth: 300,
      minHeight: 300
    });

  },

});
