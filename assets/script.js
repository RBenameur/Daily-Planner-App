//references to DOM Elements
var dataDisplayEl = $('#currentDay');
var container = $('.container');

var btnObj = {
    btn9am:  $('#9AM-btn'),
    btn10am: $('#10AM-btn'),
    btn11am: $('#11AM-btn'),
    btn12pm: $('#12PM-btn'),
    btn1pm: $('#1PM-btn'),
    btn2pm: $('#2PM-btn'),
    btn3pm: $('#3PM-btn'),
    btn4pm: $('#4PM-btn'),
    btn5pm: $('#5PM-btn')
};

// var btn9am = $('#9AM-btn');
// var btn10am = $('#10AM-btn');
// var btn11am = $('#11AM-btn');
// var btn12pm = $('#12PM-btn');
// var btn1pm = $('#1PM-btn');
// var btn2pm = $('#2PM-btn');
// var btn3pm = $('#3PM-btn');
// var btn4pm = $('#4PM-btn');
// var btn5pm = $('#5PM-btn');



//function displaying data
function displayDate () {
    var currentDate = moment().format('dddd, MMMM Do');
    dataDisplayEl.text(currentDate);
};

//function to submit user input to local storage

function submitText () {
    console.log('Clicked');
}

function init () {

    for (btn in btnObj) {
        var currentBtn = btnObj[btn];

        currentBtn.on('click', submitText);

    // console.log(btnObj[btn]);
    };
    // btn9am.on('click',submitText);
    // btn10am.on('click',submitText);

};

init();

setInterval(displayDate, 1000);