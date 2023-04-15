/* index.html document ready */
const screen_list = [
    "synopsis",
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7",
    "question8",
    "question9",
    "question10",
    "question11",
    "question12",
    "question13",
    "question14",
    "question15",
    "question16",
]
const answer_list = [
    "520522",
    "하울의 움직이는 성",
    "은행",
    "아이스크림",
    "용용선생",
]

$(document).ready(function () {
    var current_idx = 0

    ////////////////////////////////////////////////////////////////////////////////
    // BGM
    var bgm; var bgmOn = false; var bgmFirstTime = true;
    $("#bgm_button").click(function () {
        if (!bgmOn) {
            if (bgmFirstTime) {
                // bgm = new Audio("bgm/ghibli.mp3");
                bgmFirstTime = false;
            }
            // bgm.play();
            bgmOn = true;

            $("#bgm_button").removeClass("bi-volume-up");
            $("#bgm_button").addClass("bi-volume-mute");
        } else {
            // bgm.pause();
            bgmOn = false;

            $("#bgm_button").removeClass("bi-volume-mute");
            $("#bgm_button").addClass("bi-volume-up");
        }
    });
    ////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////
    // Enter
    function handleEnter() {
        var answer = $("#answer_input").val();
        $("#answer_input").val("");
        
        if (answer != answer_list[current_idx]) {
            $("#alert_message").text("잘못 입력하셨습니다.");
            $("#alert_fail").show();
            setTimeout(function () { $("#alert_fail").fadeOut(); }, 1000);
            return;
        }
        
        current_idx += 1;
        showScreen(screen_list[current_idx]);

        $("#main_screen").hide();
        $("#main_screen").fadeIn(2000);
    }
    $("#answer_input").on("keypress", function (key) {
        if (key.keyCode == 13) handleEnter();
    });
    $("#enter_button").click(handleEnter);
    ////////////////////////////////////////////////////////////////////////////////

    var typedTitle = new Typed("#title", {
        strings: ["PROJECT: 520"],
        typeSpeed: 120,
        backSpeed: 120,
        loop: true,
        showCursor: false,
    });

    function showScreen(page) {
        src = "./screen/" + page + ".html";
        $("#main_screen").attr("src", ""); // 로딩 최적화
        $("#main_screen").attr("src", src);
    }

    showScreen("synopsis");
});