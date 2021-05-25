var actualWord="";
const PLAYER1=localStorage.getItem("player1");
const PLAYER2=localStorage.getItem("player2");
var player1=PLAYER1;
var player2=PLAYER2;

function updatePlayer(){
    document.getElementById("Player1").textContent=player1
    document.getElementById("Player2").textContent=player2
}
function updateScore(score1=0,score2=0){
    document.getElementById("player1_score").textContent=score1
    document.getElementById("player2_score").textContent=score2

}
function updateTurn(previousATurn){
    if(previousATurn==PLAYER1){
        document.getElementById("Aturn").textContent=PLAYER2
        document.getElementById("Qturn").textContent=PLAYER1
        
        return PLAYER2;
    }
    else{
        document.getElementById("Aturn").textContent=PLAYER1
        document.getElementById("Qturn").textContent=PLAYER2
        return PLAYER1;
    }

}

function send(){
    actualWord=document.getElementById("word").value;
    var missingLetters=actualWord;
    var secondLast=missingLetters.length-2;
    var mid=Math.round(missingLetters.length/2)
    missingLetters=missingLetters.replace(missingLetters[1],"_")
    missingLetters=missingLetters.replace(missingLetters[secondLast],"_")
    missingLetters=missingLetters.replace(missingLetters[mid],"_")
    document.getElementById("questionBox").innerHTML=`
    <h4 class="text-primary">Q. ${missingLetters}</h4>
    <h4 style="color: black;">A. <input type="text" id="answerWord"></h4>
    <button class="btn btn-success" onclick="check()">Check</button>
    `;
    document.getElementById("word").value="";
}
function check(){
    var answerWord=document.getElementById("answerWord").value 
    document.getElementById("Qturn")
    if(actualWord==answerWord && ){

    } 
}