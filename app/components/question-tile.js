import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // Update Question
    update(question, params) {
      this.sendAction('update', question, params);
    },
    // Delete Question
    delete(question) {
      if (confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
