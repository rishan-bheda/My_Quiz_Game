class Contestant {

    constructor(){

        this.index = 0;
        this.distance = 0;
        this.name = null;
        this.answer = null;

    }
  
    getCount(){

        var contestantCountRef = database.ref('contestantCount');

        contestantCountRef.on("value",(data)=>{

            contestantCount = data.val();

        })
    }
  
    updateCount(count){

        database.ref('/').update({

            contestantCount: count

        });
    }
  
    update(){

        var playerIndex = "contestants/contestant" + this.index;

        database.ref(playerIndex).set({

            name:this.name,
            answer:this.answer

        });
    }
  
    static getContestantInfo(){

        var contestantInfoRef = database.ref('contestants');

        contestantInfoRef.on("value",(data)=>{

            allPlayers = data.val();

        })
    }

}
  