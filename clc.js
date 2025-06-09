let availableBlueStratagems = localStorage.getItem("selectedBlueStratagems");
let availableRedStratagems = localStorage.getItem("selectedRedStratagems");
let availableGreenStratagems = localStorage.getItem("selectedGreenStratagems");

let trueColour = "";

const sgOrder = localStorage.getItem("sgOrder");
document.addEventListener("DOMContentLoaded", () => {
    if (sgOrder) {
        const sgOrderArray = JSON.parse(sgOrder);
        // console.log(sgOrderArray);
        sgOrderArray.forEach((sgSlot, index) => {
            // console.log(square);
            updateBigSquareColour(`sg${index + 1}`, sgSlot);
        })
    }
})
// function colourDeSimplify(colour) {
//     if (colour === "blue") {
//         return "rgb(34, 136, 167)";
//     } else if (colour === "red") {
//         return "rgb(182, 46, 34)";
//     } else if (colour === "green") {
//         return "rgb(50, 96, 33)";
//     }
// }
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
            // console.log("hi")
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
    let doAlert = false;
    const bigSquares = [
        document.getElementById("sg1"),
        document.getElementById("sg2"),
        document.getElementById("sg3"),
        document.getElementById("sg4")
    ]
    bigSquares.forEach(bigSquare => {
        if (bigSquare.style.backgroundColor === "white") {
            // console.log(bigSquare);
            doAlert = true;
        }
    })
    if (doAlert === true) {
        alert("You must choose a stratagem type for all the stratagem slots!");
        return
    }
    else if (doAlert === false) {
        const returnOrder = [colourSimplify(document.getElementById("sg1").style.backgroundColor), colourSimplify(document.getElementById("sg2").style.backgroundColor), colourSimplify(document.getElementById("sg3").style.backgroundColor), colourSimplify(document.getElementById("sg4").style.backgroundColor)];
        // localStorage.setItem("sg1", colourSimplify(document.getElementById("sg1").style.backgroundColor));
        // localStorage.setItem("sg2", colourSimplify(document.getElementById("sg2").style.backgroundColor));
        // localStorage.setItem("sg3", colourSimplify(document.getElementById("sg3").style.backgroundColor));
        // localStorage.setItem("sg4", colourSimplify(document.getElementById("sg4").style.backgroundColor));
        localStorage.setItem("sgOrder", JSON.stringify(returnOrder));
        window.location.href = "random-loudout.html";
    }

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