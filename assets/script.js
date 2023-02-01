//references to DOM Elements
var dataDisplayEl = $('#currentDay');


//function displaying data
function displayDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    dataDisplayEl.text(currentDate);
};

setInterval(displayDate, 1000);