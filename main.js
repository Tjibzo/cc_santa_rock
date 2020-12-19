$("#top").text("Hello world");

var score = 0;
var music = document.getElementById("music");
var is_running = false;

$("body").keypress(GameLogic());
$("#play").click(Main());
$("#score").text("Score : " + document.getElementById("score"));

var tiles = InitTab();
var newTab = [];

function InitTab() {
    var newTab = [];
    for (var j = 0; j < 152; j++) {
        var newTab = newTab + [Rng(2), Rng(2), Rng(2), Rng(2)];
    }
    for (var k = 0; j < 10; k++) {
        var newTab = newTab + [0, 0, 0, 0]
    }
    var newTab = newTab + [2, 2, 2, 2]
}

function Main() {
    var score = 0;
    var is_running = true;
    for (var i = 0; i < tiles.length; i++) {
        window.setTimeout()
    }
}