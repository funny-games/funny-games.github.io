var save_data = new Array(0,0);
var today = new Date();
var stop = 0;
var x = 0;
var Sa, h, m, s, sleep_time=1000;

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let sea = new Audio("https://funny-games.github.io/music/sound_of_the_sea.mp3");
function sound(){sea.play();
sea.loop = true;
}function sound_stop(){sea.loop = false;
}function sleep(waitMsec) {var startMsec = new Date();
while (new Date() - startMsec < waitMsec);
}function setData_count_up(){var cdata = localStorage.getItem("clear");
if(cdata != null){save_data = JSON.parse(cdata);
}if(today.getDay() == 0 || today.getDay() == 6){save_data[2] = 18000;
}else{save_data[2] = 10800;
}document.getElementById("level").value = save_data[0];
document.getElementById("time").value = save_data[1];
document.getElementById("dailytime").value = save_data[2];
}function timer_stop(){stop = 1;
x = 0;
}function level_up(){if(save_data[0] < 10 && save_data[1] % 10 == 0){save_data[0] += 1;
}else if(save_data[0] < 50 && save_data[1] % 120 == 0){save_data[0] += 1;
}else if(save_data[0] < 100 && save_data[1] % 600 == 0){save_data[0] += 1;
}else if(save_data[0] < 500 && save_data[1] % 3600 == 0){save_data[0] += 1;
}else if(save_data[0] < 1000 && save_data[1] % 21600 == 0){save_data[0] += 1;
}else if(save_data[1] % 43200 == 0){save_data[0] += 0.5;
}document.getElementById("level").value = save_data[0];
}async function timer_start(){stop = 0;
x += 1;
if(x > 1){timer_stop();
}while(stop < 1){await _sleep(sleep_time);
if(sleep_time != 1000){stop = 1;
alert("改造されたためリセットします。");
sleep_time = 1000;
save_data[0] = 1;
save_data[1] = 0;
localStorage.setItem("clear",JSON.stringify(save_data));
}save_data[1] = save_data[1] + 1;
save_data[2] = save_data[2] - 1;
if(save_data[2] < 0){document.getElementById("dailytime").value = "You are done!!";
}else{document.getElementById("dailytime").value = timer_time(save_data[2]);
}document.getElementById("time").value = timer_time(save_data[1]);
localStorage.setItem("clear",JSON.stringify(save_data));
level_up();
}};
function reset_timer(){let check = confirm('リセットしますか？');
if(check == true){save_data[0] = 1;
save_data[1] = 0;
localStorage.setItem("clear",JSON.stringify(save_data));
stop = 0;
setData_count_up();
}}function timer_time(Sa){h = Math.floor(Sa/3600);
m = Math.floor(Sa/60)%60;
s = Sa%60;
if(s < 10){s = "0" + s;
}if(m < 10){m = "0" + m;
}if(h < 10){h = "0" + h}return h + ":" + m + ":" + s;
}