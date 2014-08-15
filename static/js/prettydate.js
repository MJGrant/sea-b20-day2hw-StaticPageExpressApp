'use strict';

module.exports = function(date) {
  var formattedDate = (date.getUTCMonth()+1) + "/" + date.getUTCDate() + "/" + date.getUTCFullYear();
  return formattedDate;
};