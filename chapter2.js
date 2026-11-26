const dialogues = [

    {
        speaker: "香山睡",
        text: "哎呀，這不是小透嗎？",
        character: "nemuri"
    },

    {
        speaker: "心崎透",
        action:"我抬起頭",
        text: "香山學姊。",
        character: "tooru"
    },

    {
        speaker: "香山睡",
        text: "現在可是上課時間哦，怎麼一個人待在這裡？",
        character: "nemuri"
    },

    {
        speaker: "心崎透",
        text: "我...我不知道。",
        action:"手指侷促的絞著裙襬",
        character: "tooru"
    },

    {
        speaker: "香山睡",
        text: "嗯？難不成我們的小透也學會翹課了？",
        character: "nemuri"
    },
    {
        speaker: "香山睡",
        text: "不想說就不說。",
        action:"學姊靠在我身旁",
        character: "nemuri"
    },

    {
        speaker: "心崎透",
        text: "學姊怎麼會在這裡？",
        character: "tooru"
    },

    {
        speaker: "香山睡",
        text: "小透不說那我也不說。",
        character: "nemuri"
    },

    {
        speaker: "心崎透",
        text: "......",
        character: "tooru"
    },
    {
        speaker: "香山睡",
        text: "看小透這樣是不是被欺負了？",
        character: "nemuri"
    }

];

let index = 0;

const speaker = document.getElementById("chapter2-speaker");
const text = document.getElementById("chapter2-dialogue-text");
const action = document.getElementById("chapter2-action");
const box = document.getElementById("chapter2-dialogue-box");

const tooru = document.getElementById("tooru");
const nemuri = document.getElementById("nemuri");

function showDialogue() {

    const dialogue = dialogues[index];

    speaker.textContent = dialogue.speaker;
    text.textContent = dialogue.text;
action.textContent = dialogue.action
    ? "(" + dialogue.action + ")"
    : "";
    // 角色配色與亮度

if (dialogue.character === "nemuri") {

    box.className = "nemuri";

    nemuri.style.filter = "brightness(1)";
    tooru.style.filter = "brightness(0.5)";

} else if (dialogue.character === "tooru") {

    box.className = "tooru";

    tooru.style.filter = "brightness(1)";
    nemuri.style.filter = "brightness(0.5)";

} else {

    box.className = "narration";

    tooru.style.filter = "brightness(0.7)";
    nemuri.style.filter = "brightness(0.7)";

}

    text.style.fontStyle =
   // 動作文字使用斜體

         dialogue.speaker === "" ? "italic" : "normal";

}

document.addEventListener("click", function () {

    if (index < dialogues.length - 1) {
        index++;
        showDialogue();
    } else {
        window.location.href = "chapter3.html";
    }

});

// 雨聲

const rain = document.getElementById("rainSound");

rain.volume = 0.3;

rain.play().catch(() => {
    document.addEventListener("click", () => {
        rain.play().catch(console.error);
    }, { once: true });
});

showDialogue();