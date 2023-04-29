/* synopsis.html document ready */
$(document).ready(function () {
    synopsis = `
        <h4 class="mb-3">시놉시스</h4>
        작년 <span class="yuntted-text">윤티드</span>에서 처음 만난 동해와 유나은은 서로의 마음을 확인하고 연애를 시작하게 되었다! ❤️<br/>
        행복하게 연애한지 어느덧 1주년,, 기다리고 기다리던 유나은의 생일이 다가왔다..!<br/><br/>
        동해는 작년에 받은 이벤트에 감동해 올해는 더 멋진(?) 이벤트를 하겠다고 다짐했는데..<br/>
        이를 몰래 지켜보던 유나은은 동해가 어떤 이벤트를 준비하고 있는지 궁금해졌다! 😄<br/><br/>
        그래서 동해가 자고있는 틈을 타 동해의 노트북을 뒤져보았는데..<br/>
        이상한 폴더를 하나 발견했다..! 🫢 폴더의 이름은 <span class="large-text">Project 520</span>..?<br/>
        무슨 폴더지? 우선 한번 확인해볼까~? 😆
    `
    help = `
        <h4 class="mb-3">💻 컴탈출 방법 💻</h4>
        1. 플레이어(유나은)는 <span class="gray-text">파일들에 걸린 암호</span>를 풀어내며 동해의 이벤트를 알아내는 것이 목표!<br/>
        2. <span class="gray-text">파일에 걸린 암호</span>는 동해도 까먹을까봐 문제 형태로 풀 수 있게 되어있다. 😅<br/>
        3. 파일은 총 <span class="large-text">16</span>개! 즉 <span class="large-text">16</span>개의 문제를 모두 풀어야만 맨 마지막에 동해의 이벤트를 알아낼 수 있다.<br/>
        4. <span class="gray-text">암호</span>를 알아내면 하단 입력창에 입력하자. 그러면 자동으로 다음 파일로 넘어간다.<br/>
        5. <span class="gray-text">암호</span>는 전부 <span class="accent-text">한글</span>로만 이루어져있다!! (영어, 숫자도 모두 한글로 작성!)<br/>
        6. 각 <span class="gray-text">암호</span>마다 우측 상단 💡 버튼을 누르면 힌트가 나오니 참고하도록.<br/><br/>
        우선 연습삼아 컴퓨터 암호부터 풀어보자.<br/>
        컴퓨터 암호도 핸드폰 암호랑 같았던거 같은데.. 🤔
    `

    $("#content").html(synopsis);

    isSynopsis = true;
    $("#next_button").click(function () {
        if (isSynopsis) {
            $("#content").html(help);
            $("#next_button").html("이전")
            isSynopsis = false;
        } else {
            $("#content").html(synopsis);
            $("#next_button").html("다음")
            isSynopsis = true;
        }
    });
});