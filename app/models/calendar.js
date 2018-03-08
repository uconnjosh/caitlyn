import DS from 'ember-data';

var Calendar = DS.Model.extend({
  // TODO: I'm pretty sure we will need a third level of complexity here
  cues: DS.hasMany('cues', { async: true })
});

Calendar.reopenClass({
  FIXTURES: [
    {
      id: 1,
      cues: [1]
    }
  ]
})

export default Calendar;
