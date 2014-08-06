function prettyDate(date) {
  var formattedDate = (date.getUTCMonth()+1) + "/" + date.getUTCDate() + "/" + date.getUTCFullYear();
  return formattedDate;
}

function calcDaysRemaining() {
  var today, endDate, daysRemaining;
  today = new Date();
  endDate = new Date(2014, 8, 25, 23, 59, 59);
  daysRemaining = Math.floor((endDate - today) / 86400000);

  $(".today").html("Today is " + prettyDate(today) + "<br> Class ends on " + prettyDate(endDate));
  $(".daysLeft").html(daysRemaining);
}

$(document).ready(function() {
  calcDaysRemaining();
});


