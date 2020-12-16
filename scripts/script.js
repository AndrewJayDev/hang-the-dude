

    var words;

    //Dictionary of words 
    fetch('https://random-word-api.herokuapp.com/all')
    .then(res => res.json())
    .then(data => words =data);


    //player clicks start 
    function startClick(){
        genWord();
    }
    //word is generated 
    function genWord(){
        var ranNum= Math.floor((Math.random() * words.length) + 1);
        var word= words[ranNum];
        console.log(word.length);
        console.log(word);
        printSpaces(word);
    }

    function printSpaces(w){
        console.log(w +"2");
        var spaces= "";
        for(var i=0;i<w.length;i++){
            spaces= spaces + "________ ";
        }
        document.getElementById("answerArea").innerHTML = `<h1>${spaces}<h1>`;
        
    }
//player guesses a letter 
 
//determine if guess is right or wrong 

//add leter to letter area if wrong

//add letter oanswer area if correct 

//repeat 
