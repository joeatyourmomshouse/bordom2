// Show initial welcome alerts
alert("WELCOME TO THE GAME CREATED BY BORDOM ITSELF... volume up");
alert("Creator: Virat Priya");

// Function to play sound and then show alert
function playSoundAndAlert(callback) {
    var audio = new Audio("audiomass-output.mp3");

    // Wait for audio to be ready to play
    audio.addEventListener('canplaythrough', function () {
        audio.play().then(() => {
            setTimeout(() => {
             prompt("THE GAME OF BORDOM, press ok to start"); 
                callback();
            }, 500); // Short delay to allow audio to start
        }).catch(error => {
            console.error("Failed to play audio:", error);
            alert("Hello! (Sound didn't play)");
            callback();
        });
    });
                

    // Handle audio loading error
    audio.addEventListener('error', function () {
        console.error("Audio file couldn't load.");
        alert("Hello! (Audio file failed to load)");
        callback();
    });
}

// Call the function and start the game after sound
playSoundAndAlert(() => {
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
                alert("Welcome! You have finally overcome the 1st stage");
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
});
