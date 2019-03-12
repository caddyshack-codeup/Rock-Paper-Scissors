(function(){
    "use strict";

    let playerOneCounter;
    let playerTwoCounter;

    function playGame() {
        let playerOneCounter = 0;
        let playerTwoCounter = 0;
        let userSelection;
        let compSelection;
        let playerOneScore;
        let playerTwoScore;
        const whipSound = $('#whip-sound')[0];
        const drumSound = $('#drum-sound')[0];
        const messageCenter = $('.message-center');



        //First the user will pick their hand.

        $('.hand').change(function () {

            console.log(this.value);

            userSelection = '';

            if (this.value === 'rock') {
                userSelection = 'rock';
            } else if (this.value === 'paper') {
                userSelection = 'paper';
            } else if (this.value === 'scissors') {
                userSelection = 'scissors';
            }

        });



            //Then, the user will click the button.
            //During this time, the computer will pick it's hand.

            $('.start-round-container button').click(function(e){
                e.preventDefault();
                $('#form').trigger('reset');
                messageCenter.html('');



                //countdown to third hand once button is pressed

                let countdown = 0;
                let countInterval = setInterval(function(){
                    countdown += 1;
                    if (countdown <= 1) {
                        drumSound.play();
                        $('.player-one-play-field').removeClass().addClass('rock-left player-one-play-field').css('background-size', '50%')
                                                                                                             .animate({backgroundSize: '80%'});

                        $('.player-two-play-field').removeClass().addClass('rock-right player-two-play-field').css('background-size', '50%')
                                                                                                             .animate({backgroundSize: '80%'});
                    }
                    else if (countdown === 2) {
                        drumSound.play()
                        $('.player-one-play-field').removeClass().addClass('rock-left player-one-play-field').css('background-size', '50%')
                                                                                                             .animate({backgroundSize: '80%'});
                        $('.player-two-play-field').removeClass().addClass('rock-right player-two-play-field').css('background-size', '50%')
                                                                                                              .animate({backgroundSize: '80%'});
                    }

                    //everything is executed on the third second!

                    else if (countdown === 3) {
                        clearInterval(countInterval);
                        whipSound.play();

                        //random number between 1 and 3 that chooses computer's hand

                        let randNum = Math.floor(Math.random() * 3 + 1);

                        if (randNum === 1) {
                            compSelection = 'rock';
                            $('.player-two-play-field').removeClass().addClass('rock-right player-two-play-field').css('background-size', '50%')
                                                                                                                  .animate({backgroundSize: '80%'});
                        } else if (randNum === 2) {
                            compSelection = 'paper';
                            $('.player-two-play-field').removeClass().addClass('paper-right player-two-play-field').css('background-size', '50%')
                                                                                                                   .animate({backgroundSize: '80%'});
                        } else if (randNum === 3) {
                            compSelection = 'scissors';
                            $('.player-two-play-field').removeClass().addClass('scissors-right player-two-play-field').css('background-size', '50%')
                                                                                                                   .animate({backgroundSize: '80%'});
                        }

                        //changes player one player field to proper hand

                        if (userSelection === 'rock') {
                            $('.player-one-play-field').removeClass().addClass('rock-left player-one-play-field').css('background-size', '50%')
                                                                                                                   .animate({backgroundSize: '80%'});
                        } else if (userSelection === 'paper') {
                            $('.player-one-play-field').removeClass().addClass('paper-left player-one-play-field').css('background-size', '50%')
                                                                                                                   .animate({backgroundSize: '80%'});

                        } else if (userSelection === 'scissors') {
                            $('.player-one-play-field').removeClass().addClass('scissors-left player-one-play-field').css('background-size', '50%')
                                                                                                                   .animate({backgroundSize: '80%'});

                        }


                        //logic to compare User's hand to computer's hand

                        if (userSelection === 'rock' && compSelection === 'paper') {
                            playerTwoCounter += 1;
                            messageCenter.html('Computer wins!');

                        } else if (userSelection === 'rock' && compSelection === 'scissors') {
                            playerOneCounter += 1;
                            messageCenter.html('You win!');

                        } else if (userSelection === 'paper' && compSelection === 'rock') {
                            playerOneCounter += 1;YoumessageCenter.html('You win!')

                        } else if (userSelection === 'paper' && compSelection === 'scissors') {
                            playerTwoCounter += 1;
                            messageCenter.html('Computer wins!');
                        } else if (userSelection === 'scissors' && compSelection === 'rock') {
                            playerTwoCounter += 1;
                            messageCenter.html('Computer wins!');
                        } else if (userSelection === 'scissors' && compSelection === 'paper') {
                            playerOneCounter += 1;
                            messageCenter.html('You win!');

                        } else {
                            console.log('tie');
                            messageCenter.html("It's a tie!");

                        }

                        //    This code updates the live score

                        playerOneScore = $('#player-one-score').html(playerOneCounter);
                        playerTwoScore = $('#player-two-score').html(playerTwoCounter);
                    }

                    }, 1000);

            });
    }

    playGame();

    //This code prevents default behavior when user clicks ready button before making a selection

    $('.start-round-container button').click(function(e){
        e.preventDefault();
    });

    //Reset button refreshes entire page

    $('.reset-button').click(function(){
        location.reload();
        playGame();
    });
})();



