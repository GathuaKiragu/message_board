import Ember from 'ember';

export function reviews(params/*, hash*/) {
  var answerRating = params[0].get('rating');

  if (answerRating >= 5){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"> </span> <span class="glyphicon glyphicon-star"> </span> <span class="glyphicon glyphicon-star"> </span><span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span>');
  } else if (answerRating >= 4){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"> </span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"> </span><span class="glyphicon glyphicon-star"></span>');
  } else if (answerRating >= 3){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"> </span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span>');
  } else if (answerRating >= 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"> </span> <span class="glyphicon glyphicon-star"></span>');
  } else if (answerRating = 1){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star">');
  }
}
export default Ember.Helper.helper(reviews);
