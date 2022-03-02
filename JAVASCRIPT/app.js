//getElementById para traer un elemento o ojeto del html
const computersChoiceDisplay = document.getElementById("computer-choice");
const usersChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computersChoice;
let gameResult;
 //addEventListener para escuhar los eventos al momento de pulsar el boton
 //innerHTML para traer lo que esta en el span del , el texto que tiene
 //forEach para recorrer los elementos de la constante
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.innerHTML;
    usersChoiceDisplay.innerHTML = userChoice;
    generateComputersChoice();
    getResult();

}));

function generateComputersChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1;
    //console.log(randomNumber);
    //=== si el tipo de datos tambien son iguales
    if (randomNumber === 1) {
        computersChoice = 'Piedra';
    }
    if(randomNumber===2){
        computersChoice = 'Tijera';
    }

    if(randomNumber===3){
        computersChoice = 'Papel';
    }

    computersChoiceDisplay.innerHTML = computersChoice;
}

function getResult(){
    if(computersChoice === userChoice){
        gameResult = '¡Es un empate!'
    }
    if(computersChoice === 'Piedra' && userChoice === 'Papel'){
        gameResult = '¡Ganaste!'
    }

    if(computersChoice === 'Piedra' && userChoice === 'Tijera'){
        gameResult = '¡Perdiste!'
    }

    if(computersChoice === 'Papel' && userChoice === 'Piedra'){
        gameResult = '¡Perdiste!'
    }

    if(computersChoice === 'Papel' && userChoice === 'Tijera'){
        gameResult = '¡Ganaste!'
    }

    if(computersChoice === 'Tijera' && userChoice === 'Piedra'){
        gameResult = '¡Ganaste!'
    }

    if(computersChoice === 'Tijera' && userChoice === 'Papel'){
        gameResult = '¡Perdiste!'
    }

    resultDisplay.innerHTML = gameResult;
}


