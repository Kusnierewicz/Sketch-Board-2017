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
    var number_of_fields = number * number;
    var dim = 200 + (number * 10) + 'px';

    $('.container').css({ 'width': dim, 'height': dim });

    while (number_of_fields > 0) {
        $('.sketch').append('<div class="box"</div>');
        number_of_fields -= 1;
    };
};