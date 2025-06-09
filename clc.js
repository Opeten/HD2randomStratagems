let availableBlueStratagems = localStorage.getItem("selectedBlueStratagems");
let availableRedStratagems = localStorage.getItem("selectedRedStratagems");
let availableGreenStratagems = localStorage.getItem("selectedGreenStratagems");

let trueColour = "";



function colourSimplify(colour) {
    if (colour === "rgb(34, 136, 167)") {
        return "blue";
    } else if (colour === "rgb(182, 46, 34)") {
        return "red";
    } else if (colour === "rgb(50, 96, 33)") {
        return "green";
    }
}

function checkWhichAStoIncrease(squareColour, colour) {
    if (squareColour === colour) {
        return
    } else if (squareColour !== colour) {
        if (squareColour === "blue") {
            availableBlueStratagems += 1;
            console.log("hi")
        } else if (squareColour === "red") {
            availableRedStratagems += 1;
        } else if (squareColour === "green") {
            availableGreenStratagems += 1;
        }

    } else if (squareColour === "white") {
        return
    }
}
function sendToRandomLoudout() {
    const bigSquares = [
        document.getElementById("sg1"),
        document.getElementById("sg2"),
        document.getElementById("sg3"),
        document.getElementById("sg4")
    ]
    bigSquares.forEach(bigSquare => {
        if (bigSquare.style.backgroundColor === "white") {
            alert("You must choose a stratagem type for all the stratagem slots!");
            return
        }
    })
    localStorage.setItem("sg1", (document.getElementById("sg1").style.backgroundColor).colourSimplify());
    localStorage.setItem("sg2", (document.getElementById("sg2").style.backgroundColor).colourSimplify());
    localStorage.setItem("sg3", (document.getElementById("sg3").style.backgroundColor).colourSimplify());
    localStorage.setItem("sg4", (document.getElementById("sg4").style.backgroundColor).colourSimplify()); 
    window.location.href = "random-loudout.html";
}

function updateBigSquareColour(squareId, colour) {
    const currentColour = document.getElementById(squareId).style.backgroundColor;
    if (colour === "blue") {
        trueColour = "rgb(34, 136, 167)";
        if (availableBlueStratagems === 0) {
            alert("You have no more blue stratagems available to use!");
            return
        } else if (currentColour !== "rgb(34, 136, 167)") {
            availableBlueStratagems -= 1;
            checkWhichAStoIncrease(colourSimplify(currentColour), colour);
        }
    } else if (colour === "red") {
        trueColour = "rgb(182, 46, 34)";
        if (availableRedStratagems === 0) {
            alert("You have no more red stratagems available to use!");
            return
        } else {
            availableRedStratagems -= 1;
            checkWhichAStoIncrease(colourSimplify(currentColour), colour);
        }
    } else if (colour === "green") {

        trueColour = "rgb(50, 96, 33)";
        if (availableGreenStratagems === 0) {
            alert("You have no more green stratagems available to use!");
            return
        } else {
            availableGreenStratagems -= 1;
            checkWhichAStoIncrease(colourSimplify(currentColour), colour);
        }
    }

    document.getElementById(squareId).style.backgroundColor = trueColour;
}