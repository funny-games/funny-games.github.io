var save_data = [0, 0, 0, 0, 0]; //level exp dailyLimit maxLevel totalTime
var today = new Date();
var stop = 0;
var x = 0;
var Sa, h, m, s, sleep_time = 1000;
var session_start_time;

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
    document.getElementById("time").value = save_data[4];
    document.getElementById("dailytime").value = save_data[2];
    document.getElementById("max_level_text").innerText = save_data[3];
    document.getElementById("exp").value = save_data[1];
    session_start_time = save_data[1];
    check_inactive_days();
} function timer_stop() {
    stop = 1;
    x = 0;
} function level_up() {
    while (true) {
        const need = getRequiredExp(save_data[0]);
        if (save_data[1] >= need) {
            save_data[1] -= need;
            save_data[0]++;
            saveLevelToSQL(save_data[0]);
        } else {
            break;
        }
    }

    document.getElementById("level").value = save_data[0];
    save_data[3] = Math.max(save_data[3], save_data[0]);
    document.getElementById("max_level_text").innerText = save_data[3];
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
        save_data[4] += deltaSec;
        save_data[2] -= deltaSec;
        if (save_data[2] < 0) {
            document.getElementById("dailytime").value = "You are done!!";
        } else {
            document.getElementById("dailytime").value = timer_time(save_data[2]);
        } document.getElementById("exp").value = save_data[1];
        document.getElementById("time").value = timer_time(save_data[4]);
        localStorage.setItem("clear", JSON.stringify(save_data));
        level_up();
    }
};
function reset_timer() {
    let check = confirm('リセットしますか？');
    if (check == true) {
        save_data = [1, 0, save_data[2], save_data[3], 0];
        localStorage.setItem("clear", JSON.stringify(save_data));
        stop = 0;
        setData_count_up();
    }
    let dbcheck = confirm('記録もリセットしますか？');
    if (dbcheck == true) {
        if (!window.db) {
            console.log("DB未初期化だよ！");
            return;
        }

        window.db.run("DELETE FROM log;");
        console.log("🔥 SQLの記録リセットしたよ！");
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
function saveLevelToSQL(level) {
    if (!window.db) {
        console.log("DBまだ初期化されてないよ！");
        return;
    }

    // 例: データベースにレコード追加
    window.db.run("CREATE TABLE IF NOT EXISTS log (date TEXT, level INTEGER);");
    const today = new Date().toISOString().split('T')[0];
    window.db.run("INSERT INTO log VALUES (?, ?);", [today, level]);

    console.log("保存したよ！");

    const dbData = db.export(); // Uint8Array

    const request = indexedDB.open("MyStudyDB", 1);
    request.onsuccess = function(event) {
        const dbStorage = event.target.result;
        const transaction = dbStorage.transaction("databases", "readwrite");
        const store = transaction.objectStore("databases");
        store.put(dbData, "main");
        console.log("💾 IndexedDBに保存したよ！");
    };
    request.onupgradeneeded = function(event) {
        const dbStorage = event.target.result;
        dbStorage.createObjectStore("databases");
    };
}

function check_inactive_days() {
    const lastActive = localStorage.getItem("last_active");
    const today = new Date().toISOString().split('T')[0];
    

    if (lastActive) {
        const last = new Date(lastActive);
        const now = new Date(today);
        const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            const decayRate = 0.01; // 1%ずつ
            const lostExp = Math.floor(save_data[1] * decayRate * diffDays);
            save_data[1] = Math.max(0, save_data[1] - lostExp);
            console.log(`経験値が${lostExp}減少（${diffDays}日間）`);
        }
    }

    localStorage.setItem("last_active", today);
}

function getRequiredExp(level) {
    if (level < 10) return 10;
    if (level < 50) return 120;
    if (level < 100) return 600;
    if (level < 500) return 3600;
    if (level < 1000) return 21600;
    return 43200; // 12時間ごとに0.5レベル上昇はここで別扱いしてもOK
}
