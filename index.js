

function buttonAnimation(parameter) {
    document.querySelector("." + parameter).classList.add("pressed");
    setTimeout(function () { document.querySelector("." + parameter).classList.remove("pressed") }, 100);
};

function sound(parameter) {
    switch (parameter) {
        case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");

            break;
        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");

            break;
        case "s":
            var audio1 = new Audio("sounds/tom-3.mp3");

            break;
        case "d":
            var audio1 = new Audio("sounds/tom-4.mp3");

            break;
        case "j":
            var audio1 = new Audio("sounds/snare.mp3");

            break;
        case "k":
            var audio1 = new Audio("sounds/crash.mp3");

            break;
        case "l":
            var audio1 = new Audio("sounds/kick-bass.mp3");

            break;
        default:
            break;
    }
    audio1.play();

};


document.addEventListener("keydown", function (event) {
    sound(event.key)
    buttonAnimation(event.key);

}
);



for (var i = 0; i < document.querySelectorAll(".drum").length; i = i + 1) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        sound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    })
}




