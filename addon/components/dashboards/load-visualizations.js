import { computed, set } from '@ember/object';
import { empty } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../templates/components/dashboards/load-visualizations';

export default Component.extend({
  layout,

  // Set html elements
  tagName: "div",
  classNames: ["gViz-dashboard-canvas"],

  // Initialize data
  isEmpty: empty('visualizations'),

  // After insert elements
  didInsertElement() {
    const self = this;

    // Initialize gridstack
    self.set('gs', self.$('.grid-stack').gridstack({
      alwaysShowResizeHandle: true
    }));

    // On resize start
    self.get('gs').on('resizestart', function(event) {

      // Get grid and element
      var element = event.target;

      // Set styles
      self.$(element).removeClass('hovering').addClass('hovering').css('opacity', 0.6);

    });

    // On resize stop
    self.get('gs').on('gsresizestop', function(event, element) {

      // Get viz id
      var dataVizId = self.$(element).attr('data-viz-id');

      // Get visualization and increment resizeIndex property
      var index = self.get('visualizations').map((d,i) => { return { index: i, id: `${d.id}` } }).find(d => `${d.id}` === `${dataVizId}`).index;

      // Get obj
      var obj = self.get(`visualizations.${index}`);

      // Update property
      set(obj, 'resizeIndex', obj.resizeIndex+1);

      // Set styles
      self.$(element).removeClass('hovering').css('opacity', 1);

    });
  },

  actions: {
    save() {
      // Store this
      var self = this;
      var conf = {};

      // Initialize items
      self.$('.grid-stack-item.ui-draggable').each(function () {
        // Get node
        var node = self.$(this).data('_gridstack_node');

        // Get attrs
        var vizId  = self.$(this).attr('data-viz-id');
        var taskId = self.$(this).attr('data-viz-task-id');
        var jobId  = self.$(this).attr('data-viz-job-id');

        // Save node to items
        conf[`${vizId}`] = {
          vizId: vizId,
          taskId: taskId,
          jobId: jobId,
          x: node.x,
          y: node.y,
          width: node.width,
          height: node.height
        };
      });

      // Set model configuration
      self.set('model.configuration', conf);

      // Save the configuration on dashboard
      self.get('model').save(self.get('model'));
    }
  }
});
