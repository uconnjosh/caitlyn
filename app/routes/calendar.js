import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    return this.get('store').findAll('cue')
  },
  model() {
    return this.get('store').findAll('calendar')
  }
});

