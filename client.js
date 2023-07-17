$(document).ready(onReady);

function onReady() {
  console.log("jquery is set up");

  // * HANDLERS *
  $("#generate-button").on("click", handleGenerate);

} // end on Ready


// variable to store a 'count' value
let generateCount = 0;


// handler for generate button
function handleGenerate() {
  // increment count to log # of clicks
  generateCount++;
  
  // call render function to display new 'div'
  render();

  // handlers for buttons in appended 'div'
  $(".yellow-button").on("click", handleYellow);
  $(".delete-button").on("click", handleDelete);
}


// function to render new 'div' & 'buttons'
function render() {
  $("#append-here").append(`
    <div id="appended-div">
      <p>Generate has been clicked ${generateCount} times.</p>
      <button class="yellow-button">Yellow</button>
      <button class="delete-button">Delete</button>
    </div>
`);
}

// change background color of appended div to yellow on click
function handleYellow(event) {
  event.preventDefault();
  $(this).closest("div").css("background-color", "yellow");
}

// delete the appended div on click
function handleDelete(event) {
  event.preventDefault();
  $(this).closest("div").remove();
}
