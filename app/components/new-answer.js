import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    //Display a new form when the add the new answer action is clicked
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    //save answer to firebase
    saveAnswer() {
     var params = {
       answer_area: this.get('answer_area'),
       author: this.get('author'),
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
