// Show initial welcome alerts
alert("WELCOME TO THE GAME CREATED BY BOREDOM ITSELF...\nword of the day: realkey");
{
    var ask = confirm("Are you ready to begin the challenge?");

    if (ask === true) {
        alert("This game consists of multiple little tests that teach you, or not, important knowledge.");

        var realkey = "realkey";
        var success = false;

        while (!success) {
            var key = prompt("Do you know the full access passkey?");

            if (key === null) {
                showMessageAndClose("You gave up... exiting.");
                break;
            } else if (key === realkey) {
                alert("Welcome! You have finally overcome the 1st part");
                success = true;
            } else {
                alert("Wrong key! hint: the day of the word");
            }
        }
    } else {
        showMessageAndClose("Guess not... closing the window now.");
    }

    // Function to show the message and then automatically close the window after 3 seconds
    function showMessageAndClose(message) {
        var messageDiv = document.createElement("div");
        messageDiv.style.position = "absolute";
        messageDiv.style.top = "50%";
        messageDiv.style.left = "50%";
        messageDiv.style.transform = "translate(-50%, -50%)";
        messageDiv.style.padding = "20px";
        messageDiv.style.backgroundColor = "#f44336";
        messageDiv.style.color = "white";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.borderRadius = "5px";
        messageDiv.style.zIndex = "9999";
        messageDiv.innerText = message;
        document.body.appendChild(messageDiv);

        setTimeout(function() {
            window.close();
        }, 3000); // Closes the window after 3 seconds

        // Optionally, remove the message after 3 seconds
        setTimeout(function() {
            messageDiv.remove();
        }, 3000);
    }
};
