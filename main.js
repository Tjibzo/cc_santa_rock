$("#top").text("Hello world");

var score = 0;
var music = document.getElementById("music");
var is_running = false;

$("body").keypress(GameLogic());
$("#play").click(Main());
$("#score").text("Score : " + document.getElementById("score"));

var tiles = InitTab();
var newTab = [];

function Main(id, tiles) {
    var score = 0;
    var is_running = true;
    for (var i = 0; i < tiles.length; i++) {
        window.setTimeout(InitLine, 400 * index, id, tiles[i]);
    }
}

function InitTab() {
    var newTab = [];
    for (var j = 0; j < 152; j++) {
        newTab.push([Rng(2), Rng(2), Rng(2), Rng(2)]);
    }
    for (var k = 0; j < 10; k++) {
        newTab.push([0, 0, 0, 0]);
    }
    newTab.push([2, 2, 2, 2]);
    return (newTab)
}

function Rng(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function LaunchGame(id, tiles) {
    for (var index = 0; index < tiles.length; index++) {
        window.setTimeout(InitLine, 400 * index, id, tiles[index]);
    }
}

function InitLine(id, tiles) {
    for (var index = 0; index < tile.lengh; index++) {
        if (tile[index] === 1) {
            if (isRunning === true) {
                //appel
            }
        } else if (tile[index] === 2) {
            isRunning = false;
            $("#result").text("Good Job !");
        } else {
            //appel
        }
    }
}

function ChangeColor() {
    if (nb === 1) {
        $(id).css("background-color", "rgb(104, 4, 4)");
    }
}