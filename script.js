// Show initial welcome alerts
alert("WELCOME TO THE GAME CREATED BY BORDOM ITSELF... /n word of the day: realkey");
 {
    var ask = confirm("Are you ready to begin the challenge?");

    if (ask === true) {
        alert("This game consists of multiple little tests that teach you, or not, important knoledge.");

        var realkey = "realkey";
        var success = false;

        while (!success) {
            var key = prompt("Do you know the full access passkey?");

            if (key === null) {
                alert("You gave up... exiting.");
                window.close();
                break;
            } else if (key === realkey) {
                alert("Welcome! You have finally overcome the 1st part");
                success = true;
            } else {
                alert("Wrong key! hint: the day of the word");
            }
            break;
        }
    } else {
        alert("Guess not... closing the window now.");
        window.close();
    }
};