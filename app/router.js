import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // TODO: remove instructions route
  this.route('instructions');
  this.route('cues');
  this.route('calendar');
});

export default Router;
