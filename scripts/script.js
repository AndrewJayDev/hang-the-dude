//variables 
const maxTurns = 10;
var words;
var word;
var turn=1;
var guess;
var wrongGuessArr= [];
var answerArr=[];

    //Dictionary of words 
    fetch('https://random-word-api.herokuapp.com/all')
    .then(res => res.json())
    .then(data => words =data);
    console.log("ready")


    //player clicks start 
    function startClick(){
        if(words.length!=undefined){
            document.getElementById("start-area").innerHTML = `<input type="text" maxlength="1" placeholder="type guess (1 letter)" id="input-area"> <button onclick="enterGuess()">Guess!</button>`;
            genWord();
        }
    }
    //word is generated 
    function genWord(){
        //generate random number 
        var ranNum= Math.floor((Math.random() * words.length) + 1);
        //select random word from json
        word= words[ranNum];
        console.log(word.length);
        console.log(word);
        //prints the spaces in Dom
        createAnswerArr(word);
        printSpaces(word);
    }

    function printSpaces(){
        var spaces= "";
        for(var i=0;i<answerArr.length;i++){
            spaces= spaces + `${answerArr[i]} `;
        }
        document.getElementById("answerArea").innerHTML = `<h1>${spaces}<h1>`;
    }

    function createAnswerArr(w){
        for(var i=0;i<w.length;i++){
            answerArr[i]="_";
        }
       console.log(answerArr);
    }

    
//player guesses a letter 
function enterGuess(){
    console.log("enter")
    guess= document.getElementById("input-area").value;
    console.log(guess);
    
    var guessCorrect= isGuessCorrect(guess,word);
    if(guessCorrect){
        updateAnswerArr(guess,word);
        printSpaces();
        console.log("correct answer!");
    }else{
        wrongAnswer(guess);
    }
    
}
 
//determine if guess is right or wrong 

function isGuessCorrect(g, w){
    for(var i=0;i<=w.length;i++){
        //check if guess is equal to letter 
        console.log(w[i]);
        if(g==w[i]){
            return true
        }
    }
}

//add leter to letter area if wrong

function wrongAnswer(g){
    console.log("wrong Answer")
    wrongGuessArr.push(g);
    document.getElementById("letter-area").innerHTML = `<h1>${wrongGuessArr}<h1>`;
    changePicture();
    turn=turn+1;
}

//add letter oanswer area if correct 

function updateAnswerArr(g,w){
    for(var i=0;i<=w.length;i++){
        if(g==w[i]){
            answerArr[i]=g;
        }else{
            error();
        }
    }
}



//change picture if wrong 

function changePicture(){
    document.getElementById("hangman-area").innerHTML = `<img src="images/hangman_${turn}.png" alt="blank hangman" width="300" height="500">`;
}

//repeat 

function error(){
    console.log("error")
}