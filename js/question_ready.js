/* question.html document ready */
$(document).ready(function () {
    // hint
    var use_hint = false;
    $("#hint_button").click(function () {
        if (!use_hint) {
            use_hint = true;

            $("#hint_button").removeClass("bi-lightbulb-fill");
            $("#hint_button").addClass("bi-lightbulb");
            $("#hint_button").css("color", "black");

            $("#hint_text").show();
        }
    });
});