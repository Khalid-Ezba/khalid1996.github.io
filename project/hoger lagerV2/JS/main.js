
 // element variabelen om dingen op het scherm te krijgen.
const btns = document.getElementsByClassName("btn");
const current_el = document.getElementById("current");
const result_el = document.getElementById("result");
const score_el = document.getElementById("score");
const number_el = document.getElementById("user_number");    
// let calcUser = Math.floor(Math.random() * 10) + 1;

let score = 0;

    let calcPc = Math.floor(Math.random() * 10) + 1;
    current_el.innerText = calcPc;



function hoger() {
    let calcUser = Math.floor(Math.random() * 10) + 1;
    console.log(calcUser);

    if (calcUser > calcPc) {
        result_el.innerText = "correct";
        score++;
        score_el.innerText = score;
    }else if (calcUser < calcPc) {
        result_el.innerText = "Incorrect";
    }else {
        result_el.innerText = "Match";
    }

    number_el.innerText = "Je gooide: " + calcUser;

    console.log(calcPc);
}
function lager() {
    let calcUser = Math.floor(Math.random() * 10) + 1;
    console.log(calcUser);

    if (calcUser < calcPc) {
        result_el.innerText = "correct";
        score++;
        score_el.innerText = score;
    }else if (calcUser > calcPc) {
        result_el.innerText = "Incorrect";
    }else {
        result_el.innerText = "Match";
    }
    number_el.innerText = "Je gooide: " + calcUser;

}



function reset() {
    window.location.reload();
}


// function getRandom(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }


function startGame() {


    //ask player's name
    let userName = prompt('Hoe heet je?');

    //set variable age
    const age = 18;

    //ask player's age
    let askuser = prompt('hoe oud ben je?');
    if(age <= askuser){
        alert('welkom '+ userName);
    }else if (askuser < 18){
        alert("Sorry maar je bent niet ouder genoeg");
    }


    //introduction message to the game
        const message1 = (`Dit is het spel hoger/lager.
Je krijgt zo een random getal te zien dat tussen de 1 en 10 kan liggen. Het is de bedoeling dat jij probeert te voorspellen of 
het volgende random getal hoger of lager zal zijn dan dat ene getal die je op dat moment op je scherm ziet.`)
        alert(message1);
}



// function reset() {
//     window.location.reload();
// }


    // if (calcPc < calcUser) {
    //     console.log("correct");
    // }else if(current_el < calcPc) {
    //     console.log("incorrect");
    // }else {
    //     console.log("idk");
    // }
    // if (calcUser > calcPc) {
    //     document.getElementById("result").innerText = "correct";
    //     score++;
    //     score_el.innerText = score;
    // }else if (calcUser < calcPc) {
    //     document.getElementById("result").innerText = "Incorrect";
    // }else if (calcUser == calcPc) {
    //     document.getElementById("result").innerText = "Match"
    // }
        


    //for (let i = 0; i < btns.length; i++) {
    //      btns[i].addEventListener("click", function () {
    //          playGame(this.dataset.value);
    //      });
    //  }
    
    //     function playGame(choice) {
    //         last_number = 0;
    //     last_number = current_number;
    //     current_number = getRandom();
    //     current_el.innerText = current_number;
    
    //     let comparison;
    
    //     if (last_number < current_number) {
    //         comparison = "hoger";
    //     }else if (last_number > current_number) {
    //         comparison = "lager"
    //     } else {
    //          comparison = "match"
    //      }
    
    //     if (choice == comparison) {
    //         score++;
    //         score_el.innerText = score;
    //         result_el.innerText = "correct";
    
    //     }else if (comparison == "match") {
    //          result_el.innerText = "match";
    //     }else {
    //         score = 0;
    //         score_el.innerText = score;
    
    //          result_el.innerText = "Incorrect";
    //     }
    //     console.log(choice);
    // }

