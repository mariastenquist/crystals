$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var random_num;
  var gem_one, gem_two, gem_three, gem_four;
  var user_score;

  function randomizer() {
    random_num = (Math.floor(Math.random() * 102) + 19);
    gem_one = (Math.floor(Math.random() * 12) + 1);
    gem_two = (Math.floor(Math.random() * 12) + 1);
    gem_three = (Math.floor(Math.random() * 12) + 1);
    gem_four = (Math.floor(Math.random() * 12) + 1);
    user_score = 0;

    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#random_num").html(random_num);
    $("#random_num").prepend("random # to match:  ");
    $("#user_score").html(user_score);
    $("#user_score").prepend("Point score: ");
    $("#message").empty();
  };

  function matcher() {
    if (user_score > random_num) {
      losses++;
      randomizer();
    }else if (user_score == random_num) {
      wins++;
      $("#message").html("You won this round!");
      randomizer();
    }else {
      console.log("error");
    };
  };
  randomizer();

  $(".gem").on("click", function() {
    var input = $(this).attr("value");
      if (input == "gem1") {
        user_score += gem_one;
      } else if (input == "gem2") {
        user_score += gem_two;
      } else if (input == "gem3") {
        user_score += gem_three;
      } else if (input == "gem4") {
        user_score += gem_four;
      } else {
        console.log("error");
      }
      $("#user_score").html(user_score);
      matcher();
  });
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});
