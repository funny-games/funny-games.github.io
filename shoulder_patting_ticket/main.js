var ticket_count = 5;
var timer_count = 0;

function display_count(){
    document.getElementById("count").innerHTML = "x " + ticket_count;
}

function ticket_use(){
    if(timer_count == 0){
        ticket_count -= 1;
        if(ticket_count < 1){
            ticket_count = 0;
        }
        localStorage.setItem("ticket",JSON.stringify(ticket_count));
        display_count();
        timer_count = 121;
        count_timer();
    }
}

function ticket_add(){
    ticket_count += 2;
    localStorage.setItem("ticket",JSON.stringify(ticket_count));
    display_count();
}

function count_timer(){
    timer_count -= 1;

    if(timer_count < 1){
        timer_count = 0;
    }else{
        setTimeout(count_timer, 1030);
    }

    document.getElementById("time").innerHTML = timer_count;
}

window.onload = function(){

    var cdata_ticket = localStorage.getItem("ticket");

    if(cdata_ticket != null){
        ticket_count = JSON.parse(cdata_ticket);
    }else{
        localStorage.setItem("ticket",JSON.stringify(ticket_count));
    }

    document.getElementById("time").innerHTML = timer_count;
    display_count();
}