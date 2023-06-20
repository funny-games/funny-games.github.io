function set() {
    const exa = document.getElementById("chapter").value;
    if(exa == 1){
        document.getElementById("1").hidden = false;
        document.getElementById("2").hidden = true;
    }
    else{
        document.getElementById("1").hidden = true;
        document.getElementById("2").hidden = false;
    }
}