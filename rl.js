const sg1 = localStorage.getItem("sg1")
const sg2 = localStorage.getItem("sg2")
const sg3 = localStorage.getItem("sg3")
const sg4 = localStorage.getItem("sg4")

const selectedStratagemPattern = JSON.parse(localStorage.getItem("sgOrder"));
// console.log(selectedStratagemPattern);
const preselectedOOB = localStorage.getItem("preselectedOOB");
let only1Backpack = document.getElementById("Only1Backpack").checked;
document.getElementById("Only1Backpack").addEventListener("change", () => {
    only1Backpack = document.getElementById("Only1Backpack").checked;
    localStorage.setItem("preselectedOOB", only1Backpack);
    // console.log("Only 1 backpack: ", only1Backpack);
});
if (preselectedOOB === "true") {
    only1Backpack = true;
    document.getElementById("Only1Backpack").checked = true;
}
const selectedStratagems = localStorage.getItem("selectedStratagems");

const sg1Div = document.getElementById("sg1");
const sg2Div = document.getElementById("sg2");
const sg3Div = document.getElementById("sg3");
const sg4Div = document.getElementById("sg4");

const primaryDiv = document.getElementById("primary");
const secondaryDiv = document.getElementById("secondary");
const throwableDiv = document.getElementById("throwable");

const sgDivs = [sg1Div, sg2Div, sg3Div, sg4Div];
const weaponDivs = [primaryDiv, secondaryDiv, throwableDiv];

function colourSimplify(colour) {
    if (colour === "rgb(34, 136, 167)") {
        return "blue";
    } else if (colour === "rgb(182, 46, 34)") {
        return "red";
    } else if (colour === "rgb(50, 96, 33)") {
        return "green";
    }
}

const backPackStratagems = [
    `AX/AR-23 "Guard Dog"`,
    `AX/LAS-5 "Guard Dog" Rover`,
    `AX/TX-13 "Guard Dog" Dog Breath`,
    "B-1 Supply Pack",
    "B-100 Portable Hellbomb",
    "LIFT-850 Jump Pack",
    "LIFT-860 Hover Pack",
    "SH-20 Ballistic Shield Backpack",
    "SH-32 Shield Generator Pack",
    "SH-51 Directional Shield",
    `AX/ARC-3 "Guard Dog" K-9`,
    "LIFT-182 Warp Pack"
];


const blueStratagemsPerm = [
    "MG-43 Machine Gun",
    "APW-1 Anti-Materiel Rifle",
    "M-105 Stalwart",
    "EAT-17 Expendable Anti-Tank",
    "GR-8 Recoilless Rifle",
    "FLAM-40 Flamethrower",
    "AC-8 Autocannon",
    "MG-206 Heavy Machine Gun",
    "RL-77 Airburst Rocket Launcher",
    "MLS-4X Commando",
    "RS-422 Railgun",
    "FAF-14 spear",
    "StA-X3 W.A.S.P. Launcher",
    "LIFT-850 Jump Pack",
    "M-102 Fast Recon Vehicle",
    "B-1 Supply Pack",
    "GL-21 Grenade Launcher",
    "LAS-98 Laser Cannon",
    `AX/LAS-5 "Guard Dog" Rover`,
    "SH-20 Ballistic Shield Backpack",
    "ARC-3 Arc Thrower",
    "LAS-99 Quasar Cannon",
    "SH-32 Shield Generator Pack",
    `AX/AR-23 "Guard Dog"`,
    "EXO-45 Patriot Exosuit",
    "EXO-49 Emancipator Exosuit",
    "TX-41 Sterilizer",
    `AX/TX-13 "Guard Dog" Dog Breath`,
    "SH-51 Directional Shield",
    "B-100 Portable Hellbomb",
    "LIFT-860 Hover Pack",
    "CQC-1 One True Flag",
    "GL-52 De-Escalator",
    `AX/ARC-3 "Guard Dog" K-9`,
    "PLAS-45 Epoch",
    "LIFT-182 Warp Pack",
    "S-11 Speargun",
    "EAT-700 Expendable Napalm",
    "MS-11 Solo Silo"
];
const redStratagemsPerm = [
    "Orbital Gatling Barrage",
    "Orbital Airburst Strike",
    "Orbital 120mm HE Barrage",
    "Orbital 380mm HE Barrage",
    "Orbital Walking Barrage",
    "Orbital Laser",
    "Orbital Napalm Barrage",
    "Orbital Railcannon Strike",
    "Eagle Strafing Run",
    "Eagle Airstrike",
    "Eagle Cluster Bomb",
    "Eagle Napalm Airstrike",
    "Eagle Smoke Strike",
    "Eagle 110mm Rocket Pods",
    "Eagle 500kg Bomb",
    "Orbital Precision Strike",
    "Orbital Gas Strike",
    "Orbital EMS Strike",
    "Orbital Smoke Strike"
];
const greenStratagemsPerm = [
    "E/MG-101 HMG Emplacement",
    "FX-12 Shield Generator Relay",
    "A/ARC-3 Tesla Tower",
    "E/GL-21 Grenadier Battlement",
    "MD-6 Anti-Personnel Minefield",
    "MD-I4 Incendiary Mines",
    "MD-17 Anti-Tank Mines",
    "MD-8 Gas Mines",
    "A/MG-43 Machine Gun Sentry",
    "A/G-16 Gatling Sentry",
    "A/M-12 Mortar Sentry",
    "A/AC-8 Autocannon Sentry",
    "A/MLS-4X Rocket Sentry",
    "A/M-23 EMS Mortar Sentry",
    "E/AT-12 Anti-Tank Emplacement",
    "A/FLAM-40 Flame Sentry",
    "A/LAS-98 Laser Sentry"
];




