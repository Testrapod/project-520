/* difficulty level control */
const another_answer_list = {
    7: ["하양토끼 하루", "하루"],
    8: ["뉴진스의 하입보이요", "뉴진스의 하입보이", "뉴진스 하입보이", "하입보이"],
    17: ["하은아 생일 축하하고 내가 만이 4랑해", "하은아 생일 축하하고 내가 만이 사랑해", "하은아 생일 축하하고 내가 많이 4랑해", "하은아 생일 축하하고 내가 많이 사랑해", "하생축내많사"]
}

function checkAnotherAnswer (idx, user_answer) {
    if (Object.keys(another_answer_list).includes(String(idx))) {
        var check = false;

        var check_answer_list = another_answer_list[idx];
        for (var i=0; i<check_answer_list.length; i++) {
            var real_answer = check_answer_list[i].replace(/ /g, "");
            if (user_answer == real_answer) check = true;
        }

        return check;
    }
    else return false;
}