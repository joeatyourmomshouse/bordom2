alert("Next step: learn something called One Time Pad");
alert("https://www.youtube.com/watch?v=BGAY8vMyTAA");

var a = confirm("You done?");
if (a === true) {
    alert("Great, you can move on to the second test.");
    alert("What is the real word if...");

    var riddle = prompt("You are given the code 54FDA. NO CAPS");

    if (riddle && riddle.toLowerCase() === "great") {
        alert("CONGRATULATIONS, you beat the game of boredom ");
        new Audio('audiomass-output.mp3').play();

    }
}
