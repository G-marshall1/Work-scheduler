

for (var i = 0; i<9; i++) {
  const timeBlockEl = $('<div>')
const timeShownEl = $('<div>')
const textAreaEl = $('<textarea>')
const buttonEl = $('<button>')
const iconEl = $('<i>')
//let saveBtnEl = $('.savBtn');

timeBlockEl.attr("id", "hour-"+(i+9))
const currentTime = dayjs().format("H")
if (currentTime == i+9) {
  timeBlockEl.attr("class", "row time-block present" )
}
else if (currentTime > i+9){
  timeBlockEl.attr("class", "row time-block past" )
} else {
  timeBlockEl.attr("class", "row time-block future" )
}

timeShownEl.attr("class", "col-2 col-md-1 hour text-center py-3")
timeShownEl.text(i+9)
textAreaEl.attr("class", "col-8 col-md-10 description")
textAreaEl.attr("rows", "3")
buttonEl.attr("class", "btn saveBtn col-2 col-md-1")
buttonEl.attr("aria-label", "save")
iconEl.attr("class", "fas fa-save")
iconEl.attr("aria-hidden", "true")

buttonEl.append(iconEl)
timeBlockEl.append(timeShownEl)
timeBlockEl.append(textAreaEl)
timeBlockEl.append(buttonEl)


const container = $('#container')
container.append(timeBlockEl)
}


var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D'));


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
