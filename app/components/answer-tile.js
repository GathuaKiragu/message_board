import Ember from 'ember';
//Function to delete answer from the answer-tile
export default Ember.Component.extend({

  title: Ember.computed('answer.author', 'answer.rating', function() {
   return this.get('answer.author') + ' - ' + 'ratings' + ' ' + this.get('answer.rating');
 }),

  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
})
