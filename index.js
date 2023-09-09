// document.querySelector("button").addEventListener("click", handle);

// function handle(params) {
//     alert("thanks form click me")   
// }


// document.querySelector("button").addEventListener("click", function handle(params) {
//     alert("thanks form click me")   
// }
// );

// BOTH UPPER CODE WORK SAME  
let numberOfButton = document.querySelectorAll(".drum").length;
console.log(numberOfButton);
for (i = 0; i < numberOfButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function handle() {

        const thisInnerHtml = this.innerHTML;
       
        makeSound(thisInnerHtml);

    })
};

document.addEventListener("keypress", function (event) {
    makeSound(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
            case "a":
            let audio2 = new Audio('sounds/tom-1.mp3');
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio('sounds/kick-bass.mp3');
            audio3.play();
            break;
        case "d":
            let audio5 = new Audio('sounds/tom-2.mp3');
            audio5.play();
            break;
        case "j":
            let audio6 = new Audio('sounds/tom-3.mp3');
            audio6.play();
            break;
        case "k":
            let audio7 = new Audio('sounds/tom-4.mp3');
            audio7.play();
            break;
        case "l":
            let audio4 = new Audio('sounds/snare.mp3');
            audio4.play();
            break;

        default: console.log(thisInnerHtml);
    }
}


// OBJECT CODING TYPE


// const ballboy= {
//     name:"salim",
//     age: 20,
//     hasWorkParmit: true,
//     language:["English" , "Urdu"]
// }
// console.log(ballboy.language);




// function HouseKeper(yearOfExperience, name, cleaning) {
//         this.yearOfExperience = yearOfExperience;
//     this.name = name;
//     this.cleaning = cleaning;
// }

// let HouseKeper1 = new HouseKeper('11',"aasss",["aaa","dddd"]);

// console.log(HouseKeper1.name);
// console.log(HouseKeper1.cleaning);
// console.log(HouseKeper1.yearOfExperience);
// OBJECT CODING TYPE










