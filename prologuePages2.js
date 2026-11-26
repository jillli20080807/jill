const chapter2Lines = [

    "我並沒有走遠，我靠著樓梯間的牆壁，漫無目的發呆。",

    "方才躁動的個性已經逐漸平息。",

    "剛剛也太丟臉了。",

    "我將思緒飄向遠方，靜靜地聽著雨聲。",

    "不知道過了多久——",

    "身旁傳來了熟悉的聲音。"

];

const chapter2Text = document.getElementById("chapter2-text");
const rain = document.getElementById("chapter2Rain");

let lineIndex = 0;
let autoTimer;
let isEnding = false;

// 播放雨聲
rain.volume = 0.3;

rain.play().catch(() => {
    document.addEventListener("click", () => {
        rain.play().catch(console.error);
    }, { once: true });
});

// 顯示下一句
function showNextLine() {

    clearTimeout(autoTimer);

    if (isEnding) return;

    // 所有文字播放完畢
    if (lineIndex >= chapter2Lines.length) {

        isEnding = true;

        document.body.classList.add("chapter2-fade");

        setTimeout(() => {
            window.location.href = "chapter2.html";
        }, 2000);

        return;
    }

    // 新增文字
    const p = document.createElement("p");

    p.textContent = chapter2Lines[lineIndex];

    chapter2Text.appendChild(p);

    lineIndex++;

    // 自動播放下一句
    autoTimer = setTimeout(showNextLine, 2000);
}

// 點擊滑鼠加速
document.addEventListener("click", showNextLine);

// 開始播放
showNextLine();