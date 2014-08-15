'use strict';

var $ = require('./jquery');
var prettyDate = require('./prettydate');
var classDaysBetweenDates = require('./classDaysBetweenDates');

function calcDaysRemaining() {
  var today, endDate, daysRemaining;
  today = new Date();
  endDate = new Date(2014, 8, 25, 23, 59, 59);
  if (today < endDate) {
    daysRemaining = Math.floor((endDate - today) / 86400000);
  }
  else {
    daysRemaining = 0;
  }
  
  $(".today").html("Today is " + prettyDate(today) + "<br> Class ends on " + prettyDate(endDate));
  $(".daysLeft").html(daysRemaining);
  $(".classDays").html("That's only " + classDaysBetweenDates(today, endDate, true) + " more class days!");
}

$(document).ready(function() {
  calcDaysRemaining();
});