let blueStratagems = blueStratagemsPerm;
let redStratagems = redStratagemsPerm;
let greenStratagems = greenStratagemsPerm;

blueStratagems = blueStratagems.filter(stratagem => selectedStratagems.includes(stratagem));
redStratagems = redStratagems.filter(stratagem => selectedStratagems.includes(stratagem));
greenStratagems = greenStratagems.filter(stratagem => selectedStratagems.includes(stratagem));

function findImageFilename(stratagem) {
    // console.log(stratagem);
    const lowercaseStratagem = stratagem.toLowerCase();
    // console.log(lowercaseStratagem);
    const replacedSpace = lowercaseStratagem.replace(/\s+/g, "-");
    const replacedSlash = replacedSpace.replace(/\//g, "-");
    const replacedQuote = replacedSlash.replace(/\"/g, "'");

    // console.log(replacedSpace);
    return `./images/${replacedQuote}.webp`;
}

// sgDivs.forEach((div, index) => {
//     if (selectedStratagemPattern[index] === "blue") {
//         div.style.backgroundColor = "rgb(34, 136, 167)"
//     } else if (selectedStratagemPattern[index] === "red") {
//         div.style.backgroundColor = "rgb(182, 46, 34)"
//     } else if (selectedStratagemPattern[index] === "green") {
//         div.style.backgroundColor = "rgb(50, 96, 33)"
//     }
// })
// function returnSG(stratagem, gaveID = false) {
//     // console.log(blueStratagemsPerm.includes(stratagem.id));
//     if (gaveID === true) {
//         stratagem.id = stratagem;
//         // console.log(stratagem);
//     }
//     else if (gaveID === false) {
//         if (stratagem.id === "") {
//             stratagem.id = stratagem.textContent;
//         }
//     }
//     // console.log(stratagem);
//     // return
//     let SGcolour = "";
//     // if (stratagem.id === "") {
//     //     stratagem.id = stratagem.textContent;
//     // }
//     if (blueStratagemsPerm.includes(stratagem.id)) {
//         // console.log("blue");
//         SGcolour = "blue";
//     } else if (redStratagemsPerm.includes(stratagem.id)) {
//         SGcolour = "red";
//         // console.log("red");
//     } else if (greenStratagemsPerm.includes(stratagem.id)) {
//         SGcolour = "green";
//         // console.log("green");
//     }
//     if (SGcolour === "") {
//         console.log("stratagem not found");
//         console.log(stratagem);
//         console.log(stratagem.id);
//         console.log(gaveID);
//         return;
//     }

//     if (SGcolour === "blue") {
//         blueStratagems.push(stratagem.id);
//     } else if (SGcolour === "red") {
//         redStratagems.push(stratagem.id);
//     } else if (SGcolour === "green") {
//         greenStratagems.push(stratagem.id);
//     }
// }
let oneBackpackSGUsed = false;

function getRandom(div, index) {
    // console.log(div);
    if (selectedStratagemPattern[index] === "blue") {
        const selectedRandomSG = blueStratagems[Math.floor(Math.random() * blueStratagems.length)];
        blueStratagems.splice(blueStratagems.indexOf(selectedRandomSG), 1);
        if (only1Backpack) {
            if (backPackStratagems.includes(selectedRandomSG)) {
                // console.log("backpack stratagem");
                if (!oneBackpackSGUsed) {
                    // backPackStratagems.forEach(stratagem => {
                    // console.log(selectedRandomSG);
                    //     blueStratagems.splice(stratagem, 1);
                    // })
                    blueStratagems = blueStratagems.filter(stratagem => !backPackStratagems.includes(stratagem));
                    // console.log(blueStratagems);

                }
                oneBackpackSGUsed = true;

            }
        }
        // console.log(oneBackpackSGUsed);
        const img = new Image();
        img.src = findImageFilename(selectedRandomSG);
        img.style.width = "50px";
        img.style.height = "50px";
        img.id = selectedRandomSG;

        div.appendChild(img);
        const text = document.createElement("p");
        text.textContent = selectedRandomSG;
        div.appendChild(text);



        blueStratagems.splice(blueStratagems.indexOf(selectedRandomSG), 1);
    } else if (selectedStratagemPattern[index] === "red") {
        const selectedRandomSG = redStratagems[Math.floor(Math.random() * redStratagems.length)];

        const img = new Image();
        img.src = findImageFilename(selectedRandomSG);
        img.style.width = "50px";
        img.style.height = "50px";
        img.id = selectedRandomSG;


        div.appendChild(img);
        const text = document.createElement("p");
        text.textContent = selectedRandomSG;
        div.appendChild(text);

        redStratagems.splice(redStratagems.indexOf(selectedRandomSG), 1);
    } else if (selectedStratagemPattern[index] === "green") {
        const selectedRandomSG = greenStratagems[Math.floor(Math.random() * greenStratagems.length)];

        const img = new Image();
        img.src = findImageFilename(selectedRandomSG);
        img.style.width = "50px";
        img.style.height = "50px";
        img.id = selectedRandomSG;

        div.appendChild(img);
        const text = document.createElement("p");
        text.textContent = selectedRandomSG;
        div.appendChild(text);


        greenStratagems.splice(greenStratagems.indexOf(selectedRandomSG), 1);
    }

}


sgDivs.forEach((div, index) => {
    getRandom(div, index);
})
const selectedPrimaryWeapons = localStorage.getItem("selectedWeapons") ? JSON.parse(localStorage.getItem("selectedWeapons")) : [];
const selectedThrowables = localStorage.getItem("selectedThrowables") ? JSON.parse(localStorage.getItem("selectedThrowables")) : [];
const selectedSecondaryWeapons = localStorage.getItem("selectedSecondaryWeapons") ? JSON.parse(localStorage.getItem("selectedSecondaryWeapons")) : [];
// console.log(selectedPrimaryWeapons);
const tempHeight = "200px";
function getRandomWeapon(div, index) {
    if (div.id === "primary") {
        const selectedRandomWeapon = selectedPrimaryWeapons[Math.floor(Math.random() * selectedPrimaryWeapons.length)];
        const img = new Image();
        img.src = findImageFilename(selectedRandomWeapon);
        // img.style.width = tempHeight;
        img.style.height = tempHeight;
        img.id = selectedRandomWeapon;
        div.appendChild(img);
        const text = document.createElement("p");
        text.textContent = selectedRandomWeapon;
        div.appendChild(text);
    } else if (div.id === "throwable") {
        const selectedRandomWeapon = selectedThrowables[Math.floor(Math.random() * selectedThrowables.length)];
        const img = new Image();
        img.src = findImageFilename(selectedRandomWeapon);
        // img.style.width = tempHeight
        img.style.height = tempHeight
        img.id = selectedRandomWeapon;
        div.appendChild(img);
        const text = document.createElement("p");
        text.textContent = selectedRandomWeapon;
        div.appendChild(text);
    } else if (div.id === "secondary") {
        const selectedRandomWeapon = selectedSecondaryWeapons[Math.floor(Math.random() * selectedSecondaryWeapons.length)];
        const img = new Image();
        img.src = findImageFilename(selectedRandomWeapon);
        // img.style.width = tempHeight
        img.style.height = tempHeight
        img.id = selectedRandomWeapon;
        div.appendChild(img);
        const text = document.createElement("p");
        text.textContent = selectedRandomWeapon;
        div.appendChild(text);
    }
}

weaponDivs.forEach((div, index) => {
    getRandomWeapon(div, index);
})