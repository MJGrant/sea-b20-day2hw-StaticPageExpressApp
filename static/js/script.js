function prettyDate(date) {
  var formattedDate = (date.getUTCMonth()+1) + "/" + date.getUTCDate() + "/" + date.getUTCFullYear();
  return formattedDate;
}

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

//Credit: exclude-weekends function is from 
//http://stackoverflow.com/questions/23195679/how-to-exclude-weekend-days-in-jquery
function classDaysBetweenDates(startDate, endDate, getWorkingDays) {

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    // Validate input
    if (endDate < startDate)
        return 0;

    // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0,0,0,1);  // Start just after midnight
    endDate.setHours(23,59,59,999);  // End just before midnight
    var diff = endDate - startDate;  // Milliseconds between datetime objects
    var days = Math.ceil(diff / millisecondsPerDay);

    if(getWorkingDays){
        // Subtract two weekend days for every week in between
        var weeks = Math.floor(days / 7);
        days = days - (weeks * 2);
        // Handle special cases
        var startDay = startDate.getDay();
        var endDay = endDate.getDay();
        // Remove weekend not previously removed.
        if (startDay - endDay > 1)
            days = days - 2;
        // Remove start day if span starts on Sunday but ends before Saturday
        if (startDay == 0 && endDay != 6)
            days = days - 1;
        // Remove end day if span ends on Saturday but starts after Sunday
        if (endDay == 6 && startDay != 0)
            days = days - 1;
    }
    return days;
}

$(document).ready(function() {
  calcDaysRemaining();
});


