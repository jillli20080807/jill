const prologuePages = [
    // 第一頁：上課點名
    [
        "*過了一會，同學陸續進到教室。",

        "*上課鐘聲響起。原先喧鬧的教室逐漸安靜了下來，老師一如往常地開始點名。",

        "*教室的門突然被拉開，渾身濕透的相澤走了進來。",

        "聽著山田和相澤的吵鬧，我默默翻過手中的書頁，絲毫沒有抬頭的打算。",

        "*突然教室的窗戶被拉開，循聲望去，只見白雲踩著雲朵，從三樓的窗戶探出頭來。"

    ],

    // 第二頁：白雲登場
    [

        "白雲朧：「喂喂喂陽射！你幹嘛欺負消太啊?」",

        "白雲朧：「不行不行，太糟糕了，我也要一起來！」",

        "老師：「喂！白雲！你給我從哪邊進來?」",
        
        "白雲朧：「報告，我從3樓窗戶進來！」",

        "*...教室的吵鬧聲讓我越來越煩躁，書本的內容已經無法讓我專心。",

        "心崎透（內心）：「一大早就這麼吵。」",
        
        "*白雲將傘還給相澤",

        "心崎透（內心）：「原來有帶傘，為什麼還會掉在路上...」",

        "*渾身濕透的白雲向山田借了條毛巾，若無其事地換起衣服。",

        "心崎透（內心）：「……暴露狂。」",

        "*我默默移開視線，低頭盯著手中的書本。只要不與他對上視線，應該就不會被他纏上了吧。"
    ],

    // 第三頁：意料之外的麻煩
    [
        "白雲朧：「啊！透！」",

        "心崎透（內心）：「……」",

        "心崎透（內心）：「當我沒說。」",

        "白雲朧：「妳看！我今天在路上撿到了什麼！」",

        "*他興高采烈地朝我走來，將那隻不知從哪掏出來的貓舉到我面前",

        "*我的視線不知該放在他光溜溜的身體還是他手中的貓",

        "心崎透：「……！」",

        "*周圍的同學紛紛望了過來。小貓的叫聲、同學的議論聲，以及那些集中在我身上的視線，讓我愈發感到不自在。"
    ],

    // 第四頁：逃離教室
    [
        "!貓...",

        "!我討厭貓...",

        "!好不習慣。",

        "!不要看我。",
        
        "!我感覺個性突然躁動了。",

        "!不要再靠近了。",
        
        "!我快要壓制不住了。"
    ],

    //地午夜
    [

        "白雲朧：「欸？透？」",

        "*回過神時，我已經跑出了教室。",

        "*而這一天，是我人生中的第一次曠課。"
    ]
];
let pageIndex = 0;
let lineIndex = 0;

const prologue = document.getElementById("prologue");
const prologueText = document.getElementById("prologue-text");

// 開始序章
document.getElementById("start-prologue")
    .addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        // 隱藏原本的黑幕
        document.querySelector(".opening-page").style.display = "none";

        // 顯示序章
        prologue.style.display = "flex";

        // 停止雨聲
        const rainSound = document.getElementById("rainSound");

        if (rainSound) {
            rainSound.pause();
            rainSound.muted = true;
            rainSound.currentTime = 0;
        }

        // 進入序章才播放背景音樂
        const schoolBgm = document.getElementById("schoolBgm");

        if (schoolBgm) {
            schoolBgm.muted = false;
            schoolBgm.volume = 0.4;
            schoolBgm.currentTime = 0;
            schoolBgm.play().catch(console.error);
        }

        showNextLine();

    });
    // 目前播放的背景音樂
let currentBgm = "schoolBgm";

// 切換背景音樂
function changeBgm(id) {

    if (currentBgm === id) return;

    const nextBgm = document.getElementById(id);

    if (!nextBgm) return;

    const oldBgm = document.getElementById(currentBgm);

    if (oldBgm) {
        oldBgm.pause();
        oldBgm.currentTime = 0;
    }

    nextBgm.volume = 0.3;
    nextBgm.muted = false;
    nextBgm.currentTime = 0;
    nextBgm.play().catch(console.error);

    currentBgm = id;
}

