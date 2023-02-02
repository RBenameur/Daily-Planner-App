//references to DOM Elements
var dataDisplayEl = $('#currentDay');
var container = $('.container');

var btnObj = {
    '9AM': $('#9AM-btn'),
    '10AM': $('#10AM-btn'),
    '11AM': $('#11AM-btn'),
    '12PM': $('#12PM-btn'),
    '1PM': $('#1PM-btn'),
    '2PM': $('#2PM-btn'),
    '3PM': $('#PM-btn'),
    '4PM': $('#4PM-btn'),
    '5PM': $('#5PM-btn')
};


//function displaying data
function displayDate () {

    var currentDate = moment().format('dddd, MMMM Do');

    dataDisplayEl.text(currentDate);

    timeStyling();
    
};

//function styling based on past present or future plan
function timeStyling () {

    var currentTime = moment().format('LT');

    for (btn in btnObj) {

        //console.log(btn);

        //var getBtnID = btn.slice(3, -2) + btn.slice(-2).toUpperCase();

        //console.log(getBtnID)

        $(`#${btn}`).attr('class', 'row past');

        var slicedTime = currentTime.slice(0, -6) + currentTime.slice(-2);

        if (slicedTime == btn) {
            $(`#${btn}`).attr('class', 'row present');
            break;
        };
    };
};

//function to submit user input to local storage
function submitText () {
    
    var toDo = getLocalStorage();

    var eventID = $(this).attr("id").slice(0, -4);

    var textarea = $(`#${eventID}`).val();

    toDo[eventID] = textarea;

   localStorage.setItem('toDo',JSON.stringify(toDo)); 

   $('.localStorageContainer').html(`
   <p>Appointment Added to <span class='time-block red-text'>localStorage</span>&#10004</p>
   `);

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

function loadPlanner(){

}

// function to initialise file
function init () {

    loadPlanner();

    loadLocalStorage();

    timeStyling();

    for (btn in btnObj) {

        var currentBtn = btnObj[btn];

        currentBtn.on('click', submitText);
    };

    setInterval(displayDate, 1000);

};

init();
