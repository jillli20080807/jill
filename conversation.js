
// 對話內容
const dialogues = [
    {
        speaker: "曲間",
        text: "總算是結束了。",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        text: "是啊...",
        character: "tooru"
    },
    {
        speaker: "曲間",
        text: "雨好像越下越大了，先找個地方躲一下吧。",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        text: "好。",
        action:"(跟著曲間小跑到屋簷下躲雨)",
        character: "tooru"
    },
    {
        speaker: "曲間",
        action:"（伸出手，任由雨滴落在掌心。）",
        text: "不過，這場雨來得還真是時候。",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        action:"看向曲間",
        text: "怎麼這樣說?",
        character: "tooru"
    },
    {
        speaker: "曲間",
        text: "至少能讓某個不懂得休息的人停下來一會兒。",
        action:"意有所指",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        text: "我不累",
        character: "tooru"
    },
     {
        speaker: "曲間",
        text:"是嗎?，你都連軸轉好幾天了",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        action:"（避開曲間的視線，望向屋簷外的雨幕。）",
        text: "我覺得...這場雨和那時候很像。",
        character: "tooru"
    },
    {
        speaker: "曲間",
        text: "我們還很天真的時候嗎?",
        action:"（無奈地瞥了透一眼。）",
        character: "mizuri"
    },
     {
        speaker: "心崎透",
        action:"（望著雨滴在地面濺起的水花出神。）",
        text: "......",
        character: "tooru"
    }
];

// 目前對話進度
let current = 0;
let transitioning = false;

// 取得網頁元素
const speaker = document.getElementById("speaker");
const dialogueText = document.getElementById("dialogueText");
const dialogueBox = document.getElementById("dialogueBox");
const fadeScreen = document.getElementById("fadeScreen");
const tooru = document.getElementById("tooru");
const mizuri = document.getElementById("mizuri");

/// 顯示對話
function showDialogue() {

    speaker.textContent = dialogues[current].speaker;
dialogueText.textContent = "";

if (dialogues[current].action) {
    const action = document.createElement("span");
    action.className = "dialogue-action";
    action.textContent = dialogues[current].action;
    dialogueText.appendChild(action);
}

dialogueText.append(
    dialogues[current].text
);
    if (dialogues[current].character === "tooru") {

        // 透的棕色對話框
        dialogueBox.classList.remove("mizuri-theme");

        tooru.style.filter = "brightness(1)";
        mizuri.style.filter = "brightness(0.6)";

    } else {

        // 曲間的藍色對話框
        dialogueBox.classList.add("mizuri-theme");

        tooru.style.filter = "brightness(0.6)";
        mizuri.style.filter = "brightness(1)";
    }
}

// 點擊切換對話
dialogueBox.addEventListener("click", function () {

    if (transitioning) return;

    current++;

    if (current < dialogues.length) {
        showDialogue();
    } else {

        transitioning = true;

        // 畫面逐漸變黑
        fadeScreen.classList.add("active");

        // 兩秒後進入雨聲開場
        setTimeout(function () {
            window.location.href = "opening.html";
        }, 2000);
    }
});

// 顯示第一句對話
showDialogue();

// 背景雨聲
const rain = document.getElementById("rainSound");

// 設定音量
rain.volume = 0.3;

// 嘗試自動播放
rain.play().catch(function () {

    // 若瀏覽器阻擋，第一次點擊時播放
    document.addEventListener("click", function () {
        rain.play().catch(console.error);
    }, { once: true });

});
