//Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy names and stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight 
var fight = function(enemyName) {
    while(enemyHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

           // if player choses to skip
if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true) leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}
  //enemy damage
  enemyHealth = enemyHealth - playerAttack;
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining!")

  //check enemies health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
        playerMoney = playerMoney + 20;
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }
//player damage
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining!")
// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
}
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    
    var pickedEnemyName = enemyNames[i];
    //reset enemy health
    enemyHealth = 50;
    fight(pickedEnemyName);
    }

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }