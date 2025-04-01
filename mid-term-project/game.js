// Game data: story stages, choices, and outcomes
const storyStages = {
  start: {
    text: "Ben Tennyson and his family are on a road trip. Suddenly, an alien invasion begins! What will Ben do?",
    choices: [
      { text: "Transform into Heatblast", consequence: "heatblastEncounter", image: "images/heatblast.jpg" },
      { text: "Transform into Four Arms", consequence: "fourArmsEncounter", image: "images/fourarms.jpg" },
      { text: "Transform into Diamondhead", consequence: "diamondheadEncounter", image: "images/diamondhead.jpg" },
      { text: "Transform into XLR8", consequence: "xlr8Encounter", image: "images/xlr8.jpg" },
      { text: "Transform into Wildmutt", consequence: "wildmuttEncounter", image: "images/wildmutt.jpg" }
    ]
  },
  heatblastEncounter: {
    text: "Heatblast faces a group of fire-based aliens. What should he do?",
    choices: [
      { text: "Use Heatblast's fire to fight them", consequence: "fireWin", image: "images/firebattle.jpg" },
      { text: "Retreat and search for a better plan", consequence: "lose", image: "images/strategy.jpg" }
    ]
  },
  fireWin: {
    text: "Heatblast burns through the enemies, winning the battle! But Vilgax escapes.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  fourArmsEncounter: {
    text: "Four Arms faces a group of giant enemies. What should he do?",
    choices: [
      { text: "Use Four Arms' brute strength", consequence: "bruteForceWin", image: "images/bruteforce.jpg" },
      { text: "Look for a way to use the environment", consequence: "start", image: "images/environment.jpg" }
    ]
  },
  bruteForceWin: {
    text: "Four Arms defeats the enemies with sheer power. But Vilgax is still at large.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  diamondheadEncounter: {
    text: "Diamondhead faces a powerful crystalline alien! What should he do?",
    choices: [
      { text: "Use Diamondhead's crystal shards to attack", consequence: "diamondheadAttack", image: "images/diamondbattle.jpg" },
      { text: "Use the environment to trap the alien", consequence: "diamondheadTrap", image: "images/diamondenvironment.jpg" },
      { text: "Defend with a crystal shield and counterattack", consequence: "diamondheadShield", image: "images/crystalshield.jpg" },
      { text: "Throw a crystal spike barrage from a distance", consequence: "diamondheadBarrage", image: "images/spikebarrage.jpg" }
    ]
  },
  diamondheadAttack: {
    text: "Diamondhead launches a barrage of crystal shards at the alien, causing significant damage. The alien is staggered, but it's not down yet. What should Diamondhead do next?",
    choices: [
      { text: "Continue attacking with more crystal shards", consequence: "diamondheadFinalAttack", image: "images/diamondbattle.jpg" },
      { text: "Use the environment to create a more powerful attack", consequence: "diamondheadEnvironmentAttack", image: "images/diamondenvironment.jpg" }
    ]
  },
  diamondheadTrap: {
    text: "Diamondhead uses the surrounding rocks to trap the alien in a crystal cage, but it's still struggling to break free. Should he...",
    choices: [
      { text: "Attack the trapped alien directly", consequence: "diamondheadFinalAttack", image: "images/crystaltrap.jpg" },
      { text: "Wait for the alien to exhaust itself before striking", consequence: "diamondheadPatience", image: "images/patience.jpg" }
    ]
  },
  diamondheadShield: {
    text: "Diamondhead forms a large crystal shield to defend himself against the alien’s attacks. The alien struggles to break through. What should he do next?",
    choices: [
      { text: "Use the shield to bash the alien", consequence: "diamondheadBash", image: "images/shieldbash.jpg" },
      { text: "Wait for the alien to make a mistake and counterattack", consequence: "diamondheadCounter", image: "images/patience.jpg" }
    ]
  },
  diamondheadBarrage: {
    text: "Diamondhead throws a series of sharp crystal spikes, piercing the alien from a distance. The alien is severely weakened. What should he do now?",
    choices: [
      { text: "Close in for the final blow with a giant crystal punch", consequence: "diamondheadFinalAttack", image: "images/crystalpunch.jpg" },
      { text: "Wait for the alien to charge at him and counterattack", consequence: "diamondheadCounter", image: "images/patience.jpg" }
    ]
  },
  diamondheadFinalAttack: {
    text: "Diamondhead strikes with an overwhelming final barrage of crystal shards, shattering the alien into pieces. However, Vilgax is still out there, plotting his next move.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  diamondheadEnvironmentAttack: {
    text: "Diamondhead uses the environment to his advantage, creating a massive crystal structure that traps and disables the alien. The alien is defeated, but the battle isn't over.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  diamondheadPatience: {
    text: "Diamondhead waits patiently as the alien tires itself out, eventually collapsing from exhaustion. With the alien down, he can now focus on finding Vilgax.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  diamondheadBash: {
    text: "Using his crystal shield as a battering ram, Diamondhead charges at the alien and smashes it into the ground, ending the fight. But Vilgax still poses a threat.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  diamondheadCounter: {
    text: "Diamondhead counters the alien’s attack with a powerful crystal strike, defeating the alien with precision. Yet Vilgax remains at large.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  xlr8Encounter: {
    text: "XLR8 faces an alien that is faster than him! How will XLR8 handle this?",
    choices: [
      { text: "Use XLR8's speed to dodge and counter", consequence: "xlr8Win", image: "images/xlr8battle.jpg" },
      { text: "Transform into Diamondhead", consequence: "diamondheadShield", image: "images/strategy.jpg" }
    ]
  },
  xlr8Win: {
    text: "XLR8's speed overwhelms the alien, and he gains the upper hand. Vilgax still lurks.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  wildmuttEncounter: {
    text: "Wildmutt faces an alien that uses scent to track. How will Wildmutt fight?",
    choices: [
      { text: "Use Wildmutt's senses to track the enemy down", consequence: "wildmuttWin", image: "images/wildmuttbattle.jpg" },
      { text: "Transform into Heatblast", consequence: "fireWin", image: "images/strategy.jpg" }
    ]
  },
  wildmuttWin: {
    text: "Wildmutt's instincts lead him to victory, but Vilgax remains free.",
    choices: [
      { text: "Chase Vilgax", consequence: "chaseVilgax", image: "images/chase.jpg" },
      { text: "Regroup with Gwen and Grandpa Max", consequence: "regroup", image: "images/regroup.jpg" }
    ]
  },
  chaseVilgax: {
    text: "Ben confronts Vilgax in his lair, ready for the final showdown.",
    choices: [
      { text: "Transform into Alien X", consequence: "alienXWin", image: "images/alienX.jpg" },
      { text: "Transform into Four Arms", consequence: "fourArmsFinalBattle", image: "images/fourarms.jpg" }
    ]
  },
  alienXWin: {
    text: "Using Alien X's power, Ben rewrites the universe to defeat Vilgax once and for all!",
    choices: [],
    image: "images/victory.jpg",
    isVictory: true // Marking this as a victory stage
  },
  fourArmsFinalBattle: {
    text: "Four Arms fights Vilgax in an epic final battle, but his power may not be enough.",
    choices: [],
    image: "images/defeat.jpg"
  },
  lose: {
    text: "Ben's retreat allows the enemies to overpower him. Vilgax wins.",
    choices: [],
    image: "images/defeat.jpg"
  },
  regroup: {
    text: "Ben regroups with Gwen and Grandpa Max to plan the next move. However, Vilgax's forces are overwhelming.",
    choices: [
      { text: "Go for the final confrontation", consequence: "chaseVilgax", image: "images/finalbattle.jpg" },
      { text: "Look for an alternative strategy", consequence: "lose", image: "images/strategy.jpg" }
    ]
  }
};

