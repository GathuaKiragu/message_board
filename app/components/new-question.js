import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
    actions: {
      questionFormShow() {
        this.set('addNewQuestion', true);
      },

      saveQuestion1() {
        var params = {
          question: this.get('question'),
          author: this.get('author'),
          additional_notes: this.get('additional_notes'),
        };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion2', params);
      }
    }
});
