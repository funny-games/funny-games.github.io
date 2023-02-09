let video_link = [
    'tDrvgfDiEE4?start=19"',//Japan
    'iyvfq5rejZU?start=7"',//France
    'ADMBnmgN2aQ"',//Germany
    'w5x_9KEogM8"',//USA
    '6SixoGCptgg"',//Russia
    '3t2SpQVRses"',//Ukraine
    '-uSKxNAIQ-8?start=7"',//Italy
    'LJ27xS27qyc"',//UK
    'ji4M8OHIqO8?start=7"'//China
];

let i;
i = getRandomInt(0, 9);

function set(){
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
    }
}