function showtime(){
    var nowTime = new Date(); //  現在日時を得る
    var nowHour = nowTime.getHours(); // 時を抜き出す
    var nowMin  = nowTime.getMinutes(); // 分を抜き出す
    var nowSec  = nowTime.getSeconds(); // 秒を抜き出す
    if(nowHour < 10){
        nowHour = "0" + nowHour;
    }
    if(nowMin < 10){
        nowMin = "0" + nowMin;
    }
    if(nowSec < 10){
        nowSec = "0" + nowSec;
    }
    var msg = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("text").innerHTML = msg;
}
setInterval(showtime,1000);