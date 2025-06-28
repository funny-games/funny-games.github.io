var save_data = new Array(0, 0);
var today = new Date();
var stop = 0;
var x = 0;
var Sa, h, m, s, sleep_time = 1000;

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let sea = new Audio("https://funny-games.github.io/music/sound_of_the_sea.mp3");
async function sound() {
    try {
        await sea.play();
        sea.loop = true;
    } catch (e) {
        console.log("音声再生エラー:", e);
    }
} function sound_stop() {
    sea.loop = false;
} function setData_count_up() {
    var cdata = localStorage.getItem("clear");
    if (cdata != null) {
        save_data = JSON.parse(cdata);
    } if (today.getDay() == 0 || today.getDay() == 6) {
        save_data[2] = 18000;
    } else {
        save_data[2] = 10800;
    } document.getElementById("level").value = save_data[0];
    document.getElementById("time").value = save_data[1];
    document.getElementById("dailytime").value = save_data[2];
} function timer_stop() {
    stop = 1;
    x = 0;
} function level_up() {
    const level = save_data[0];
    const time = save_data[1];

    let nextLevel = level;

    if (level < 10) {
        nextLevel = Math.floor(time / 10);
    } else if (level < 50) {
        nextLevel = 10 + Math.floor((time - 10) / 120);
    } else if (level < 100) {
        nextLevel = 50 + Math.floor((time - 50 * 120) / 600);
    } else if (level < 500) {
        nextLevel = 100 + Math.floor((time - 100 * 600) / 3600);
    } else if (level < 1000) {
        nextLevel = 500 + Math.floor((time - 500 * 3600) / 21600);
    } else {
        nextLevel += 0.5 * Math.floor(time / 43200);
    }

    save_data[0] = Math.max(save_data[0], nextLevel);
    document.getElementById("level").value = save_data[0];
} async function timer_start() {
    stop = 0;
    x += 1;
    if (x > 1) {
        timer_stop();
    }     
    let lastTime = Date.now();
    while (stop < 1) {
        await _sleep(500);
        let now = Date.now();
        let deltaSec = Math.floor((now - lastTime) / 1000);
        if (deltaSec <= 0) continue;
        lastTime += deltaSec * 1000;
        save_data[1] += deltaSec;
        save_data[2] -= deltaSec;
        if (save_data[2] < 0) {
            document.getElementById("dailytime").value = "You are done!!";
        } else {
            document.getElementById("dailytime").value = timer_time(save_data[2]);
        } document.getElementById("time").value = timer_time(save_data[1]);
        localStorage.setItem("clear", JSON.stringify(save_data));
        level_up();
    }
};
function reset_timer() {
    let check = confirm('リセットしますか？');
    if (check == true) {
        save_data[0] = 1;
        save_data[1] = 0;
        localStorage.setItem("clear", JSON.stringify(save_data));
        stop = 0;
        setData_count_up();
    }
} function timer_time(Sa) {
    h = Math.floor(Sa / 3600);
    m = Math.floor(Sa / 60) % 60;
    s = Sa % 60;
    if (s < 10) {
        s = "0" + s;
    } if (m < 10) {
        m = "0" + m;
    } if (h < 10) { h = "0" + h } return h + ":" + m + ":" + s;
}