$(document).ready (function() {
  $("#answer1").click(function() {
    $("#answer1-showing-p").show();
    $("#answer2-showing-p").hide();
    $("#answer3-showing-p").hide();

  });

  $("#answer2").click(function() {
    $("#answer2-showing-p").show();
    $("#answer1-showing-p").hide();
    $("#answer3-showing-p").hide();

});

$("#answer3").click(function() {
  $("#answer3-showing-p").show();
  $("#answer1-showing-p").hide();
  $("#answer2-showing-p").hide();

   });

});
