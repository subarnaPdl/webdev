// Variable Initialization
var box1 = document.getElementById("box-1");
var box2 = document.getElementById("box-2");
var box3 = document.getElementById("box-3");
var box4 = document.getElementById("box-4");
var box5 = document.getElementById("box-5");
var box6 = document.getElementById("box-6");
var box7 = document.getElementById("box-7");
var box8 = document.getElementById("box-8");
var box9 = document.getElementById("box-9");

//Store the letters on their respective position
var dict = {
    "box1": "",
    "box2": "",
    "box3": "",
    "box4": "",
    "box5": "",
    "box6": "",
    "box7": "",
    "box8": "",
    "box9": "",
}

// Event Listners
box1.addEventListener("click", function () {
    assigner("box1", box1);
})
box2.addEventListener("click", function () {
    assigner("box2", box2);
})
box3.addEventListener("click", function () {
    assigner("box3", box3);
})
box4.addEventListener("click", function () {
    assigner("box4", box4);
})
box5.addEventListener("click", function () {
    assigner("box5", box5);
})
box6.addEventListener("click", function () {
    assigner("box6", box6);
})
box7.addEventListener("click", function () {
    assigner("box7", box7);
})
box8.addEventListener("click", function () {
    assigner("box8", box8);
})
box9.addEventListener("click", function () {
    assigner("box9", box9);

})

reset.addEventListener("click", function () {
    document.location.reload(true);
})

var turnText = "X";

// Function to change the letter one by one
function assigner(boxNumText, boxNumComp) {
    if (dict[boxNumText] == "") {
        document.getElementById("comment").innerHTML = turnText + "'s turn";
        if (turnText == "X") {
            turnText = "O";
        } else {
            turnText = "X";
        }
        dict[boxNumText] = (boxNumComp).innerHTML = turnText;
    }
    checker();
}

//Function to check winning condition
var comText = document.getElementById("comment");
function checker() {
    if (dict["box1"] == dict["box2"] && dict["box1"] == dict["box3"] && dict["box1"] != "") {
        comText.innerHTML = dict["box1"] + " won the Game";
    } if (dict["box4"] == dict["box5"] && dict["box4"] == dict["box6"] && dict["box4"] != "") {
        comText.innerHTML = dict["box4"] + " won the Game";
    } if (dict["box7"] == dict["box8"] && dict["box7"] == dict["box9"] && dict["box7"] != "") {
        comText.innerHTML = dict["box7"] + " won the Game";
    } if (dict["box1"] == dict["box4"] && dict["box1"] == dict["box7"] && dict["box1"] != "") {
        comText.innerHTML = dict["box1"] + " won the Game";
    } if (dict["box2"] == dict["box5"] && dict["box2"] == dict["box8"] && dict["box2"] != "") {
        comText.innerHTML = dict["box2"] + " won the Game";
    } if (dict["box3"] == dict["box6"] && dict["box3"] == dict["box9"] && dict["box3"] != "") {
        comText.innerHTML = dict["box3"] + " won the Game";
    } if (dict["box1"] == dict["box5"] && dict["box1"] == dict["box9"] && dict["box1"] != "") {
        comText.innerHTML = dict["box1"] + " won the Game";
    } if (dict["box3"] == dict["box5"] && dict["box3"] == dict["box7"] && dict["box3"] != "") {
        comText.innerHTML = dict["box3"] + " won the Game";
    }
}