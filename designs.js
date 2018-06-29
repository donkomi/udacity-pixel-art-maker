
// Select size input
let height, width, paint;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);

});


function makeGrid(height, width) {

    $("tr").remove();
for (var i = 1; i <= height; i++) {
       $("#pixelCanvas").append("<tr></tr>");
           for (var j = 0; j < width; j++) {
             $('tr:last-child').append('<td></td>');
             $('td').attr("class", 'color');
           }
}
    

    
$('td').click(function (event){
    var paint = $('#colorPicker').val();
    if($(this).attr('style')){
      $(this).removeAttr('style');
    }
    else {
      $(this).attr('style', 'background-color:' + paint);
    };
  });
}
