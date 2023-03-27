let video_link = [
    'tDrvgfDiEE4?start=19"'
];

let i = 0;

function set(){
    i = getRandomInt(0, 1);
    document.getElementById("video_video").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video_link[i] + ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}