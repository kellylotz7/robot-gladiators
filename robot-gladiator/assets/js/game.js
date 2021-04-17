//Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
//

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy names and stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

//FUNCTION to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };
  

//FUNCTION fight 
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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
    }
}
  //enemy damage
  //random damage value based on players attack power
  debugger;
  var damage = randomNumber(playerAttack - 3, playerAttack)
  enemyHealth = Math.max(0, enemyHealth - damage);
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
//random damage value based on enemy attack power
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
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

//FUNCTION to start a new game
var startGame = function () {
    // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    
    var pickedEnemyName = enemyNames[i];
    //reset enemy health
    enemyHealth = randomNumber(40, 60);
    fight(pickedEnemyName);
    if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

  // if yes, take them to the store() function
  if (storeConfirm) {
    shop();
  }
    }
    }

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }
  endGame();
}; 
//FUNCTION to end game
var endGame = function() {
    //if player is still alive
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    //if player is dead
    else {
        window.alert("You've lost your robot in battle.");
      }

      //ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");

      if (playAgainConfirm) {
        // restart the game
        startGame();
      } 
      else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
};
//FUNCTION shop
var shop = function() {
    // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
        if (playerMoney >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
      
          // increase health and decrease money
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
        }
        else {
          window.alert("You don't have enough money!");
        }
        break;

      case "UPGRADE":
      case "upgrade":
        if (playerMoney >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
         // increase attack and decrease money
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
        }
        else {
          window.alert("You don't have enough money!");
        }
        break;

    case "LEAVE":
    case "leave":
    window.alert("Leaving the store.");
    // do nothing, so function will end
    break;

    default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
  }
};

//RUNNER
startGame();