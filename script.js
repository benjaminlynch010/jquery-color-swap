$(document).ready(onReady);

function onReady() {
    console.log('jquery is set up')
  
    // handlers here
  $("#generate-button").on('click', handleGenerate)
  $("#append-here").on('click',"#new-div", "yellow-button", handleYellow)
  $("#append-here").on('click', ".new-div", handleDelete)

} // end on Ready

// variable to store a 'count' value
let generateCount = 0;


function handleGenerate(event) {
  event.preventDefault()  
  console.log('in handleGenerate function')
  // increment count to log # of clicks
  generateCount++
  
render()
 
}

function render() {
  $("#append-here").append(`
    <div class="new-div">
      <p>Generate has been clicked ${generateCount} times.</p>
      <button id="yellow-button">Yellow</button>
      <button id="delete-button">Delete</button>
    </div>
`)

}

function handleYellow(event) {
    event.preventDefault()
    $(this).css("background-color", "yellow")
}

function handleDelete(event) {
    event.preventDefault()
    $(this).remove()
}