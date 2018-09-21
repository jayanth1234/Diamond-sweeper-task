
(function() {
    'use strict';

    var randomPositions = [];
    var unopened = 56;

    let flippedCount = 0;

    function init(){
        generateRandomNumbers();
        flippedCount = 0;
    }

    function generateRandomNumbers() {
         const totalDiamonds  = 8;
            
        // clearing the previous place diamonds
        randomPositions.length = 0;
            
        // generating random 8 numbers between 0 to 64
        for (let index = 0; index < totalDiamonds; index++ ) {
            let position = Math.ceil(Math.random() * 61);
        
        if (randomPositions.includes(`box${position}`)) {
            // console.log('prevent repeating numbers');
            continue;
        }
            randomPositions.push(`box${position}`);
        }
    
        if (randomPositions.length !== 8) {
            let length = 8 - randomPositions.length;
            for (let index = 1; index <= length; index++) {
                randomPositions.push(`box${61 + index}`);
            }
        }
        // console.log(randomPositions);
    } 

    $(document).ready(function(){
        $(".cell").click(function(event){
            let id = event.target.id;
            if(randomPositions.includes(id)){
                $(this).removeClass("unknown");
                $(this).addClass("diamond");
                flippedCount++;
                if(flippedCount === randomPositions.length){
                    calcScore();
                }
            }else {
                $(this).removeClass("unknown");
                unopened--;
            }
        })
    })

    function calcScore() {
        console.log("Victory");
        swal({
            title: "Your Score is" + " " + unopened,
        }).then(() => {
            location.reload(true);
        })
    }

    init();

})();
