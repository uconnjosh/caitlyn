import Component from '@ember/component';

export default Component.extend({
	init() {
		this._super(...arguments);
		if (this.subCue) {
			this.set("isVisible", false)
		}
  },
  actions: {
    toggleCue(cue) {
      this.set('cue', cue)
    }
  }
});
