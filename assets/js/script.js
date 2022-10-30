var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd, MMMM, Do"));
var buttonEl = $('<btn>');
$('<th>').addClass('th-element').css('text-align', 'right');
var textArea = $('<textarea>').value;
var textAreaEl = $('<textarea>').localStorage;
//buttons
var btn9 = $('#btn9');
var btn10 = $('#btn10');
var btn11 = $('#btn11');
var btn12 = $('btn12');
var btn1 = $('#btn1');
var btn2 = $('#btn2');
var btn3 = $('#btn3');
var btn4 = $('#btn4');
var btn5 = $('#btn5');

//textareas
var txt9 = $('#txt9');
var txt10 = $('#txt10');
var txt11 = $('#txt11');
var txt12 = $('#txt12');
var txt1 = $('#txt1');
var txt2 = $('#txt2');
var txt3 = $('#txt3');
var txt4 = $('#txt4');
var txt5 = $('#txt5');

// time row
var row9 = $('#row9');
var row10 = $('#row10');
var row11 = $('#row11');
var row12 = $('#row12');
var row1 = $('#row1');
var row2 = $('#row2');
var row3 = $('#row3');
var row4 = $('#row4');
var row95 = $('#row5');

//  This function stores the data in each row
$("input([type='button']").click(function() {
  switch(this.id) {
    case $('#btn9'): $('#txt9').html();
    break;
    case $('#btn10'): $('#txt10').html();
    break;
    case $('#btn11'): $('#txt11').html();
    break;
    case $('#btn12'): $('#txt12').html();
    break;
    case $('#btn1'): $('#txt1').html();
    break;
    case $('#btn2'): $('#txt2').html();
    break;
    case $('#btn3'): $('#txt3').html();
    break;
    case $('#btn4'): $('#txt4').html();
    break;
    case $('#btn5'): $('#txt5').html();
    break;
  }
});

//function that compares time and changes color
// if the time in row 9 == 9 
// And the present time < row9 time 
// then color == PAST (GRAY)
// else time in row9 == 9 
// And the present time == 9
// then color == PRESENT (RED)
// else color in row 9 == FUTURE (GREEN)