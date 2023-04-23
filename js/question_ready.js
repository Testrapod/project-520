/* question.html document ready */
$(document).ready(function () {
    // hint
    var show_hint = false;
    $("#hint_button").click(function () {
        if (!show_hint) {
            show_hint = true;

            $("#hint_button").removeClass("bi-lightbulb-fill");
            $("#hint_button").addClass("bi-lightbulb");
            $("#hint_button").css("color", "black");

            $("#hint_text").fadeIn();
        } else {
            show_hint = false;

            $("#hint_button").removeClass("bi-lightbulb");
            $("#hint_button").addClass("bi-lightbulb-fill");
            $("#hint_button").css("color", "gold");

            $("#hint_text").fadeOut("fast");
        }
    });
});