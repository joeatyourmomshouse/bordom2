alert("Why hello there...");
alert("Looks like you found me.");

var ask = confirm("Do you know why you are here?");

if (ask === true) {
    alert("That's very good.");

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
            alert("Wrong key! Try again...");
        }
        break;
        
    }


} else {
    alert("Guess not... closing the window now.");
    window.close();
}
