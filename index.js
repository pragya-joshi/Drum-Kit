function handleClick(char){
    switch (char) {
        case "w":
            var audio=new Audio("Sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("Sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("Sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("Sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio=new Audio("Sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("Sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio=new Audio("Sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}



for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        handleClick(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keydown",function(event){
    handleClick(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}