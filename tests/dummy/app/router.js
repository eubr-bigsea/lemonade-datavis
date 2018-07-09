import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('map');
  this.route('linechart');
  this.route('areachart');
  this.route('donutchart');
  this.route('piechart');
  this.route('scatterplot');
  this.route('barchart');
  this.route('dashboard');
});

export default Router;
