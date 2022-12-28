let save_data_memo = ["",""];
let teare_up = document.getElementById("textarea_up");
let teare_down = document.getElementById("textarea_down");

function setData_memo(){
    var cdata = localStorage.getItem("memo");

    if(cdata != null){
        save_data_memo = JSON.parse(cdata);
    }

    teare_up.innerHTML = save_data_memo[0];
    teare_down.innerHTML = save_data_memo[1];
}

function save_memo_data(){
    save_data_memo[0] = teare_up.value;
    save_data_memo[1] = teare_down.value;
    localStorage.setItem("memo",JSON.stringify(save_data_memo));
}

function reset_memo(){
    save_data_memo[0] = "";
    save_data_memo[1] = "";
    localStorage.setItem("memo",JSON.stringify(save_data_memo));

    setData_memo();
}