import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       answer_area: this.get('answer_area'),
       rating: this.get('author')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
