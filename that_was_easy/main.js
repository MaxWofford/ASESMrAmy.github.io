function sayThatWasEasy() {
    var thatWasEasy = new Audio ("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegatekeypress(event) {
    if (event.charCode == 32) {
        $("#easy").trigger("click");
    }
}