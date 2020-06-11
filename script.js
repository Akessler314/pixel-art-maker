
const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');
const $removeGrid = $('#removeGrid')

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); //clear

    makeGrid(height, width);
    addCellClickListener();
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

//Adds a color to the clicked on cell 
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
// eracer 
// function eracer() {
//     $('td').click( event => {
//         let color = $colorPicker.val();
//         $(event.currentTarget).css("background-color", "white")
//     });
// };

//removes the grid 
$("#removeGrid").click(function(){
    $('table tr td').addClass('opacity');
  });
//adds grid back 
$("#returnGrid").click(function(){
    $('table tr td').removeClass('opacity');
  });

