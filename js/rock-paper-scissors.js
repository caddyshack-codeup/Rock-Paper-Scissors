(function(){
    "use strict";
    function checkUserHand() {

        let userSelection;
        let compSelection;
        let playerOneCounter = 0;
        let playerTwoCounter = 0;
        let playerOneScore;
        let playerTwoScore;


        //First the user will pick their hand.

        $('.hand').change(function () {
            if (this.value === 'rock') {
                userSelection = 'rock';
            } else if (this.value === 'paper') {
                 userSelection = 'paper';
            } else if (this.value === 'scissors') {
                 userSelection = 'scissors';
            }

            //Then, the user will click the button.
            //During this time, the computer will pick it's hand.



            $('.start-round-container button').click(function(e){
                e.preventDefault();

                //random number between 1 and 3 that chooses computer's hand

                let randNum = Math.floor(Math.random()*3+1);

                if (randNum === 1) {
                    compSelection = 'rock';
                    $('.player-two-play-field').removeClass().addClass('rock-right player-two-play-field');
                }
                else if (randNum === 2) {
                    compSelection = 'paper';
                    $('.player-two-play-field').removeClass().addClass('paper-right player-two-play-field');
                }
                else if (randNum === 3) {
                    compSelection = 'scissors';
                    $('.player-two-play-field').removeClass().addClass('scissors-right player-two-play-field');
                }

                //changes player one play field to proper hand

                if (userSelection === 'rock') {
                    $('.player-one-play-field').removeClass().addClass('rock-left player-one-play-field');
                }
                else if (userSelection === 'paper') {
                    $('.player-one-play-field').removeClass().addClass('paper-left player-one-play-field');

                }
                else if (userSelection === 'scissors') {
                    $('.player-one-play-field').removeClass().addClass('scissors-left player-one-play-field');

                }


                //logic to compare User's hand to computer's hand

                if (userSelection === 'rock' && compSelection === 'paper') {
                    playerTwoCounter += 1;
                }else if (userSelection === 'rock' && compSelection === 'scissors') {
                    playerOneCounter += 1;
                }else if (userSelection === 'paper' && compSelection === 'rock') {
                    playerOneCounter += 1;
                }else if (userSelection === 'paper' && compSelection === 'scissors') {
                    playerTwoCounter += 1;
                }else if (userSelection === 'scissors' && compSelection === 'rock') {
                    playerTwoCounter += 1;
                }else if (userSelection === 'scissors' && compSelection === 'paper') {
                    playerOneCounter += 1;
                } else {
                    console.log('tie');
                }

                console.log(userSelection);
                console.log(compSelection);
                console.log(randNum);

                playerOneScore = $('#player-one-score').html(playerOneCounter);
                playerTwoScore = $('#player-two-score').html(playerTwoCounter);

                $('#form').trigger('reset');
            });
        });








    }

    checkUserHand();

    //This code prevents default behavior when user clicks ready button before making a selection

    $('.start-round-container button').click(function(e){
        e.preventDefault();
    });






})();



