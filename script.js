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
  "CQC-1 One True Flag",
  "GL-52 De-Escalator",
  `AX/ARC-3 "Guard Dog" K-9`,
  "PLAS-45 Epoch",
  "LIFT-182 Warp Pack",
  "S-11 Speargun",
  "EAT-700 Expendable Napalm",
  "MS-11 Solo Silo"
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
  "A/FLAM-40 Flame Sentry",
  "A/LAS-98 Laser Sentry"
];
const weapons = [
  "AR-23 Liberator",
  "AR-23P Liberator Penetrator",
  "AR-23C Liberator Concussive",
  "StA-52 Assault Rifle",
  "AR-32 Pacifier",
  "AR-2 Coyote",
  "MA5C Assault Rifle",
  "AR-23A Liberator Carbine",
  "AR-61 Tenderizer",
  "BR-14 Adjudicator",
  "R-2 Amendment",
  "R-2124 Constitution",
  "R-6 Deadeye",
  "R-63 Diligence",
  "R-63CS Diligence Counter Sniper",
  "MP-98 Knight",
  "StA-11 SMG",
  "M7S SMG",
  "SMG-32 Reprimand",
  "SMG-37 Defender",
  "SMG-72 Pummeler",
  "SG-8 Punisher",
  "SG-8S Slugger",
  "SG-20 Halt",
  "SG-451 Cookout",
  "M90A Shotgun",
  "SG-225 Breaker",
  "SG-225SP Breaker Spray&Pray",
  "SG-225IE Breaker Incendiary",
  "CB-9 Exploding Crossbow",
  "R-36 Eruptor",
  "SG-8P Punisher Plasma",
  "PLAS-39 Accelerator Rifle",
  "ARC-12 Blitzer",
  "LAS-5 Scythe",
  "LAS-16 Sickle",
  "LAS-17 Double-Edge Sickle",
  "PLAS-1 Scorcher",
  "PLAS-101 Purifier",
  "VG-70 Variable",
  "FLAM-66 Torcher",
  "JAR-5 Dominator"
]
const secondaryWeapons = [
  "P-92 Warrant",
  "P-2 Peacemaker",
  "P-19 Redeemer",
  "P-113 Verdict",
  "M6C/SOCOM Pistol",
  "P-4 Senator",
  "CQC-19 Stun Lance",
  "CQC-2 Saber",
  "CQC-30 Stun Baton",
  "CQC-5 Combat Hatchet",
  "CQC-42 Machete",
  "P-11 Stim Pistol",
  "SG-22 Bushwhacker",
  "LAS-58 Talon",
  "P-72 Crisper",
  "GP-31 Grenade Pistol",
  "LAS-7 Dagger",
  "GP-20 Ultimatum",
  "PLAS-15 Loyalist"
]
const throwables = [
  "TED-63 Dynamite",
  "G-6 Frag",
  "G-12 High Explosive",
  "G-10 Incendiary",
  "G-7 Pineapple",
  "G-16 Impact",
  "G-13 Incendiary Impact",
  "G-23 Stun",
  "G-4 Gas",
  "G-50 Seeker",
  "G-3 Smoke",
  "G-123 Thermite",
  "K-2 Throwing Knife",
  "G-142 Pyrotech",
  "G-109 Urchin",
  "G-31 Arc"
]
let selectedPrimaryWeapons = [];
let selectedSecondaryWeapons = [];
let selectedThrowables = [];
let selectedStratagems = [];
let selectedBlueStratagems = 0;
let selectedRedStratagems = 0;
let selectedGreenStratagems = 0;
function sendToChooseLoudoutColours() {
  // if (selectedStratagems.length > 0) {
  //   localStorage.setItem("selectedStratagems", JSON.stringify(selectedStratagems));
  // }
  if (selectedStratagems.length < 4) {
    alert("You need to select at least 4 stratagems!");
    return;
  }
  if (selectedPrimaryWeapons.length < 1) {
    alert("You need to select at least 1 primary weapon!");
    return;
  }
  if (selectedSecondaryWeapons.length < 1) {
    alert("You need to select at least 1 secondary weapon!");
    return;
  }
  selectedStratagems.forEach((stratagem) => {
    if (blueStratagems.includes(stratagem)) {
      selectedBlueStratagems += 1;
    }
    if (redStratagems.includes(stratagem)) {
      selectedRedStratagems += 1;
    }
    if (greenStratagems.includes(stratagem)) {
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

  function createWeaponDiv(weapon) {
    const div = document.createElement("div");
    div.classList.add("weapon");
    div.style.width = "450px";
    div.style.cursor = "pointer";
    // div.style.marginBottom = "10px";
    div.setAttribute("data-weapon", weapon);
    div.onclick = () => {
      // if (["AR-23 Liberator", "R-2124 Constitution"].includes(weapon)) {
      //   alert("Cannot deselect AR-23 Liberator or R-2124 Constitution, you have it");
      //   return;
      // } else {
      if (selectedPrimaryWeapons.includes(weapon)) {
        selectedPrimaryWeapons = selectedPrimaryWeapons.filter((w) => w !== weapon);
        localStorage.setItem("selectedWeapons", JSON.stringify(selectedPrimaryWeapons));
        div.style.backgroundColor = "";
      } else {
        selectedPrimaryWeapons.push(weapon);
        localStorage.setItem("selectedWeapons", JSON.stringify(selectedPrimaryWeapons));
        div.style.backgroundColor = "rgb(34,136,167)";
      }
      // }
      // console.log(selectedWeapons);
    }
    const img = document.createElement("img");
    img.src = findImageFilename(weapon);
    img.style.width = "100px";
    // img.style.height = "40px";
    img.style.float = "left";
    img.style.marginRight = "10px";

    const text = document.createElement("div");
    text.textContent = weapon;
    text.style.overflow = "hidden";
    text.style.textOverflow = "ellipsis";
    text.style.width = "calc(100% - 200px)";

    const line = document.createElement("div");
    line.style.clear = "both";
    line.style.borderBottom = "0px solid black";

    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(line);

    return div;
  }
  function createWeapons(weapons) {
    weapons.forEach(weapon => {
      const weaponDiv = createWeaponDiv(weapon);
      document.getElementById("weapons").appendChild(weaponDiv);
    });
  }

  createWeapons(weapons);
  if (localStorage.getItem("selectedWeapons")) {
    selectedPrimaryWeapons = JSON.parse(localStorage.getItem("selectedWeapons"));
    selectedPrimaryWeapons.forEach((weapon) => {
      const weaponDiv = document.querySelector(`[data-weapon='${weapon}']`);
      if (weaponDiv) {
        weaponDiv.style.backgroundColor = "rgb(34,136,167)";
      }
    })
  }

  function createSecondaryWeaponDiv(weapon) {
    const div = document.createElement("div");
    div.classList.add("weapon");
    div.style.width = "450px";
    div.style.cursor = "pointer";
    // div.style.marginBottom = "10px";
    div.setAttribute("data-weapon", weapon);
    div.onclick = () => {
      if (selectedSecondaryWeapons.includes(weapon)) {
        selectedSecondaryWeapons = selectedSecondaryWeapons.filter((w) => w !== weapon);
        localStorage.setItem("selectedSecondaryWeapons", JSON.stringify(selectedSecondaryWeapons));
        div.style.backgroundColor = "";
      } else {
        selectedSecondaryWeapons.push(weapon);
        localStorage.setItem("selectedSecondaryWeapons", JSON.stringify(selectedSecondaryWeapons));
        div.style.backgroundColor = "rgb(34,136,167)";
      }
      // console.log(selectedSecondaryWeapons);
    }
    const img = document.createElement("img");
    img.src = findImageFilename(weapon);
    img.style.width = "100px";
    // img.style.height = "40px";
    img.style.float = "left";
    img.style.marginRight = "10px";

    const text = document.createElement("div");
    text.textContent = weapon;
    text.style.overflow = "hidden";
    text.style.textOverflow = "ellipsis";
    text.style.width = "calc(100% - 200px)";

    const line = document.createElement("div");
    line.style.clear = "both";
    line.style.borderBottom = "0px solid black";

    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(line);

    return div;
  }
  function createSecondaryWeapons(weapons) {
    weapons.forEach(weapon => {
      const weaponDiv = createSecondaryWeaponDiv(weapon);
      document.getElementById("secondaryWeapons").appendChild(weaponDiv);
    });
  }
  createSecondaryWeapons(secondaryWeapons);
  if (localStorage.getItem("selectedSecondaryWeapons")) {
    selectedSecondaryWeapons = JSON.parse(localStorage.getItem("selectedSecondaryWeapons"));
    selectedSecondaryWeapons.forEach((weapon) => {
      const weaponDiv = document.querySelector(`[data-weapon='${weapon}']`);
      if (weaponDiv) {
        weaponDiv.style.backgroundColor = "rgb(34,136,167)";
      }
    })
  }

  function createThrowableDiv(weapon) {
    const div = document.createElement("div");
    div.classList.add("weapon");
    div.style.width = "450px";
    div.style.cursor = "pointer";
    // div.style.marginBottom = "10px";
    div.setAttribute("data-weapon", weapon);
    div.onclick = () => {
      if (selectedThrowables.includes(weapon)) {
        selectedThrowables = selectedThrowables.filter((w) => w !== weapon);
        localStorage.setItem("selectedThrowables", JSON.stringify(selectedThrowables));
        div.style.backgroundColor = "";
      } else {
        selectedThrowables.push(weapon);
        localStorage.setItem("selectedThrowables", JSON.stringify(selectedThrowables));
        div.style.backgroundColor = "rgb(34,136,167)";
      }
      // console.log(selectedThrowables);
    }
    const img = document.createElement("img");
    img.src = findImageFilename(weapon);
    img.style.width = "100px";
    // img.style.height = "40px";
    img.style.float = "left";
    img.style.marginRight = "10px";

    const text = document.createElement("div");
    text.textContent = weapon;
    text.style.overflow = "hidden";
    text.style.textOverflow = "ellipsis";
    text.style.width = "calc(100% - 200px)";

    const line = document.createElement("div");
    line.style.clear = "both";
    line.style.borderBottom = "0px solid black";

    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(line);

    return div;
  }
  function createThrowables(weapons) {
    weapons.forEach(weapon => {
      const weaponDiv = createThrowableDiv(weapon);
      document.getElementById("throwables").appendChild(weaponDiv);
    });
  }
  createThrowables(throwables);
  if (localStorage.getItem("selectedThrowables")) {
    selectedThrowables = JSON.parse(localStorage.getItem("selectedThrowables"));
    selectedThrowables.forEach((weapon) => {
      const weaponDiv = document.querySelector(`[data-weapon='${weapon}']`);
      if (weaponDiv) {
        weaponDiv.style.backgroundColor = "rgb(34,136,167)";
      }
    })
  }
});
