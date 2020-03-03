// Worked on this with my study group: Amy Haerr, John Pendergrass, Haley McLemore, and Brooke Guarienti

$(document).ready(function() {
  // Set variables
  var targetRandom = 0;
  var counter = 0;
  var wins = 0;
  var losses = 0;

  // Creates crystal object
  var Crystals = {
    crystal1: {
      value: 0
    },
    crystal2: {
      value: 0
    },
    crystal3: {
      value: 0
    },
    crystal4: {
      value: 0
    }
  };

    // Function to start game, set random numbers, displays variables on webpage, and resets counter
    function startgame() {
      targetRandom = Math.floor(Math.random() * 102 + 19);
      Crystals.crystal1.value = Math.floor(Math.random() * 12 + 1);
      Crystals.crystal2.value = Math.floor(Math.random() * 12 + 1);
      Crystals.crystal3.value = Math.floor(Math.random() * 12 + 1);
      Crystals.crystal4.value = Math.floor(Math.random() * 12 + 1);
      counter = 0;
      $("#randomNumber").text(targetRandom).css("text-align", "center");
      $("#playerCount").text(counter).css("text-align", "center");
      $("#winScore").text(wins).css("text-align", "center");
      $("#loseScore").text(losses).css("text-align", "center");
    }
  
  // Function to update wins and losses and resets the game
  function score() {
    if (counter > targetRandom) {
      alert("Sorry you lost!");
      losses++;
      $("#loseScore").text(losses);
      startgame()
    } else if (counter == targetRandom) {
      alert("You won!");
      wins++;
      $("#winScore").text(wins);
      startgame()
    }
  }

  startgame()

  $("#purple").on("click", function() {
    counter += Crystals.crystal1.value;
    $("#playerCount").text(counter);
    score();
  });

  $("#black").on("click", function() {
    counter += Crystals.crystal2.value;
    $("#playerCount").text(counter);
    score();
  });

  $("#red").on("click", function() {
    counter += Crystals.crystal3.value;
    $("#playerCount").text(counter);
    score();
  });

  $("#blue").on("click", function() {
    counter += Crystals.crystal4.value;
    $("#playerCount").text(counter);
    score();
  });
});
