class Question{

    constructor(){

        this.title = createElement('h2');
        this.title2 = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.input1 = createInput("Your Name");
        this.input2 = createInput("Your Answer Number")
        this.button = createButton("Submit");

    }

    display(){

        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter 'E', but only has one letter? ")
        this.question.position(150,80);

        this.option1.html("1: Everyone");
        this.option1.position(150,100);

        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.input1.position(150,230);
        this.input2.position(350,230);

        this.button.position(300,300);

        this.button.mousePressed(() => {

            this.title.hide();
            this.button.hide();
            this.input1.hide();
            this.input2.hide();

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();

            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

        });

    }

    play(){

        this.title.hide();
        this.button.hide();
        this.input1.hide();
        this.input2.hide();

        background(255,255,0);

        this.title2.html("Quiz Results");
        this.title2.position(350,0);

        Contestant.getContestantInfo();

        if(allPlayers !== undefined){

            fill("Black")
            textSize(20);
            text("Note - All contestants who answered correctly are highlighted in green!", 150, 200);

            var display_pos = 225;

            for(var plr in allPlayers){

                var correctAns = "2";

                if(correctAns === allPlayers[plr].answer)
                    fill("Green");
                else
                    fill("Red");

                display_pos = display_pos + 20;
                
                text(allPlayers[plr].name + " : " + allPlayers[plr].answer, 150, display_pos);

            }


        }
       
    }

}