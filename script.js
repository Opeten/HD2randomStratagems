const blueStratagems = [
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
  "CQC-1 One True Flag"
];
const redStratagems = [
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
const greenStratagems = [
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
  "A/FLAM-40 Flame Sentry"
];
let selectedStratagems = [];
let selectedBlueStratagems = 0;
let selectedRedStratagems = 0;
let selectedGreenStratagems = 0;
function sendToChooseLoudoutColours() {
  if (selectedStratagems.length > 0) {
    localStorage.setItem("selectedStratagems", JSON.stringify(selectedStratagems));
  }
  if (selectedStratagems.length < 4) {
    alert("You need to select at least 4 stratagems!");
    return;
  }
  selectedStratagems.forEach((stratagem) => {
    if(blueStratagems.includes(stratagem)) {
      selectedBlueStratagems += 1;
    }
    if(redStratagems.includes(stratagem)) {
      selectedRedStratagems += 1;
    }
    if(greenStratagems.includes(stratagem)) {
      selectedGreenStratagems += 1;
    }
  })
  localStorage.setItem("selectedBlueStratagems", selectedBlueStratagems);
  localStorage.setItem("selectedRedStratagems", selectedRedStratagems);
  localStorage.setItem("selectedGreenStratagems", selectedGreenStratagems);
  window.location.href = "choose-loudout-colours.html";
}

function findImageFilename(stratagem) {
  const lowercaseStratagem = stratagem.toLowerCase();
  // console.log(lowercaseStratagem);
  const replacedSpace = lowercaseStratagem.replace(/\s+/g, "-");
  const replacedSlash = replacedSpace.replace(/\//g, "-");
  const replacedQuote = replacedSlash.replace(/\"/g, "'");
  
  // console.log(replacedSpace);
  return `./images/${replacedQuote}.webp`;
}


document.addEventListener("DOMContentLoaded", () => {
  const stratagemsContainer = document.getElementById("stratagemsContainer");

  if (!stratagemsContainer) {
    console.error("Stratagems container not found");
    return;
  }

  function createStratagemDiv(stratagem, colour) {
    const div = document.createElement("div");
    div.classList.add("stratagem");
    div.style.borderColor = colour;
    div.style.borderWidth = "1px";
    div.style.borderStyle = "solid";
    div.style.width = "400px";
    div.style.cursor = "pointer";
    // div.style.className = "stratagem";
    // div.style.marginBottom = "10px";
    div.setAttribute("data-stratagem", stratagem);
    div.onclick = () => {
      if (selectedStratagems.includes(stratagem)) {
        selectedStratagems = selectedStratagems.filter((s) => s !== stratagem);
        div.style.backgroundColor = "";
        localStorage.setItem("selectedStratagems", JSON.stringify(selectedStratagems));
      } else {
        selectedStratagems.push(stratagem);
        div.style.backgroundColor = colour;
        localStorage.setItem("selectedStratagems", JSON.stringify(selectedStratagems));
      }
      // console.log(selectedStratagems);
    }
    const img = document.createElement("img");
    img.src = findImageFilename(stratagem);
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.float = "left";
    img.style.marginRight = "10px";
    img.style.backgroundColor = colour;

    const text = document.createElement("div");
    text.textContent = stratagem;
    text.style.overflow = "hidden";
    text.style.textOverflow = "ellipsis";
    text.style.width = "calc(100% - 70px)"; 
    

    const line = document.createElement("div");
    line.style.clear = "both";
    line.style.borderBottom = `1px solid ${colour}`;

    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(line);

    return div;
  }

  function createStratagems(stratagems) {
    let parseColour = "rgb(34, 136, 167)";
    let basicColour = "blue";
    if (stratagems === blueStratagems) {
      // console.log(stratagems);
      parseColour = "rgb(34,136,167)";
      basicColour = "blue";
    }
    if (stratagems === redStratagems) {
      parseColour = "rgb(182,46,34)";
      basicColour = "red";
    }
    if (stratagems === greenStratagems) {
      parseColour = "rgb(50,96,33)";
      basicColour = "green";

    }
    stratagems.forEach(stratagem => {
      const stratagemDiv = createStratagemDiv(stratagem, parseColour);
      document.getElementById(`${basicColour}Stratagems`).appendChild(stratagemDiv);
    });
  }

  createStratagems(blueStratagems);
  createStratagems(redStratagems);
  createStratagems(greenStratagems);
  if (localStorage.getItem("selectedStratagems")) {
  selectedStratagems = JSON.parse(localStorage.getItem("selectedStratagems"));
  selectedStratagems.forEach((stratagem) => {
    // console.log(stratagem);
    const stratagemDiv = document.querySelector(`[data-stratagem='${stratagem}']`);
    // console.log(stratagemDiv);
    if (stratagemDiv) {
      // console.log(stratagemDiv);
      if (stratagemDiv.style.backgroundColor === "") {
        stratagemDiv.style.backgroundColor = stratagemDiv.style.borderColor;
      }
    }
  })
}
});
