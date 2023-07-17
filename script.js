$(document).ready(onReady);

function onReady() {
    console.log('jquery is set up')
    // handlers here
  $("#generate-button").on('click', handleGenerate)

} // end on Ready

// variable to store a 'count' value
let generateCount = 0;


function handleGenerate() {
  console.log('in handleGenerate function')
  // increment count to log # of clicks
  generateCount++
  
  $("#append-here").append(`
    <div>
      <p>Generate has been clicked: ${generateCount}</p>
      <button>Yellow</button>
      <button>Delete</button>
    </div>
  `)

 
}

function handleYellow() {
    console.log('in handleYellow')

}

function handleDelete() {
    console.log('in handleDelete')

}