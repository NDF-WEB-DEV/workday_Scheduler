var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd, MMMM, Do"));
var buttonEl = $('<btn>');
$('<th>').addClass('th-element').css('text-align', 'right');
var textArea = $('<textarea>').value;
var textAreaEl = $('<textarea>').localStorage;

var beginingTime = parseInt(moment("9","H").format("H"));
var currentTime = parseInt(moment().format("H"));
var endTime = parseInt(moment("17","H").format("H"));

// var futureTime = parseInt(moment().endOf('day').fromNow());
// $('table th').text( moment("9", "hh").format('LT') );
$('#row9').text( moment("9", "hh").format('LT'));
$('#row10').text( moment("10", "hh").format('LT'));
$('#row11').text( moment("11", "hh").format('LT'));
$('#row12').text( moment("12", "hh").format('LT'));
$('#row1').text( moment("13", "hh").format('LT'));
$('#row2').text( moment("14", "hh").format('LT'));
$('#row3').text( moment("15", "hh").format('LT'));
$('#row4').text( moment("16", "hh").format('LT'));
$('#row5').text( moment("17", "hh").format('LT'));

// Variable stores all clicks for the for each function by capturing all clicks in one variable
const button = document.querySelectorAll('button[id^=btn]');



//textareas
var txt9TaskDislay = document.getElementById("txt9");
var txt10TaskDislay = document.getElementById("txt10");
var txt11TaskDislay = document.getElementById("txt11");
var txt12TaskDislay = document.getElementById("txt12");
var txt1TaskDislay = document.getElementById("txt1");
var txt2TaskDislay = document.getElementById("txt2");
var txt3TaskDislay = document.getElementById("txt3");
var txt4TaskDislay = document.getElementById("txt4");
var txt5TaskDislay = document.getElementById("txt5");

// time row
var row9 = $('#row9');
var row10 = $('#row10');
var row11 = $('#row11');
var row12 = $('#row12');
var row1 = $('#row1');
var row2 = $('#row2');
var row3 = $('#row3');
var row4 = $('#row4');
var row5 = $('#row5');

// const rowColor = document.getElementsByClassName('rows');
const rowColor = document.getElementById("tr[id^=txt");
var currentHour = parseInt(moment().format('H'));

  if (currentHour === rowColor){
    $('textarea[id^=txt]').css({'background-color': 'red', color: 'white'});
  } else if((currentHour < rowColor) && (currentHour > rowColor)) {
    $('textarea[id^=txt]').css({'background-color': 'green', color: 'white'});
  } else if((currentHour > rowColor) && (currentHour < rowColor)){
    $('textarea[id^=txt]').css({'background-color': '#d3d3d3', color: 'white'});
  } else {
    $('textarea[id^=txt]').css({'background-color': 'white', color: 'black'});
  }

console.log(currentHour);


renderLastTaskAdded();

// Saving entries to local storage
function renderLastTaskAdded() {
  var txt9 = localStorage.getItem("txt9");
  var txt10 = localStorage.getItem("txt10");
  var txt11 = localStorage.getItem("txt11");
  var txt12 = localStorage.getItem("txt12");
  var txt1 = localStorage.getItem("txt1");
  var txt2 = localStorage.getItem("txt2");
  var txt3 = localStorage.getItem("txt3");
  var txt4 = localStorage.getItem("txt4");
  var txt5 = localStorage.getItem("txt5");

  // Displaying what's stored is local storage
  txt9TaskDislay.textContent = txt9;
  txt10TaskDislay.textContent = txt10;
  txt11TaskDislay.textContent = txt11;
  txt12TaskDislay.textContent = txt12;
  txt1TaskDislay.textContent = txt1;
  txt2TaskDislay.textContent = txt2;
  txt3TaskDislay.textContent = txt3;
  txt4TaskDislay.textContent = txt4;
  txt5TaskDislay.textContent = txt5;
}

// This funtion if for the event listener CLICK when saving the entry
button.forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault

    // Getting the values entered
    var txt9 = document.getElementById("txt9").value;
    var txt10 = document.getElementById("txt10").value;
    var txt11 = document.getElementById("txt11").value;
    var txt12 = document.getElementById("txt12").value;
    var txt1 = document.getElementById("txt1").value;
    var txt2 = document.getElementById("txt2").value;
    var txt3 = document.getElementById("txt3").value;
    var txt4 = document.getElementById("txt4").value;
    var txt5 = document.getElementById("txt5").value;

    // saving the values entered
    localStorage.setItem("txt9", txt9);
    localStorage.setItem("txt10", txt10);
    localStorage.setItem("txt11", txt11);
    localStorage.setItem("txt12", txt12);
    localStorage.setItem("txt1", txt1);
    localStorage.setItem("txt2", txt2);
    localStorage.setItem("txt3", txt3);
    localStorage.setItem("txt4", txt4);
    localStorage.setItem("txt5", txt5);

    // calling function to render the last entries
    renderLastTaskAdded();
    return;
  });
});