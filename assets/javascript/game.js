// Variable to select and change Id or Class of my Html 
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var hangmanText = document.getElementById("hangman");
var goodLetterText = document.getElementById("goodLetterText");
var wrongLetterText = document.getElementById("wrongLetterText");
var winText = document.getElementById("win");
var wrongText = document.getElementById("turn");


// set Variable
var words = ["top", "java"];
var goodLetter = [];
var wrongLetter = [];
var letterComputerArray = "";
var indexArray=[];
var win = 0;
var round = 10;

// Choice computer
var computerChoice = words[Math.floor(Math.random() * words.length)];

 
// Display the blank letter of the computer choice. 
    function blank(){
        for (var i = 0; i < computerChoice.length; i++) {
            letterComputerArray += ("_");

        }
        return letterComputerArray  
    }
    hangmanText.textContent = blank();

    document.onkeyup = function(event){
        var userChoice = event.key;
        // Push the index inside the indexArray
        for (var i = 0; i < computerChoice.length; i++) {
            if (computerChoice[i]==userChoice){
                indexArray.push(i);
                console.log(indexArray);
            }
        }
        // Replace User Key to LetterComputerArray at the indexArray
        String.prototype.replaceAt = function(index, character) {
            return this.substr(0, index) + character + this.substr(index+character.length);
        };

        for(j=0; j<indexArray.length ;j++){
            letterComputerArray = letterComputerArray.replaceAt(indexArray[j],userChoice);
            console.log(letterComputerArray);
            hangmanText.textContent = letterComputerArray;
        }

        // Reset indexArray Empty
        indexArray=[];
        
        // Wrong letter 
         if (computerChoice.indexOf(userChoice) == -1) {
            wrongLetter.push(userChoice);
            wrongLetterText.textContent = wrongLetter;
            round -=1;
            wrongText.textContent = round;
         }  

        // Function if letterComputerAray is equal to the computerChoice  
        if(letterComputerArray == computerChoice){
            win ++;
            winText.textContent = win;
            letterComputerArray = "";
            wrongLetter = [];
            computerChoice = words[Math.floor(Math.random() * words.length)]; 
            hangmanText.textContent = blank();
        }
        else{
            if (round == 0){
                alert("You Lose");
                letterComputerArray = "";
                wrongLetter = [];
                computerChoice = words[Math.floor(Math.random() * words.length)]; 
                hangmanText.textContent = blank();
                round = 10;
            }
        }
            
        };