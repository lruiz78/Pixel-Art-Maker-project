// Select color input
const colorChoice = document.getElementById('colorPicker');
// Select size input
const widthChoice = document.getElementById('inputWidth');
const heightChoice = document.getElementById('inputHeight');
// When size is submitted by the user, call makeGrid()
const subSelect = document.getElementById('sizePicker');

//submit button listner that creates grid
subSelect.addEventListener('submit',function(evt){
  makeGrid()
  evt.preventDefault();
  });


function makeGrid() {
// Your code goes here!
  const tableTag = document.getElementById('pixelCanvas');

  //This while-loop is used to remove any previous grid when the user hits the
  ///submit button. It also acts as a way to clear any colors in the squares
  //if the user wants to keep the same height and width.
  while(tableTag.childElementCount !== 0){
    tableTag.removeChild(tableTag.firstElementChild);
  }

  //For-loop to create each row
  for( var i = 0; i < heightChoice.value; i++){
    const trTag = document.createElement('tr');
    tableTag.appendChild(trTag);

    //For-loop to create each cell and adding listner to each cell
    //to change the background color
    for( var j = 0; j < widthChoice.value; j++){
      const tdTag = document.createElement('td');
      tdTag.addEventListener('click',function () {
        tdTag.style.background = colorChoice.value;
      })
      trTag.appendChild(tdTag);
    }
  }
}
