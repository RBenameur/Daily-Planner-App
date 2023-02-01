//references to DOM Elements
var dataDisplayEl = $('#currentDay');
var container = $('.container');

var btnObj = {
    btn9am: $('#9AM-btn'),
    btn10am: $('#10AM-btn'),
    btn11am: $('#11AM-btn'),
    btn12pm: $('#12PM-btn'),
    btn1pm: $('#1PM-btn'),
    btn2pm: $('#2PM-btn'),
    btn3pm: $('#3PM-btn'),
    btn4pm: $('#4PM-btn'),
    btn5pm: $('#5PM-btn')
};

//function styling based on past present or future plan
function timeStyling () {
    var currentTime = moment().format('LT');

    for (btn in btnObj) {

        var getBtnID = btn.slice(3, -2) + btn.slice(-2).toUpperCase();

        $(`#${getBtnID}`).attr('class', 'row past');

        var slicedTime = currentTime.slice(0, -6) + currentTime.slice(-2);

        if (slicedTime == getBtnID) {
            $(`#${slicedTime}`).attr('class', 'row present');
            break;
        };
    };
};

//function displaying data
function displayDate () {

    var currentDate = moment().format('dddd, MMMM Do');

    dataDisplayEl.text(currentDate);

    timeStyling();
    
};

//function to get data from local storage to populate text area
function getLocalStorage () {

    return JSON.parse(localStorage.getItem('toDo')) || {};
};

//function to load data from local storage onto page
function loadLocalStorage () {

    var toDo = getLocalStorage();

    for (item in toDo) {
        
        var currentTxtArea = $(`#${item}`);

        currentTxtArea.val(toDo[item]);
    };

};

//function to submit user input to local storage
function submitText () {
    
    var toDo = getLocalStorage();

    var eventID = $(this).attr("id").slice(0, -4);

    var textarea = $(`#${eventID}`).val();

    toDo[eventID] = textarea;

   localStorage.setItem('toDo',JSON.stringify(toDo));

   $('.jumbotron').append(`
   <p>Appointment Added to <span class='time-block red-text'>localStorage</span>&#10004;
   `);



};

// function to initialise file
function init () {

    loadLocalStorage();

    timeStyling();

    for (btn in btnObj) {

        var currentBtn = btnObj[btn];

        currentBtn.on('click', submitText);
    };

    setInterval(displayDate, 1000);

};

init();
