let prog = document.getElementById("progress");
let set_level, bar_max;

function level_set(){
    set_level = Number(document.getElementById("goal_level").value);

    localStorage.setItem("goal",JSON.stringify(set_level));

    bar_max = getTimeToLevel(set_level);
}

function progression(){
    prog.value = save_data[1] + getTimeToLevel(save_data[0]);

    prog.max = bar_max;

    if(prog.max <= prog.value){
        document.getElementById("goal_label").innerText = "目標達成おめでとう！\n新しい目標を立てよう！";
    }else{
        document.getElementById("goal_label").innerText = "";
    }

    setTimeout(progression,100);
}

function setData_time_elapsed_level(){
    var cdata_goal_time = localStorage.getItem("goal");

    if(cdata_goal_time != null){
        set_level = Number(JSON.parse(cdata_goal_time));
    }

    document.getElementById("goal_level").value = set_level;
    level_set();
    progression();
}

function getTimeToLevel(level) {
    let time = 0;
    for (let i = 1; i < level; i++) {
        if (i < 10) time += 10;
        else if (i < 50) time += 120;
        else if (i < 100) time += 600;
        else if (i < 500) time += 3600;
        else if (i < 1000) time += 21600;
        else time += 86400;
    }
    return time;
}