$(document).ready(function() {

    // sketcher building and listening for mouse movement
    $('#create').click(function() {

        modal.style.display = "none";
        sketch();
        // mouse movement = drawing
        $(".box").on("mouseenter", function() {
            $(this).addClass('hoovered');
        });
    });

    // clearing the sketcher
    $(".container").on('click', '.clear', function() {
        $('.hoovered').removeClass('hoovered');
    });

    // starting with fresh sketcher (reload page)
    $('.container').on('click', '.new', function() {
        modal.style.display = "block";
    });

    // saving picture by printing it to pdf (web screen)
    $('.container').on('click', '.save', function() {
        print($('sketch'));
    });

});

var modal = document.getElementById('popup');

var btn = document.getElementById('create');

//sketcher builder
var sketch = function() {
    var number = parseInt(document.getElementsByName("sketch_size")[0].value)
    //if(number > 50){
    //    number = 50;
    //}
    var wdim1 = 58 + (number * 10) + 'px';
    var hdim1 = 198 + (number * 10) + 'px';
    var wdim2 = 8 + (number * 10) + 'px';
    var hdim2 = 8 + (number * 10) + 'px';
    var wdim3 = (number * 10) + 'px';
    var hdim3 = (number * 10) + 'px';
    var number_of_fields = (number) * (number);
    $('.container').css({ 'width': wdim1, 'height': hdim1 });
    $('.container2').css({ 'width': wdim2, 'height': hdim2});
    $('.sketch').css({ 'width': wdim3, 'height': hdim3});
    while (number_of_fields > 0) {
        $('.sketch').append('<div class="box"</div>');
        number_of_fields -= 1;
    };
};