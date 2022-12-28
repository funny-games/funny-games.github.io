//それぞれのデータとタイマーカウントの定義
var save_data = new Array(0,0);
var stop = 0;
var Sa, h, m, s;
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let sea = new Audio("https://funny-games.github.io/music/sound_of_the_sea.mp3");

function sound(){
    sea.play();
    sea.loop = true;
}

function sound_stop(){
    sea.loop = false;
}

//sleep関数の作成
function sleep(waitMsec) {
    var startMsec = new Date();

    while (new Date() - startMsec < waitMsec);
}

//データのセット
function setData_count_up(){
    var cdata = localStorage.getItem("clear");

    if(cdata != null){
        save_data = JSON.parse(cdata);
    }

    document.getElementById("level").value = save_data[0];
    document.getElementById("time").value = save_data[1];
}

function timer_stop(){
    stop = 1;
}

function level_up(){
    if(save_data[0] < 10 && save_data[1] % 10 == 0){
        save_data[0] += 1;
    }else if(save_data[0] < 50 && save_data[1] % 120 == 0){
        save_data[0] += 1;
    }else if(save_data[0] < 100 && save_data[1] % 600 == 0){
        save_data[0] += 1;
    }else if(save_data[0] < 500 && save_data[1] % 3600 == 0){
        save_data[0] += 1;
    }else if(save_data[0] < 1000 && save_data[1] % 21600 == 0){
        save_data[0] += 1;
    }else if(save_data[1] % 43200 == 0){
        save_data[0] += 0.5;
    }

    document.getElementById("level").value = save_data[0];
}

//もしスタートボタンが押されたら
async function timer_start(){
    stop = 0;

    while(stop < 1){
        await _sleep(1000);

        save_data[1] = save_data[1] + 1;

        Sa = save_data[1];
        h = Math.floor(Sa/3600);
        m = Math.floor(Sa/60)%60;
        s = Sa%60;
        if(s < 10){
            s = "0" + s;
        }
        if(m < 10){
            m = "0" + m;
        }
        if(h < 10){
            h = "0" + h;
        }

        document.getElementById("time").value = h + ":" + m + ":" + s;

        level_up();
    }
};

//もしセーブボタンが押されたら
document.getElementById("save").addEventListener("click",function(){
    localStorage.setItem("clear",JSON.stringify(save_data));
},false);

//もしリセットボタンが押されたら
function reset_timer(){
    let check = confirm('リセットしますか？');
    
    if(check == true){
        save_data[0] = 1;
        save_data[1] = 0;

        localStorage.setItem("clear",JSON.stringify(save_data));

        stop = 0;

        setData_count_up();
    }
}