let currentStage = "start";

// Start the game
function startGame() {
  currentStage = "start";
  document.getElementById("restart-btn").style.display = "none";
  updatePage();
}

// Update the page with the current stage
function updatePage() {
  const stage = storyStages[currentStage];

  // Update the story text
  document.getElementById("story").textContent = stage.text;

  // Clear existing choices and add new ones
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  stage.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      currentStage = choice.consequence;
      updatePage();
    });

    // Show image preview on hover
    button.addEventListener("mouseenter", () => {
      showImagePreview(choice.image);
    });

    button.addEventListener("mouseleave", () => {
      hideImagePreview();
    });

    choicesDiv.appendChild(button);
  });

  // Update image
  document.getElementById("story-image").src = stage.image;

  // If no choices are available (end of game), show the restart button
  if (stage.choices.length === 0) {
    document.getElementById("restart-btn").style.display = "block";
    if (stage.isVictory) {
      triggerCelebration(); // Trigger celebration for victory
    }
  }
}

// Function to show image preview
function showImagePreview(imageUrl) {
  const preview = document.getElementById("image-preview");
  preview.style.display = "block";
  preview.innerHTML = `<img src="${imageUrl}" alt="Preview" />`;
}

// Function to hide image preview
function hideImagePreview() {
  const preview = document.getElementById("image-preview");
  preview.style.display = "none";
}

// Function to trigger celebration when Ben wins
function triggerCelebration() {
  // Display celebration message or animation
  const celebrationMessage = document.createElement("div");
  celebrationMessage.innerHTML = `
    <h2>🎉 You Won! 🎉</h2>
    <p>Ben has successfully defeated Vilgax and saved the day!</p>
  `;
  celebrationMessage.style.fontSize = "2rem";
  celebrationMessage.style.color = "#00FF00";
  celebrationMessage.style.textAlign = "center";
  celebrationMessage.style.padding = "20px";
  celebrationMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  celebrationMessage.style.borderRadius = "10px";
  celebrationMessage.style.boxShadow = "0 4px 12px rgba(0, 255, 0, 0.6)";

  // Append to the page
  document.body.appendChild(celebrationMessage);

  // Optional: Play a victory sound or animation
  // Example: Play a sound effect
  // const victorySound = new Audio('path-to-victory-sound.mp3');
  // victorySound.play();
}

document.getElementById('addendum-btn').addEventListener('click', function() {
  const addendumContainer = document.getElementById('addendum-container');
  if (addendumContainer.style.display === "none") {
      addendumContainer.style.display = "block";
  } else {
      addendumContainer.style.display = "none";
  }
});


// Start the game when the page loads
startGame();