// 顯示下一句
const heartbeat = document.getElementById("heartbeat");
const tensionBgm = document.getElementById("tensionBgm");
const impactSound = document.getElementById("impactSound");
// 音樂漸弱
function fadeOut(audio, duration = 2000) {

    if (!audio || audio.paused) return;

    const startVolume = audio.volume;
    const steps = 40;
    let step = 0;

    const timer = setInterval(() => {

        step++;

        audio.volume = Math.max(
            0, startVolume * (1 - step / steps)
        );

        if (step >= steps) {
            clearInterval(timer);
            audio.pause();
            audio.currentTime = 0;
        }

    }, duration / steps);
}
// 自動播放文字
let autoTimer;

function autoNextLine() {

    clearTimeout(autoTimer);

    let delay = 1500;

    if (pageIndex === 3) {
    delay = Math.max(400, 1500 - lineIndex * 200);

    // 最後一句停留兩秒
    if (lineIndex === prologuePages[3].length) {
        delay = 2000;
    }
}

    autoTimer = setTimeout(() => {
        showNextLine();
    }, delay);
}
    function showNextLine() {

    clearTimeout(autoTimer);

    // 原本的程式碼保留

  if (pageIndex >= prologuePages.length) {

    heartbeat.pause();
    heartbeat.currentTime = 0;

    tensionBgm.pause();
    tensionBgm.currentTime = 0;

    window.location.href = "prologuePages2.html";
    return;
}
    if (lineIndex >= prologuePages[pageIndex].length) {

        pageIndex++;
        lineIndex = 0;

        autoNextLine();
        prologueText.innerHTML = "";

        showNextLine();
        return;
    }

    const p = document.createElement("p");

let line = prologuePages[pageIndex][lineIndex];

// 第三頁最後一句：校園音樂漸弱
if (pageIndex === 2 && lineIndex === 0) {

    ["schoolBgm", "dailyBgm", "funBgm", "quietBgm"].forEach(id => {
        fadeOut(document.getElementById(id), 1500);
    });
}
if (pageIndex === 3) {
    // 確保校園音樂完全停止
["schoolBgm", "dailyBgm", "funBgm", "quietBgm"].forEach(id => {
    const bgm = document.getElementById(id);

    if (bgm) bgm.pause();
});

   


    // 播放緊張背景音樂
    tensionBgm.volume = 0.15;

    if (tensionBgm.paused) {
        tensionBgm.play().catch(console.error);
    }

    // 心跳逐漸加速
    const speeds = [0.7, 0.85, 1.0, 1.2, 1.4, 1.6, 1.8];

    heartbeat.playbackRate = speeds[lineIndex] || 1.8;

    // 心跳音量逐漸增加
    heartbeat.volume = Math.min(0.4 + lineIndex * 0.1, 1.0);

    if (heartbeat.paused) {
        heartbeat.play().catch(console.error);
    }
    // 第四頁最後一句：衝擊音效
if (lineIndex === prologuePages[3].length - 1) {

    // 停止心跳聲
    heartbeat.pause();

    // 停止緊張音樂
    tensionBgm.pause();

    // 播放登登音效
    impactSound.volume = 0.8;
    impactSound.currentTime = 0;
    impactSound.play().catch(console.error);
}

} else {

    heartbeat.pause();
    heartbeat.currentTime = 0;

    tensionBgm.pause();
    tensionBgm.currentTime = 0;
}
// 白雲朧登場時切換音樂
if (line.includes("白雲朧") && line.includes("到——")) {
    changeBgm("funBgm");
}

// 透感到不自在時切換音樂
if (line.includes("好不舒服")) {
    changeBgm("quietBgm");
}

// 紅色文字
if (line.startsWith("!")) {
    p.classList.add("prologue-red");
    line = line.slice(1);
}

// 斜體文字
if (line.startsWith("*")) {
    p.classList.add("prologue-action");
    line = line.slice(1);
}

p.textContent = line;
    prologueText.appendChild(p);

    lineIndex++;
 autoNextLine();
 }

// 點擊黑幕顯示下一句
prologue.addEventListener("click", function (event) {
    event.stopPropagation();
    showNextLine();
});