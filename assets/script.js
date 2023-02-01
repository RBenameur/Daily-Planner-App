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


//function displaying data
function displayDate () {
    var currentDate = moment().format('dddd, MMMM Do');
    dataDisplayEl.text(currentDate);
};

//function to get data from local storage to populate text area
function getLocalStorage() {
    //console.log('CODE PENDING');
    var toDo = JSON.parse(localStorage.getItem('toDo')) || {};
};

//function to submit user input to local storage
function submitText (event) {
    //console.log('Clicked');
    
    getLocalStorage();

    var eventID = $(this).attr("id").slice(0, -4);

    //console.log(eventID);

    var textarea = $(`#${eventID}`).val();

   // console.log(textarea);

}

// function to initialise file
function init () {

    getLocalStorage();

    for (btn in btnObj) {
        var currentBtn = btnObj[btn];
        currentBtn.on('click', submitText);
    };

};

init();

setInterval(displayDate, 1000);