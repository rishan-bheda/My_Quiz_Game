var canvas;
var gameState = 0;
var contestantCount, database, quiz, question, contestant, allPlayers;

function setup(){

    canvas = createCanvas(850,400);

    database = firebase.database();

    quiz = new Quiz;
    quiz.getState();
    quiz.start();

}


function draw(){
  
    background("pink");
    
    if(contestantCount === 4){

        gameState = 1;

        quiz.update(gameState)

    }

    if(gameState === 1){

        question.play();

    }
    
}
