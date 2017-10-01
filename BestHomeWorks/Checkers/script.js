function makeFieldAndCheckers() {
    var field = document.getElementById("field");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let childField = document.createElement("div");
            childField.style.backgroundColor = ((j - i) % 2 == 0) ? "white" : "black";
            childField.dataset.id = i * 8 + j;
            childField.classList.add("childField");
            if ((j - i + 1) % 2 == 0) {
                let checker = document.createElement("img");
                checker.setAttribute("draggable", "true");
                checker.classList.add("checker");
                checker.id = i * 8 + j;
                if (i * 8 + j < 24) {
                    checker.setAttribute("src", "black.png");
                    checker.dataset.checkerColor = "black";
                    childField.appendChild(checker);
                }
                if (i * 8 + j > 39) {
                    checker.setAttribute("src", "white.png");
                    checker.dataset.checkerColor = "white";
                    childField.appendChild(checker);
                }
            }
            field.appendChild(childField);
        }
    }
}
var turn = 0;
function whoseTurn() { // true - white, false - black
    return turn % 2 == 0 ? true : false;
}
function allowedMoves(checker) {
    var checkerColor = checker.dataset.checkerColor;
    var forwardRM = 0, forwardLM = 0;
    var checkerPosition = parseInt(checker.parentNode.dataset.id);
    if (checkerColor == "white") {
        forwardRM = checkerPosition - 7;
        forwardLM = checkerPosition - 9;
    }
    else if (checkerColor == "black") {
        forwardRM = checkerPosition + 7;
        forwardLM = checkerPosition + 9;
    }
    for (let field of document.querySelectorAll(".childField")) {
        if (field.dataset.id == forwardRM || field.dataset.id == forwardLM) {
            if (field.style.backgroundColor != "white" && !field.hasChildNodes()) {
                let greenField = document.createElement("div");
                greenField.classList.add("rightMove");
                field.appendChild(greenField);
            }
        }
    }
}
function allowedBeats(checker) {
    var checkerColor = checker.dataset.checkerColor;
    let checkerPosition = parseInt(checker.parentNode.dataset.id);
    let enemies = [checkerPosition + 7,
        checkerPosition + 9, //Checker moves forward and backward
        checkerPosition - 9,
        checkerPosition - 7];
    let beats = [checkerPosition + 14,
        checkerPosition + 18,
        checkerPosition - 18,
        checkerPosition - 14];
    for (let i in enemies) {
        for (let field of document.querySelectorAll(".childField")) {
            if (field.dataset.id == enemies[i]) {
                if (field.hasChildNodes()
                    && field.firstChild.dataset.checkerColor != checkerColor) {
                    let finalPos = document.querySelector("div[data-id=\"" + beats[i] + "\"]");
                    if(finalPos != null) {
                        if (!finalPos.hasChildNodes() && finalPos.style.backgroundColor != "white") {
                            let redField = document.createElement("div");
                            redField.classList.add("beatMove");
                            finalPos.appendChild(redField);
                        }
                    }
                }
            }
        }
    }
}
makeFieldAndCheckers();
document.addEventListener("dragstart", function (e) {
    let t = whoseTurn() ? "white" : "black";
    if (e.target.dataset.checkerColor == t) {
        e.dataTransfer.setData("imageId", e.target.id);
        allowedBeats(e.target);
        if (document.querySelectorAll(".beatMove").length == 0) {
            console.log("CAN MOVE!");
            allowedMoves(e.target);
        }
    }
}, false);
document.addEventListener("dragover", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("drop", function (e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("imageId");
    if (e.target.classList.contains("rightMove")) {
        e.target.parentNode.appendChild(document.getElementById(id));
        turn++;
    }
    if (e.target.classList.contains("beatMove")) {
        let fId = document.getElementById(id).parentNode.dataset.id; // the checker field's id
        let beatenId = (parseInt(fId) + parseInt(e.target.parentNode.dataset.id)) / 2;
        console.log("BeatenId: " + beatenId);
        document.querySelector("div[data-id=\"" + beatenId + "\"]").firstChild.remove();
        e.target.parentNode.appendChild(document.getElementById(id));
        for (let redField of document.querySelectorAll(".beatMove")) {
            redField.remove();
        }
        allowedBeats(document.getElementById(id));
        if (document.querySelectorAll(".beatMove").length != 0) {
            for (let redField of document.querySelectorAll(".beatMove")) {
                redField.remove();
            }
            var event = new Event("dragstart");
            document.getElementById(id).dispatchEvent(event);
        }
        else{
            turn++;
        }
    }
    // var moves = e.dataTransfer.getData("moves");
    // for(let move of moves){
    //     if(e.target.dataset.id == move){
    //         e.target.appendChild(document.getElementById(id));
    //         turn++;
    //         break;
    //     }
    // }
    for (let redField of document.querySelectorAll(".beatMove")) {
        redField.remove();
    }
    for (let greenField of document.querySelectorAll(".rightMove")) {
        greenField.remove();
    }
}, false);