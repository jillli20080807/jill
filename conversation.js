
// 對話內容
const dialogues = [
    {
        speaker: "水里",
        text: "透!要不要去我的貓咖躲雨?",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        text: "也好...",
        character: "tooru"
    },
    {
        speaker: "水里",
        text: "總覺得很少聽透提起以前的事情呢。",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        text: "沒什麼好說的，很普通",
        character: "tooru"
    },
    {
        speaker: "水里",
        text: "透還是一樣冷淡",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        text: "我...我沒有",
        character: "tooru"
    },
    {
        speaker: "水里",
        text: "就是有!",
        character: "mizuri"
    },
    {
        speaker: "心崎透",
        text: "那...那我跟你說我第一次翹課的事吧",
        character: "tooru"
    },
     {
        speaker: "心崎透",
        text:"別再說我冷淡了",
        character: "tooru"
    },
    {
        speaker: "水里",
        text: "好耶!",
        character: "mizuri"
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
    dialogueText.textContent = dialogues[current].text;

    if (dialogues[current].character === "tooru") {

        // 透的棕色對話框
        dialogueBox.classList.remove("mizuri-theme");

        tooru.style.filter = "brightness(1)";
        mizuri.style.filter = "brightness(0.6)";

    } else {

        // 水里的粉色對話框
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
