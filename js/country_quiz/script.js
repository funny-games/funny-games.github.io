
let i = 0, select;
timestamp = 0;



let flag_link = [
    "a/a4/Flag_of_the_United_States.svg",
    "c/cf/Flag_of_Canada.svg"
];

function start(){
    timestamp++;
    window.requestAnimationFrame(update);

    if (timestamp % 10 == 0 ){
        select = document.getElementById("kind_select").value;
        if(select == 0){
            document.getElementById("quiz").innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/" + flag_link[0] + "'>";
        }else if(select == 1){
            document.getElementById("quiz").innerHTML = "<p>" + i + "</p>";
        }   
    }
}

function RandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}