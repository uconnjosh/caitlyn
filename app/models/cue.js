import DS from 'ember-data';

var Cue = DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  startBy: DS.attr('string'),
  subCues: DS.hasMany('cue', { inverse: 'superCue'}),
  superCue: DS.belongsTo('cue', { inverse: 'subCues' })

  // TODO: structure so that we have sum the duration of subcues to get a start_by time which reflects
  // when the cue needs to be started to finish on time?
});


Cue.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Morning Routine",
      text: "Getting ready for work",
      startBy: "9am",
      subCues: [2, 3]
    },
    {
	    id: 2,
	    title: "Brush Teeth",
	    text: "Brush teeth for two minutes",
	  },
	  {
	    id: 3,
	    title: "Get Dressed",
	    text: "Choose clothes to wear and dress yourself for the day. Keep the weather in mind!",
	    subCues: [4, 5, 6]
	    // TODO: Utilize a service that displays on image of what to wear based on weather
	  },
	  {
	    id: 4,
	    title: "Underwear"
	  },
	  {
	    id: 5,
	    title: "Shirt",
	    text: "You might need a sweater too if it's chilly today"
	  },
	  {
	    id: 6,
	    title: "Pants",
	  }
  ]
})

export default Cue;
// export default DS.Model.extend({

// });
