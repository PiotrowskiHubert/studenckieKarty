class Game {
    constructor(canvas, context, nickname, balance) {
        this.canvas = canvas;
        this.ctx = context;

        this.mouseX = null;
        this.mouseY = null;
        this.mouseClick = false;

        this.resize(window.innerWidth, window.innerHeight);

        this.image = new Image();

        this.image.src = '../../img/blackjack-single-player/game-table-final.PNG';
        this.image.onload = () => {
            this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
        }

        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height = this.baseHeight;

        this.buttons = new Buttons(this);

        this.player = new Player(this, nickname, balance);

        this.gameCardDeck = new GameCardDeck(this);
        this.gameState = 'PLACE_BET';
        this.turnState = 'PLAYER_TURN';
        this.aceOccured = false;
        this.playerAcesAtStart = 0;
        this.dealerAcesAtStart = 0;

        this.winner = null;
        this.prizeGranted = false;


        window.addEventListener('resize', e=> {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });
        document.addEventListener('mousemove', (event) => {
            const navbar = document.querySelector('.navbar');

            this.mouseX = event.clientX - canvas.width * 0.125
            this.mouseY = event.clientY - canvas.height * 0.1 - navbar.offsetHeight;
            parseInt(this.mouseX);
            parseInt(this.mouseY);
        });
        document.addEventListener('click', (event) => {
            this.mouseClick = true;
        });
    }

    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.fillStyle = 'red';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height = this.baseHeight;
    }

    render(){
        this.update();
        this.draw();
    }

    update(){
        function buttonAction(){
            console.log("a")
        }

        const buttonUpdate = (button, buttonAction) => {
            if (this.mouseX >= (button.posX * 0.75) &&
                this.mouseX <= ((button.posX + button.width) * 0.75) &&
                this.mouseY >= (button.posY * 0.75) &&
                this.mouseY <= ((button.posY + button.height) * 0.75)
            ){
                button.mouseOver = true;

                if(this.mouseClick){
                    button.clicked = true;
                    if (button.clicked){

                        // BUTTON ACTION //

                        button.clicked = false;
                    }
                    this.mouseClick = false;
                }else {
                    button.clicked = false;
                }
            }else {
                if (button.mouseOver){
                    button.mouseOver = false;
                }
            }
        }

        const placeBetUpdate = () => {
            if (this.mouseX >= (this.buttons.bet1Button.posX * 0.75) &&
                this.mouseX <= ((this.buttons.bet1Button.posX + this.buttons.bet1Button.width) * 0.75) &&
                this.mouseY >= (this.buttons.bet1Button.posY * 0.75) &&
                this.mouseY <= ((this.buttons.bet1Button.posY + this.buttons.bet1Button.height) * 0.75)
            ) {
                this.buttons.bet1Button.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.bet1Button.clicked = true;
                    if (this.buttons.bet1Button.clicked) {
                        if (this.player.playerProfile.balance >= 1) {
                            this.player.bet += 1;
                            this.player.playerProfile.balance -= 1;
                        } else {
                            this.player.bet += this.player.playerProfile.balance;
                            this.player.playerProfile.balance = 0;
                        }
                        this.buttons.bet1Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.bet1Button.clicked = false;
                }
            } else {
                if (this.buttons.bet1Button.mouseOver) {
                    this.buttons.bet1Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.bet5Button.posX * 0.75) &&
                this.mouseX <= ((this.buttons.bet5Button.posX + this.buttons.bet5Button.width) * 0.75) &&
                this.mouseY >= (this.buttons.bet5Button.posY * 0.75) &&
                this.mouseY <= ((this.buttons.bet5Button.posY + this.buttons.bet5Button.height) * 0.75)
            ) {
                this.buttons.bet5Button.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.bet5Button.clicked = true;
                    if (this.buttons.bet5Button.clicked) {
                        if (this.player.playerProfile.balance >= 5) {
                            this.player.bet += 5;
                            this.player.playerProfile.balance -= 5;
                        } else {
                            this.player.bet += this.player.playerProfile.balance;
                            this.player.playerProfile.balance = 0;
                        }
                        this.buttons.bet5Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.bet5Button.clicked = false;
                }
            } else {
                if (this.buttons.bet5Button.mouseOver) {
                    this.buttons.bet5Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.bet10Button.posX * 0.75) &&
                this.mouseX <= ((this.buttons.bet10Button.posX + this.buttons.bet10Button.width) * 0.75) &&
                this.mouseY >= (this.buttons.bet10Button.posY * 0.75) &&
                this.mouseY <= ((this.buttons.bet10Button.posY + this.buttons.bet10Button.height) * 0.75)
            ) {
                this.buttons.bet10Button.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.bet10Button.clicked = true;
                    if (this.buttons.bet10Button.clicked) {
                        if (this.player.playerProfile.balance >= 10) {
                            this.player.bet += 10;
                            this.player.playerProfile.balance -= 10;
                        } else {
                            this.player.bet += this.player.playerProfile.balance;
                            this.player.playerProfile.balance = 0;
                        }
                        this.buttons.bet10Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.bet10Button.clicked = false;
                }
            } else {
                if (this.buttons.bet10Button.mouseOver) {
                    this.buttons.bet10Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.betM1Button.posX * 0.75) &&
                this.mouseX <= ((this.buttons.betM1Button.posX + this.buttons.betM1Button.width) * 0.75) &&
                this.mouseY >= (this.buttons.betM1Button.posY * 0.75) &&
                this.mouseY <= ((this.buttons.betM1Button.posY + this.buttons.betM1Button.height) * 0.75)
            ) {
                this.buttons.betM1Button.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.betM1Button.clicked = true;
                    if (this.buttons.betM1Button.clicked) {
                        if (this.player.bet >= 1) {
                            this.player.bet -= 1;
                            this.player.playerProfile.balance += 1;
                        } else {
                            this.player.playerProfile.balance += this.player.bet;
                            this.player.bet = 0;
                        }
                        this.buttons.betM1Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.betM1Button.clicked = false;
                }
            } else {
                if (this.buttons.betM1Button.mouseOver) {
                    this.buttons.betM1Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.betM5Button.posX * 0.75) &&
                this.mouseX <= ((this.buttons.betM5Button.posX + this.buttons.betM5Button.width) * 0.75) &&
                this.mouseY >= (this.buttons.betM5Button.posY * 0.75) &&
                this.mouseY <= ((this.buttons.betM5Button.posY + this.buttons.betM5Button.height) * 0.75)
            ) {
                this.buttons.betM5Button.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.betM5Button.clicked = true;
                    if (this.buttons.betM5Button.clicked) {
                        if (this.player.bet >= 5) {
                            this.player.bet -= 5;
                            this.player.playerProfile.balance += 5;
                        } else {
                            this.player.playerProfile.balance += this.player.bet;
                            this.player.bet = 0;
                        }
                        this.buttons.betM5Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.betM5Button.clicked = false;
                }
            } else {
                if (this.buttons.betM5Button.mouseOver) {
                    this.buttons.betM5Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.betM10Button.posX * 0.75) &&
                this.mouseX <= ((this.buttons.betM10Button.posX + this.buttons.betM10Button.width) * 0.75) &&
                this.mouseY >= (this.buttons.betM10Button.posY * 0.75) &&
                this.mouseY <= ((this.buttons.betM10Button.posY + this.buttons.betM10Button.height) * 0.75)
            ) {
                this.buttons.betM10Button.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.betM10Button.clicked = true;
                    if (this.buttons.betM10Button.clicked) {
                        if (this.player.bet >= 10) {
                            this.player.bet -= 10;
                            this.player.playerProfile.balance += 10;
                        } else {
                            this.player.playerProfile.balance += this.player.bet;
                            this.player.bet = 0;
                        }
                        this.buttons.betM10Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.betM10Button.clicked = false;
                }
            } else {
                if (this.buttons.betM10Button.mouseOver) {
                    this.buttons.betM10Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.betOk.posX * 0.75) &&
                this.mouseX <= ((this.buttons.betOk.posX + this.buttons.betOk.width) * 0.75) &&
                this.mouseY >= (this.buttons.betOk.posY * 0.75) &&
                this.mouseY <= ((this.buttons.betOk.posY + this.buttons.betOk.height) * 0.75)
            ){
                this.buttons.betOk.mouseOver = true;

                if(this.mouseClick){
                    this.buttons.betOk.clicked = true;
                    if (this.buttons.betOk.clicked){
                        if (this.player.bet > 0){
                            sendBetToServer('/games/v1/blackjack-single-player/bet', { bet: this.player.bet })
                                .then(data => {
                                    this.player.playerProfile.balance -= this.player.bet;
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                }
                            );

                            this.gameState = 'SELECT_DEALER';
                        }
                        this.buttons.betOk.clicked = false;
                    }
                    this.mouseClick = false;
                }else {
                    this.buttons.betOk.clicked = false;
                }
            }else {
                if (this.buttons.betOk.mouseOver){
                    this.buttons.betOk.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.betCancel.posX * 0.75) &&
                this.mouseX <= ((this.buttons.betCancel.posX + this.buttons.betCancel.width) * 0.75) &&
                this.mouseY >= (this.buttons.betCancel.posY * 0.75) &&
                this.mouseY <= ((this.buttons.betCancel.posY + this.buttons.betCancel.height) * 0.75)
            ){
                this.buttons.betCancel.mouseOver = true;

                if(this.mouseClick){
                    this.buttons.betCancel.clicked = true;
                    if (this.buttons.betCancel.clicked){
                        window.location.href = '/';
                        this.buttons.betCancel.clicked = false;
                    }
                    this.mouseClick = false;
                }else {
                    this.buttons.betCancel.clicked = false;
                }
            }else {
                if (this.buttons.betCancel.mouseOver){
                    this.buttons.betCancel.mouseOver = false;
                }
            }

            if (this.mouseClick){
                this.mouseClick = false;
            }
        }
        const selectDealerUpdate = () => {
            if (this.mouseX >= (this.buttons.dealerFrogButton.posX * 0.75) &&
                this.mouseX <= ((this.buttons.dealerFrogButton.posX + this.buttons.dealerFrogButton.width) * 0.75) &&
                this.mouseY >= (this.buttons.dealerFrogButton.posY * 0.75) &&
                this.mouseY <= ((this.buttons.dealerFrogButton.posY + this.buttons.dealerFrogButton.height) * 0.75)
            ) {
                this.buttons.dealerFrogButton.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.dealerFrogButton.clicked = true;
                    if (this.buttons.dealerFrogButton.clicked) {
                        this.dealer = new Dealer(this, this.buttons.dealerFrogButton.text, this.buttons.dealerFrogButton.image.src);
                        this.gameState = 'GET_START_CARDS';
                        this.buttons.dealerFrogButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.dealerFrogButton.clicked = false;
                }
            } else {
                if (this.buttons.dealerFrogButton.mouseOver) {
                    this.buttons.dealerFrogButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.dealerBearButton.posX * 0.75) &&
                this.mouseX <= ((this.buttons.dealerBearButton.posX + this.buttons.dealerBearButton.width) * 0.75) &&
                this.mouseY >= (this.buttons.dealerBearButton.posY * 0.75) &&
                this.mouseY <= ((this.buttons.dealerBearButton.posY + this.buttons.dealerBearButton.height) * 0.75)
            ) {
                this.buttons.dealerBearButton.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.dealerBearButton.clicked = true;
                    if (this.buttons.dealerBearButton.clicked) {
                        this.dealer = new Dealer(this, this.buttons.dealerBearButton.text, this.buttons.dealerBearButton.image.src)
                        this.gameState = 'GET_START_CARDS';
                        this.buttons.dealerBearButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.dealerBearButton.clicked = false;
                }
            } else {
                if (this.buttons.dealerBearButton.mouseOver) {
                    this.buttons.dealerBearButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.dealerRavenButton.posX * 0.75) &&
                this.mouseX <= ((this.buttons.dealerRavenButton.posX + this.buttons.dealerRavenButton.width) * 0.75) &&
                this.mouseY >= (this.buttons.dealerRavenButton.posY * 0.75) &&
                this.mouseY <= ((this.buttons.dealerRavenButton.posY + this.buttons.dealerRavenButton.height) * 0.75)
            ) {
                this.buttons.dealerRavenButton.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.dealerRavenButton.clicked = true;
                    if (this.buttons.dealerRavenButton.clicked) {
                        this.dealer = new Dealer(this, this.buttons.dealerRavenButton.text, this.buttons.dealerRavenButton.image.src)
                        this.gameState = 'GET_START_CARDS';
                        this.buttons.dealerRavenButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.dealerRavenButton.clicked = false;
                }
            } else {
                if (this.buttons.dealerRavenButton.mouseOver) {
                    this.buttons.dealerRavenButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.dealerSpiderButton.posX * 0.75) &&
                this.mouseX <= ((this.buttons.dealerSpiderButton.posX + this.buttons.dealerSpiderButton.width) * 0.75) &&
                this.mouseY >= (this.buttons.dealerSpiderButton.posY * 0.75) &&
                this.mouseY <= ((this.buttons.dealerSpiderButton.posY + this.buttons.dealerSpiderButton.height) * 0.75)
            ) {
                this.buttons.dealerSpiderButton.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.dealerSpiderButton.clicked = true;
                    if (this.buttons.dealerSpiderButton.clicked) {
                        this.dealer = new Dealer(this, this.buttons.dealerSpiderButton.text, this.buttons.dealerSpiderButton.image.src)
                        this.gameState = 'GET_START_CARDS';
                        this.buttons.dealerSpiderButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.dealerSpiderButton.clicked = false;
                }
            } else {
                if (this.buttons.dealerSpiderButton.mouseOver) {
                    this.buttons.dealerSpiderButton.mouseOver = false;
                }
            }

            if (this.mouseClick){
                this.mouseClick = false;
            }
        }
        const getStartCardsUpdate = () => {

            this.dealer.getStartCard(this.gameCardDeck.cardDeck.cards.pop());
            this.dealer.getStartCard(this.gameCardDeck.cardDeck.cards.pop());

            this.player.getStartCard(this.gameCardDeck.cardDeck.cards.pop());
            this.player.getStartCard(this.gameCardDeck.cardDeck.cards.pop());

            for (let i = 0; i < this.player.cards.length; i++) {
                if (this.player.cards[i].name.charAt(0) === 'A'){
                    this.playerAcesAtStart++;
                }
            }

            for (let i = 0; i < this.dealer.cards.length; i++) {
                if (this.dealer.cards[i].name.charAt(0) === 'A'){
                    this.dealerAcesAtStart++;
                }
            }

            this.gameState = 'GAME';
        }
        const gameUpdate = () => {
            if (this.mouseX >= (this.buttons.gameHitButton.posX * 0.75) &&
                this.mouseX <= ((this.buttons.gameHitButton.posX + this.buttons.gameHitButton.width) * 0.75) &&
                this.mouseY >= (this.buttons.gameHitButton.posY * 0.75) &&
                this.mouseY <= ((this.buttons.gameHitButton.posY + this.buttons.gameHitButton.height) * 0.75)
            ){
                this.buttons.gameHitButton.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.gameHitButton.clicked = true;
                    if (this.buttons.gameHitButton.clicked && !this.player.stand) {
                        this.player.getCard();

                        this.buttons.gameHitButton.clicked = false;
                        this.buttons.gameHitButton.mouseOver = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.gameHitButton.clicked = false;
                }
            } else {
                if (this.buttons.gameHitButton.mouseOver) {
                    this.buttons.gameHitButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.buttons.gameStandButton.posX * 0.75) &&
                this.mouseX <= ((this.buttons.gameStandButton.posX + this.buttons.gameStandButton.width) * 0.75) &&
                this.mouseY >= (this.buttons.gameStandButton.posY * 0.75) &&
                this.mouseY <= ((this.buttons.gameStandButton.posY + this.buttons.gameStandButton.height) * 0.75)
            ) {
                this.buttons.gameStandButton.mouseOver = true;

                if (this.mouseClick) {
                    this.buttons.gameStandButton.clicked = true;

                    if (this.buttons.gameStandButton.clicked && !this.player.stand) {
                        this.player.stand = true;
                        this.turnState = 'DEALER_TURN';
                        this.buttons.gameStandButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.buttons.gameStandButton.clicked = false;
                }
            } else {
                if (this.buttons.gameStandButton.mouseOver) {
                    this.buttons.gameStandButton.mouseOver = false;
                }
            }

            if (this.mouseClick){
                this.mouseClick = false;
            }
        }
        const turnUpdate = () => {
            switch (this.turnState) {
                case 'PLAYER_TURN':
                    if (this.aceOccured){
                        if (this.mouseX >= (this.buttons.aceValue1Button.posX * 0.75) &&
                            this.mouseX <= ((this.buttons.aceValue1Button.posX + this.buttons.aceValue1Button.width) * 0.75) &&
                            this.mouseY >= (this.buttons.aceValue1Button.posY * 0.75) &&
                            this.mouseY <= ((this.buttons.aceValue1Button.posY + this.buttons.aceValue1Button.height) * 0.75)
                        ) {
                            this.buttons.aceValue1Button.mouseOver = true;

                            if (this.mouseClick) {
                                this.buttons.aceValue1Button.clicked = true;
                                if (this.buttons.aceValue1Button.clicked) {
                                    this.player.addPoints(1);
                                    this.aceOccured = false;
                                    this.buttons.aceValue1Button.clicked = false;
                                }

                                this.mouseClick = false;
                            } else {
                                this.buttons.aceValue1Button.clicked = false;
                            }
                        } else {
                            if (this.buttons.aceValue1Button.mouseOver) {
                                this.buttons.aceValue1Button.mouseOver = false;
                            }
                        }

                        if (this.mouseX >= (this.buttons.aceValue11Button.posX * 0.75) &&
                            this.mouseX <= ((this.buttons.aceValue11Button.posX + this.buttons.aceValue11Button.width) * 0.75) &&
                            this.mouseY >= (this.buttons.aceValue11Button.posY * 0.75) &&
                            this.mouseY <= ((this.buttons.aceValue11Button.posY + this.buttons.aceValue11Button.height) * 0.75)
                        ) {
                            this.buttons.aceValue11Button.mouseOver = true;

                            if (this.mouseClick) {
                                this.buttons.aceValue11Button.clicked = true;
                                if (this.buttons.aceValue11Button.clicked) {
                                    this.player.addPoints(11);
                                    this.aceOccured = false;
                                    this.buttons.aceValue11Button.clicked = false;
                                }

                                this.mouseClick = false;
                            } else {
                                this.buttons.aceValue11Button.clicked = false;
                            }
                        } else {
                            if (this.buttons.aceValue11Button.mouseOver) {
                                this.buttons.aceValue11Button.mouseOver = false;
                            }
                        }

                        if (this.mouseClick){
                            this.mouseClick = false;
                        }
                    }else {
                        gameUpdate();
                    }
                    break;
                case 'DEALER_TURN':
                    this.dealer.perform();
                    break;
            }
        }

        switch (this.gameState) {
            case 'PLACE_BET':
                placeBetUpdate();
                break;
            case 'SELECT_DEALER':
                selectDealerUpdate();
                break;
            case 'GET_START_CARDS':
                getStartCardsUpdate();
                break;
            case 'GAME':
                if (this.playerAcesAtStart > 0){
                    if (this.mouseX >= (this.buttons.aceValue1Button.posX * 0.75) &&
                        this.mouseX <= ((this.buttons.aceValue1Button.posX + this.buttons.aceValue1Button.width) * 0.75) &&
                        this.mouseY >= (this.buttons.aceValue1Button.posY * 0.75) &&
                        this.mouseY <= ((this.buttons.aceValue1Button.posY + this.buttons.aceValue1Button.height) * 0.75)
                    ) {
                        this.buttons.aceValue1Button.mouseOver = true;

                        if (this.mouseClick) {
                            this.buttons.aceValue1Button.clicked = true;
                            if (this.buttons.aceValue1Button.clicked) {
                                this.player.addPoints(1);
                                this.playerAcesAtStart--;
                                this.buttons.aceValue1Button.clicked = false;
                            }

                            this.mouseClick = false;
                        } else {
                            this.buttons.aceValue1Button.clicked = false;
                        }
                    } else {
                        if (this.buttons.aceValue1Button.mouseOver) {
                            this.buttons.aceValue1Button.mouseOver = false;
                        }
                    }

                    if (this.mouseX >= (this.buttons.aceValue11Button.posX * 0.75) &&
                        this.mouseX <= ((this.buttons.aceValue11Button.posX + this.buttons.aceValue11Button.width) * 0.75) &&
                        this.mouseY >= (this.buttons.aceValue11Button.posY * 0.75) &&
                        this.mouseY <= ((this.buttons.aceValue11Button.posY + this.buttons.aceValue11Button.height) * 0.75)
                    ) {
                        this.buttons.aceValue11Button.mouseOver = true;

                        if (this.mouseClick) {
                            this.buttons.aceValue11Button.clicked = true;
                            if (this.buttons.aceValue11Button.clicked) {
                                this.player.addPoints(11);
                                this.playerAcesAtStart--;
                                this.buttons.aceValue11Button.clicked = false;
                            }

                            this.mouseClick = false;
                        } else {
                            this.buttons.aceValue11Button.clicked = false;
                        }
                    } else {
                        if (this.buttons.aceValue11Button.mouseOver) {
                            this.buttons.aceValue11Button.mouseOver = false;
                        }
                    }
                }else if(this.dealerAcesAtStart>0) {
                    let ACE_VALUE_1 = 1;
                    let ACE_VALUE_11 = 11;
                    const playerHandValue = this.player.points;
                    const dealerHandValue = this.dealer.points;

                    if (this.dealerAcesAtStart < 2){
                        if (dealerHandValue > 10){
                            this.dealer.addPoints(ACE_VALUE_1);
                        }else {
                            this.dealer.addPoints(ACE_VALUE_11);
                        }
                        this.dealerAcesAtStart--;
                    }else {
                        this.dealer.addPoints(ACE_VALUE_11);
                        this.dealer.addPoints(ACE_VALUE_1);
                        this.dealerAcesAtStart--;
                        this.dealerAcesAtStart--;
                    }

                }else {
                    turnUpdate();

                    if(this.player.stand && this.dealer.stand){
                        this.gameState = 'POST_GAME';
                    }
                }

                if (this.player.stand || this.player.points >= 21){
                    if (this.player.points >= 21 || this.dealer.points >= 21){
                        this.gameState = 'POST_GAME';
                        this.player.stand = true;

                        if (!this.dealer.stand){
                            this.dealer.stand = true;
                        }
                    }
                }

                if (this.dealer.stand && this.player.stand){
                    this.gameState = 'POST_GAME';
                }

                break;
            case 'POST_GAME':
                if (this.player.points > 21) {
                    this.winner = 'DEALER';
                }else if (this.dealer.points > 21) {
                    this.winner = 'PLAYER';
                }else if ((this.player.points > this.dealer.points)){
                    this.winner = 'PLAYER';
                }else if (this.player.points < this.dealer.points) {
                    this.winner = 'DEALER';
                }else {
                    this.winner = 'DRAW';
                }

                if (this.winner === 'PLAYER'){

                    if (!this.prizeGranted){
                        let prize = this.player.bet*2;

                        sendBetToServer('/games/v1/blackjack-single-player/getPrize', { prize: prize })
                            .then(data => {
                                this.player.playerProfile.balance += prize;
                            })
                            .catch(error => {
                                    console.error('Error:', error);
                                }
                            );

                        this.prizeGranted = true;
                    }

                }

                break;
        }

        updateCount++;
    }

    draw(){
        drawCount++;

        const drawGrids = () => {
            this.ctx.fillStyle = 'blue';
            for (let i = 0; i < this.canvas.width; i+=this.canvas.width/20) {
                this.ctx.fillRect(i, 0, 1, this.canvas.height);
            }

            this.ctx.fillStyle = 'blue';
            for (let i = 0; i < this.canvas.height; i+=this.canvas.height/20) {
                this.ctx.fillRect(0, i, this.canvas.width, 1);
            }

            this.ctx.fillStyle = 'white';
            this.ctx.fillRect(
                0,
                (this.ctx.canvas.height/2)-1,
                this.ctx.canvas.width,
                2
            )

            this.ctx.fillStyle = 'white';
            this.ctx.fillRect(
                (this.ctx.canvas.width/2)-1,
                0,
                2,
                this.ctx.canvas.height
            )
        }
        const drawUpsAndFps = () => {
            this.ctx.fillStyle = 'white';
            this.ctx.font = '20px Arial';
            this.ctx.fillText(`UPS: ${updatesPerSecond}`, 10, 20);
            this.ctx.fillText(`FPS: ${framesPerSecond}`, 10, 50);
        }

        const drawBackgroundImage = () => {
            this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
        }
        const drawBlackBackground = () => {
            this.ctx.fillStyle = 'rgb(0,0,0)';
            this.ctx.fillRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height
            )
        }
        const drawWhiteBorder = () => {
            this.ctx.strokeStyle = 'rgb(255,255,255)';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height
            )
        }

        const drawPlayer = () => {
            this.player.draw();
        }
        const drawDealer = () => {
            this.dealer.draw();
        }
        const drawGameCardDeck = () => {
            this.gameCardDeck.drawGameCardDeck();
        }

        const drawPlaceBetButtons = () => {
            for (let i = 0; i < this.buttons.betButtons.length; i++) {
                this.buttons.betButtons[i].draw();
            }
        }
        const drawDealerButtons = () => {
            for (let i = 0; i < this.buttons.dealerButtons.length; i++) {
                this.buttons.dealerButtons[i].draw();
            }
        }
        const drawGameButtons = () => {
            for (let i = 0; i < this.buttons.gameButtons.length; i++) {
                this.buttons.gameButtons[i].draw();
            }
        }
        const drawAceButtons = () => {
            for (let i = 0; i < this.buttons.aceButtons.length; i++) {
                this.buttons.aceButtons[i].draw();
            }
        }

        const drawBetInfo = () => {
            this.ctx.fillStyle = 'white';
            this.ctx.font = '40px Arial';
            let text = `Bet: ${this.player.bet}`;
            let textWidth = this.ctx.measureText(text).width;
            let textHeight = parseInt(this.ctx.font) * 0.75;
            this.ctx.fillText(
                text,
                this.canvas.width/2 - textWidth/2,
                this.canvas.height/2 + textHeight/2
            );
        }
        const drawBalanceInfo = () => {
            this.ctx.fillStyle = 'white';
            this.ctx.font = '40px Arial';
            let balanceText = `Balance: ${this.player.playerProfile.balance}`;
            let balanceTextWidth = this.ctx.measureText(balanceText).width;
            let balanceTextHeight = parseInt(this.ctx.font) * 0.75;
            this.ctx.fillText(
                balanceText,
                this.canvas.width/2 - balanceTextWidth/2,
                this.canvas.height/2 + balanceTextHeight/2 - 225
            );
        }
        const drawCenteredText = (text, fontSize, color, posX, posY) => {
            this.ctx.fillStyle = color;
            this.ctx.font = `${fontSize}px Arial`;
            let textWidth = this.ctx.measureText(text).width;
            let textHeight = parseInt(this.ctx.font) * 0.75;
            this.ctx.fillText(
                text,
                posX - textWidth/2,
                posY + textHeight/2
            );
        }
        const drawMatchResult = () => {
            this.ctx.fillStyle = 'blue';
            this.ctx.font = '40px Arial';
            let text = this.winner === 'PLAYER' ? 'You win!' : this.winner === 'DEALER' ? 'You lose!' : 'Draw!';
            let textWidth = this.ctx.measureText(text).width;
            let textHeight = parseInt(this.ctx.font) * 0.75;
            this.ctx.fillText(
                text,
                this.canvas.width/2 - textWidth/2,
                this.canvas.height/2 + textHeight/2
            );
        }

        switch (this.gameState) {
            case 'PLACE_BET':
                drawBlackBackground();
                drawWhiteBorder();
                drawCenteredText('Place your bet', 60, 'white', this.canvas.width/2, this.canvas.height/2 - 350)
                drawPlaceBetButtons();
                drawBetInfo();
                drawBalanceInfo();
                break;
            case 'SELECT_DEALER':
                drawBlackBackground();
                drawWhiteBorder();
                drawCenteredText('Select dealer', 60, 'white', this.canvas.width/2, this.canvas.height/2 - 385)
                drawDealerButtons();
                break;
            case 'GET_START_CARDS':
                drawBackgroundImage();
                drawPlayer();
                drawDealer();
                drawGameCardDeck();
                drawGameButtons();
                break;
            case 'GAME':
                drawBackgroundImage();
                drawPlayer();
                drawDealer();
                drawGameCardDeck();
                drawGameButtons();


                if (this.playerAcesAtStart > 0){
                    drawAceButtons();
                }

                if (this.aceOccured){
                    drawAceButtons();
                }
                break;
            case 'POST_GAME':
                drawBackgroundImage();
                drawPlayer();
                drawDealer();
                drawGameCardDeck();
                // drawBlackBackground();
                // drawWhiteBorder();
                drawMatchResult();
                break;
        }

        // drawUpsAndFps();
        // drawGrids();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;
    ctx.fillStyle = 'gold';

    const game = new Game(canvas, ctx, nickname, balance);

    animate(game);
});

