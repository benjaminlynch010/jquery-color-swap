$(document).ready(onReady);

function onReady() {
    console.log('jquery is set up')
    // handlers here
  $("#generate-button").on('click', handleGenerate)

} // end on Ready

function handleGenerate() {
  console.log('in handleGenerate function')
  
  $("#red-yellow").append(`
    <div>
      <p>Generate has been clicked:</p>
      <button>Yellow</button>
      <button>Delete</button>
    </div>
  `)
}

