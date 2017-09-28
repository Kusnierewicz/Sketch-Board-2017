$(document).ready(function() {
    color = "b"
    // sketcher building and listening for mouse movement
    $('#create').click(function() {

        modal.style.display = "none";
        sketch();
        // mouse movement = drawing
        $(".box").on("mouseenter", function() {
            if (color == "b"){
                $(this).addClass('hoovered1');
            } else if (color == "bl") {
                $(this).addClass('hoovered2')
            } else if (color == "d") {
                $(this).addClass('hoovered3')
            } else if (color == "r") {
                $(this).addClass('hoovered4')
            }
        });
    });

    // clearing the sketcher
    $(".container").on('click', '.clear', function() {
        $('.hoovered1').removeClass('hoovered1');
        $('.hoovered2').removeClass('hoovered2');
        $('.hoovered3').removeClass('hoovered3');
        $('.hoovered4').removeClass('hoovered4');
    });

    // starting with fresh sketcher (reload page)
    $('.container').on('click', '.new', function() {
        window.location.reload()
    });

    // saving picture by printing it to pdf (web screen)
    $('.container').on('click', '.save', function() {
        print($('sketch'));
    });

    // saving picture by printing it to pdf (web screen)
    $('.container').on('click', '#blue', function() {
        color = "bl"
    });

    // saving picture by printing it to pdf (web screen)
    $('.container').on('click', '#green', function() {
        color = "d"
    });

    // saving picture by printing it to pdf (web screen)
    $('.container').on('click', '#red', function() {
        color = "r"
    });

    $('.container').on('click', '.consoleb', function() {
        if($('.console').css("display") == "block") {
            $('.palette').css("display", "none");
            $('.console').css("display", "none");
        } else {
            $('.palette').css("display", "block");
            $('.console').css("display", "block");
        }
    });

});

var modal = document.getElementById('popup');

var btn = document.getElementById('create');

//sketcher builder
var sketch = function() {
    var number = parseInt(document.getElementsByName("sketch_size")[0].value)
    var wdim1 = ((number * 10) * 1.1)  + 'px';
    var hdim1 = ((number * 10) * 1.48)  + 'px';
    var wdim2 = ((number * 10) + 8)  + 'px';
    var hdim2 = ((number * 10) + 8)  + 'px';
    var wdim3 = (number * 10) + 'px';
    var hdim3 = (number * 10) + 'px';
    var number_of_fields = (number) * (number);
    $('.container').css({ 'width': wdim1, 'height': hdim1 });
    $('.container2').css({ 'width': wdim2, 'height': hdim2});
    $('.sketch').css({ 'width': wdim3, 'height': hdim3});
    var topdim = ((((number * 10) * 1.48) - ((number * 10) + 8))/2)
    $('.container2').css({ 'top': topdim});
    var camera_vertical_dim = ((topdim/2)*1.05)+'px';
    var camera_horizontal_dim = ((((number * 10) * 1.1)/2)-(number/6*1))+'px';
    var bb_vert_dim = camera_horizontal_dim +'px';
    var bbutton_horizontal_dim = ((((number * 10) * 1.1)/2)-(number/5*2))+'px';
    $('.camera').css({'margin-top': camera_vertical_dim, 'margin-left': camera_horizontal_dim, 'width': (number/5*1) + 'px', 'height': (number/5*1) + 'px'});
    $('.base_button').css({'width': number + 'px', 'height': number + 'px'});
    $(".base_button").css("margin-top", (number*3) + 'px');
    $('.consoleb').css({'width': (number*0.364) + 'px', 'height': (number*0.364) + 'px'});
    $(".consoleb").css("top", ((number*0.364)*0.85) + 'px');
    while (number_of_fields > 0) {
        $('.sketch').append('<div class="box"</div>');
        number_of_fields -= 1;
    };
};