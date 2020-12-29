var score = 0;
var music = document.getElementById("music");
var is_running = false;
var tiles = InitTab();

$("body").keypress(GameLogic);
$("#play").click(Main);
$("#score").text("Score : " + score);


function Main() {
    if (!is_running) {
        var score = 0;
        $("#score").text("Score : " + score);
        is_running = true;
        music.play();
        for (var index = 0; index < tiles.length; index++) {
            window.setTimeout(LaunchGame, 400 * index, index, tiles);
        }
    }
}

function InitTab() {
    var newTab = [];
    for (var j = 0; j < 200; j++) {
        newTab.push([Rng(2), Rng(2), Rng(2), Rng(2)]);
    }
    for (var k = 0; k < 8; k++) {
        newTab.push([0, 0, 0, 0]);
    }
    newTab.push([2, 2, 2, 2]);
    return (newTab);
}

function Rng(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function LaunchGame(id, tiles) {
    for (var index = 0; index < tiles.length; index++) {
        window.setTimeout(InitLine, 400 * index, id, tiles[index]);
    }
}

function InitLine(id, tile) {
    console.log(tile)
    for (var index = 0; index < tile.length; index++) {
        if (tile[index] === 1) {
            if (is_running === true) {
                ChangeColor("#line-" + id + "-" + (index + 1), (index + 1));
            }
        } else if (tile[index] === 2) {
            is_running = false;
            music.pause();
            $("#result").text("Good Job !");
        } else {
            ClearColor("#line-" + id + "-" + (index + 1));
        }
    }
}

function ChangeColor(id, nb) {
    if (nb === 1) {
        $(id).css("background-color", "rgb(104, 4, 4)");
    } else if (nb === 2) {
        $(id).css("background-color", "rgb(254, 19, 16");
    } else if (nb === 3) {
        $(id).css("background-color", "rgb(224,223,229)");
    } else if (nb === 4) {
        $(id).css("background-color", "rgb(9, 47, 0)");
    }
}

function ClearColor(id) {
    $(id).css("background-color", "transparent");
}

function GameLogic(event) {
    if (is_running == true) {
        if (event.keyCode == 97) {
            if ($("#line-9-1").css("background-color") === "rgb(0, 128, 0)") {
                score++;
            } else {
                score--;
            }
            $("#line-9-1").css("background-color", "#000");
        }
        if (event.keyCode == 122) {
            if ($("#line-9-2").css("background-color") === "rgb(254, 19, 16)") {
                score++;
            } else {
                score--;
            }
            $("#line-9-2").css("background-color", "#000");
        }
        if (event.keyCode == 101) {
            if ($("#line-9-3").css("background-color") === "rgb(224, 223, 229)") {
                score++;
            } else {
                score--;
            }
            $("#line-9-3").css("background-color", "#000");
        }
        if (event.keyCode == 114) {
            if ($("#line-9-4").css("background-color") === "rgb(9, 47, 0)") {
                score++;
            } else {
                score--;
            }
            $("#line-9-4").css("background-color", "#000");
        }
        $("#score").text("Score : " + score);
        window.setTimeout(ClearColor, 100, "#line-9-1");
        window.setTimeout(ClearColor, 100, "#line-9-2");
        window.setTimeout(ClearColor, 100, "#line-9-3");
        window.setTimeout(ClearColor, 100, "#line-9-4");
    }

}