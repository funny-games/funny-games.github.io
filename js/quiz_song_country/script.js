let video_link = [
    'tDrvgfDiEE4?start=19"',//Japan 1
    'iyvfq5rejZU?start=7"',//France 2
    'ADMBnmgN2aQ"',//Germany 3
    'w5x_9KEogM8"',//USA 4
    '6SixoGCptgg"',//Russia 5
    '3t2SpQVRses"',//Ukraine 6
    '-uSKxNAIQ-8?start=7"',//Italy 7
    'LJ27xS27qyc"',//UK 8
    'ji4M8OHIqO8?start=7"',//China 9
    //-----Easy-----//
    'kfTzF1Nfpo8"',//New Zealand 10
    'Ra3gQL12X_o?start=7"',//Brazil 11
    'aQyiZNZaj00"',//Australia 12 
    'rRXGyIqUHhs?start=9"',//India 13
    'egIZi981Ptg?start=9"',//Mexico 14
    'dI7ffUcptWQ"',//Indonesia 15
    '9RlKkvH4R9k"',//Canada 16
    'Jfy9d57eugo?start=7"',//South Africa 17
    'ng2yzsvG9qA?start=10"'//Saudi Arabia 18
    //-----Normal-----//
];

let i = 0;

function set(){
    const exa = document.getElementById("asdf").value;
    if(exa == 1){
        i = getRandomInt(0, 8);
    }else if(exa == 2){
        i = getRandomInt(9, 18);
    }else if(exa == 3){
        i = getRandomInt(0, 18);
    }
    document.getElementById("text").innerHTML = "";
    document.getElementById("answer").value = "";
    document.getElementById("video_video").innerHTML = '<iframe width="2" height="30" src="https://www.youtube.com/embed/' + video_link[i] + ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function answer(){
    let an;
    an = document.getElementById("answer").value;
    switch(i){
        case 0:
            if(an == "日本" || an == "ジャパン" || an == "japan" || an == "Japan" || an == "日本国" || an == "君が代"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/tDrvgfDiEE4?start=19";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 1:
            if(an == "フランス" || an == "フランス共和国" || an == "france" || an == "France" || an == "ラ・マルセイエーズ"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/iyvfq5rejZU?start=7";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 2:
            if(an == "ドイツ" || an == "ドイツ連邦共和国" || an == "germany" || an == "Germany" || an == "ドイツの歌"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/ADMBnmgN2aQ";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 3:
            if(an == "アメリカ" || an == "アメリカ合衆国" || an == "USA" || an == "United States of America" || an == "星条旗"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/w5x_9KEogM8";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 4:
            if(an == "ロシア" || an == "ロシア連邦" || an == "russia" || an == "Russia" || an == "ロシア連邦国歌"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/6SixoGCptgg";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 5:
            if(an == "ウクライナ" || an == "ukraine" || an == "Ukraine" || an == "ウクライナは滅びず"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/3t2SpQVRses";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 6:
            if(an == "イタリア" || an == "イタリア共和国" || an == "italy" || an == "Italy" || an == "マメーリの賛歌"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/-uSKxNAIQ-8?start=7";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 7:
            if(an == "イギリス" || an == "グレートブリテン及び北アイルランド連合王国" || an == "UK" || an == "United Kingdom" || an == "United Kingdom of Great Britain and Northern Ireland" || an == "神よ国王を守り給え"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/LJ27xS27qyc";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 8:
            if(an == "中国" || an == "中華人民共和国" || an == "china" || an == "China" || an == "義勇軍進行曲"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/ji4M8OHIqO8?start=7";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 9:
            if(an == "ニュージーランド" || an == "new zealand" || an == "New Zealand" || an == "神よニュージーランドを守り給え"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/kfTzF1Nfpo8";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 10:
            if(an == "ブラジル" || an == "ブラジル連邦共和国" || an == "brazil" || an == "Brazil" || an == "Federative Republic of Brazil" || an == "ブラジルの国歌"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/Ra3gQL12X_o?start=7";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 11:
            if(an == "オーストラリア" || an == "オーストラリア連邦" || an == "australia" || an == "Australia" || an == "Commonwealth of Australia" || an == "アドヴァンス・オーストラリア・フェア"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/aQyiZNZaj00";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 12:
            if(an == "インド" || an == "india" || an == "India" || an == "ジャナ・ガナ・マナ" || an == "जन गण मन"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/rRXGyIqUHhs?start=9";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 13:
            if(an == "メキシコ" || an == "メキシコ合衆国" || an == "mexico" || an == "Mexico" || an == "United Mexican States" || an == "メキシコ国歌"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/egIZi981Ptg?start=9";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 14:
            if(an == "インドネシア" || an == "インドネシア共和国" || an == "indonesia" || an == "Indonesia" || an == "Republic of Indonesia" || an == "偉大なるインドネシア"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/dI7ffUcptWQ";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 15:
            if(an == "カナダ" || an == "canada" || an == "Canada" || an == "オー・カナダ"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/9RlKkvH4R9k";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 16:
            if(an == "南アフリカ" || an == "南アフリカ共和国" || an == "south africa" || an == "South Africa" || an == "Republic of South Africa" || an == "南アフリカの国歌"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/Jfy9d57eugo?start=7";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
        case 17:
            if(an == "サウジアラビア" || an == "サウジアラビア王国" || an == "saudi arabia" || an == "Saudi Arabia" || an == "Kingdom of Saudi Arabia" || an == "サウジアラビアの国歌"){
                document.getElementById("text").innerHTML = "That's right! url: https://youtu.be/ng2yzsvG9qA?start=10";
            }else{
                document.getElementById("text").innerHTML = "No";
            }
            break;
    }
}