let updateCount = 0;
let drawCount = 0;
let lastUpdateTime = performance.now();
let lastDrawTime = performance.now();
let updatesPerSecond = 0;
let framesPerSecond = 0;
let lastFpsUpdate = performance.now();

function animate(game) {
    const currentTime = performance.now();

    if (currentTime - lastUpdateTime >= 1000) {
        updatesPerSecond = updateCount;
        updateCount = 0;
        lastUpdateTime = currentTime;
    }

    if (currentTime - lastDrawTime >= 1000) {
        framesPerSecond = drawCount;
        drawCount = 0;
        lastDrawTime = currentTime;
    }

    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)
    game.render();
    requestAnimationFrame(() => animate(game));
}

window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    const canvas = document.getElementById('canvas1');

    canvas.style.marginTop = `${navbar.offsetHeight}px`;
});

async function sendBetToServer(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const responseData = await response.json();

    // Aktualizacja salda gracza w navbarze
    updateBalance();

    return responseData;
}

async function sendPrizeToServer(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const responseData = await response.json();

    updateBalance();

    return responseData;
}

function updateBalance() {
    let balanceElement = parent.document.getElementById('balance');
    if (balanceElement) {
        balanceElement.innerText = 'Balance: ' + this.player.playerProfile.balance;
    }
}