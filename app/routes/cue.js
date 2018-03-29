import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    return this.get('store').findAll('cue')
  },
  model(params) {
  	return this.get('store').peekRecord('cue', params.cue_id)
  }
});
