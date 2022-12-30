let prog = document.getElementById("progress");
let set_level, bar_max;

function level_set(){
    set_level = document.getElementById("goal_level").value;

    localStorage.setItem("goal",JSON.stringify(set_level));

    bar_max = 0;

    if(set_level <= 10){
        for(let i=1;i<set_level;i++){
            bar_max += 10;
        }
    }else if(10 < set_level && set_level <= 50){
        for(let i=0;i<set_level-10;i++){
            bar_max += 120;
        }
    }else if(50 < set_level && set_level <= 100){
        for(let i=0;i<set_level-50;i++){
            bar_max += 600;
        }
    }else if(100 < set_level && set_level <= 500){
        for(let i=0;i<set_level-100;i++){
            bar_max += 3600;
        }
    }else if(500 < set_level && set_level <= 1000){
        for(let i=0;i<set_level-500;i++){
            bar_max += 21600;
        }
    }else{
        for(let i=0;i<set_level-1000;i++){
            bar_max += 86400;
        }
    }
    prog.max = bar_max;
}

function progression(){
    prog.value = save_data[1];

    if(prog.max <= prog.value){
        document.getElementById("goal_label").innerText = "目標達成おめでとう！\n新しい目標を立てよう！";
    }else{
        document.getElementById("goal_label").innerText = "";
    }

    setTimeout("progression()",100);
}

function setData_time_elapsed_level(){
    var cdata_goal_time = localStorage.getItem("goal");

    if(cdata_goal_time != null){
        set_level = JSON.parse(cdata_goal_time);
    }

    document.getElementById("goal_level").value = set_level;
    level_set();
    progression();
}