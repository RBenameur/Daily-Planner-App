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

//function styling based on past present of future

function timeStyling () {
    var currentTime = moment().format('LT');

    for (btn in btnObj) {

        var getBtnID = btn.slice(3, -2) + btn.slice(-2).toUpperCase();

        $(`#${getBtnID}`).attr('class', 'row past');

        var slicedTime = currentTime.slice(0, -6) + currentTime.slice(-2);

        if (slicedTime == getBtnID) {
            $(`#${slicedTime}`).attr('class', 'row present');
            //console.log($(`#${slicedTime}`))
            //console.log(slicedTime);
            //console.log(getBtnID);
            //console.log('match');
            break;
        }
    }
};

//function displaying data
function displayDate () {

    var currentDate = moment().format('dddd, MMMM Do');

    dataDisplayEl.text(currentDate);

    // var currentTime = moment().format('LT');

    // //currentTime.toLowerCase();

    // //console.log(currentTime);

    // for (btn in btnObj) {

    //     var getBtnID = btn.slice(3, -2) + btn.slice(-2).toUpperCase();

    //     var slicedTime = currentTime.slice(0, -6) + currentTime.slice(-2);

    //    // console.log(slicedTime);

    //    // console.log(getBtnID);

    //     //console.log(getBtnID);

    // //     getBtnID.toUpperCase();

    // //    console.log(slicedTime);

    // //    console.log(getBtnID);

    //     //console.log(currentTime);

    //     if (slicedTime == getBtnID) {
    //         $(`#${slicedTime}`).attr('class', 'row present');
    //         console.log($(`#${slicedTime}`))
    //         console.log(slicedTime);
    //         console.log(getBtnID);
    //         console.log('match');

    //         break;
    //     }
    // }

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
        //console.log(item);
        var currentTxtArea = $(`#${item}`);

        //console.log(toDo[item]);
        currentTxtArea.val(toDo[item]);
    };

};

//function to submit user input to local storage
function submitText (event) {
    
    var toDo = getLocalStorage();

    var eventID = $(this).attr("id").slice(0, -4);

    var textarea = $(`#${eventID}`).val();

    toDo[eventID] = textarea;

   localStorage.setItem('toDo',JSON.stringify(toDo));

}

// function to initialise file
function init () {

    loadLocalStorage();

    timeStyling();

    for (btn in btnObj) {

        var currentBtn = btnObj[btn];

        currentBtn.on('click', submitText);
    };

};

init();

setInterval(displayDate, 1000);