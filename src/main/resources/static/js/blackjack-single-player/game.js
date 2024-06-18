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
        // this.image.src = '../../img/blackjack-single-player/game_table.png';
        this.image.onload = () => {
            this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
        }

        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height = this.baseHeight;

        this.betButtonsConfig = new BetButtonsConfig();
        this.dealerButtonsConfig = new DealerButtonsConfig();
        this.gameButtonsConfig = new GameButtonsConfig();
        this.aceButtonConfig = new AceButtonsConfig();

        this.betButtons = [];
        this.dealerButtons = [];
        this.gameButtons = [];
        this.aceButtons = [];

        this.bet1Button = this.betButtonsConfig.bet1Button(this);
        this.bet5Button = this.betButtonsConfig.bet5Button(this);
        this.bet10Button = this.betButtonsConfig.bet10Button(this);
        this.betM1Button = this.betButtonsConfig.betM1Button(this);
        this.betM5Button = this.betButtonsConfig.betM5Button(this);
        this.betM10Button = this.betButtonsConfig.betM10Button(this);
        this.betOk = this.betButtonsConfig.betOkButton(this);
        this.betCancel = this.betButtonsConfig.betCancelButton(this);

        this.betButtons.push(
            this.bet1Button,
            this.bet5Button,
            this.bet10Button,
            this.betM1Button,
            this.betM5Button,
            this.betM10Button,
            this.betOk,
            this.betCancel
        );

        this.dealerFrogButton = this.dealerButtonsConfig.dealerFrogButton(this);
        this.dealerBearButton = this.dealerButtonsConfig.dealerBearButton(this);
        this.dealerRavenButton = this.dealerButtonsConfig.dealerRavenButton(this);
        this.dealerSpiderButton = this.dealerButtonsConfig.dealerSpiderButton(this);

        this.dealerButtons.push(
            this.dealerFrogButton,
            this.dealerBearButton,
            this.dealerRavenButton,
            this.dealerSpiderButton
        );

        this.gameHitButton = this.gameButtonsConfig.gameHitButton(this);
        this.gameStandButton = this.gameButtonsConfig.gameStandButton(this)

        this.gameButtons.push(
            this.gameHitButton,
            this.gameStandButton
        );

        this.aceValue1Button = this.aceButtonConfig.aceValue1Button(this);
        this.aceValue11Button = this.aceButtonConfig.aceValue11Button(this);

        this.aceButtons.push(
            this.aceValue1Button,
            this.aceValue11Button
        );

        this.player = new Player(this, nickname, balance);
        // this.dealer = new Dealer(this);

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
        const placeBetUpdate = () => {
            if (this.mouseX >= (this.bet1Button.posX * 0.75) &&
                this.mouseX <= ((this.bet1Button.posX + this.bet1Button.width) * 0.75) &&
                this.mouseY >= (this.bet1Button.posY * 0.75) &&
                this.mouseY <= ((this.bet1Button.posY + this.bet1Button.height) * 0.75)
            ) {
                this.bet1Button.mouseOver = true;

                if (this.mouseClick) {
                    this.bet1Button.clicked = true;
                    if (this.bet1Button.clicked) {
                        if (this.player.playerProfile.balance >= 1) {
                            this.player.bet += 1;
                            this.player.playerProfile.balance -= 1;
                        } else {
                            this.player.bet += this.player.playerProfile.balance;
                            this.player.playerProfile.balance = 0;
                        }
                        this.bet1Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.bet1Button.clicked = false;
                }
            } else {
                if (this.bet1Button.mouseOver) {
                    this.bet1Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.bet5Button.posX * 0.75) &&
                this.mouseX <= ((this.bet5Button.posX + this.bet5Button.width) * 0.75) &&
                this.mouseY >= (this.bet5Button.posY * 0.75) &&
                this.mouseY <= ((this.bet5Button.posY + this.bet5Button.height) * 0.75)
            ) {
                this.bet5Button.mouseOver = true;

                if (this.mouseClick) {
                    this.bet5Button.clicked = true;
                    if (this.bet5Button.clicked) {
                        if (this.player.playerProfile.balance >= 5) {
                            this.player.bet += 5;
                            this.player.playerProfile.balance -= 5;
                        } else {
                            this.player.bet += this.player.playerProfile.balance;
                            this.player.playerProfile.balance = 0;
                        }
                        this.bet5Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.bet5Button.clicked = false;
                }
            } else {
                if (this.bet5Button.mouseOver) {
                    this.bet5Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.bet10Button.posX * 0.75) &&
                this.mouseX <= ((this.bet10Button.posX + this.bet10Button.width) * 0.75) &&
                this.mouseY >= (this.bet10Button.posY * 0.75) &&
                this.mouseY <= ((this.bet10Button.posY + this.bet10Button.height) * 0.75)
            ) {
                this.bet10Button.mouseOver = true;

                if (this.mouseClick) {
                    this.bet10Button.clicked = true;
                    if (this.bet10Button.clicked) {
                        if (this.player.playerProfile.balance >= 10) {
                            this.player.bet += 10;
                            this.player.playerProfile.balance -= 10;
                        } else {
                            this.player.bet += this.player.playerProfile.balance;
                            this.player.playerProfile.balance = 0;
                        }
                        this.bet10Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.bet10Button.clicked = false;
                }
            } else {
                if (this.bet10Button.mouseOver) {
                    this.bet10Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.betM1Button.posX * 0.75) &&
                this.mouseX <= ((this.betM1Button.posX + this.betM1Button.width) * 0.75) &&
                this.mouseY >= (this.betM1Button.posY * 0.75) &&
                this.mouseY <= ((this.betM1Button.posY + this.betM1Button.height) * 0.75)
            ) {
                this.betM1Button.mouseOver = true;

                if (this.mouseClick) {
                    this.betM1Button.clicked = true;
                    if (this.betM1Button.clicked) {
                        if (this.player.bet >= 1) {
                            this.player.bet -= 1;
                            this.player.playerProfile.balance += 1;
                        } else {
                            this.player.playerProfile.balance += this.player.bet;
                            this.player.bet = 0;
                        }
                        this.betM1Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.betM1Button.clicked = false;
                }
            } else {
                if (this.betM1Button.mouseOver) {
                    this.betM1Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.betM5Button.posX * 0.75) &&
                this.mouseX <= ((this.betM5Button.posX + this.betM5Button.width) * 0.75) &&
                this.mouseY >= (this.betM5Button.posY * 0.75) &&
                this.mouseY <= ((this.betM5Button.posY + this.betM5Button.height) * 0.75)
            ) {
                this.betM5Button.mouseOver = true;

                if (this.mouseClick) {
                    this.betM5Button.clicked = true;
                    if (this.betM5Button.clicked) {
                        if (this.player.bet >= 5) {
                            this.player.bet -= 5;
                            this.player.playerProfile.balance += 5;
                        } else {
                            this.player.playerProfile.balance += this.player.bet;
                            this.player.bet = 0;
                        }
                        this.betM5Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.betM5Button.clicked = false;
                }
            } else {
                if (this.betM5Button.mouseOver) {
                    this.betM5Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.betM10Button.posX * 0.75) &&
                this.mouseX <= ((this.betM10Button.posX + this.betM10Button.width) * 0.75) &&
                this.mouseY >= (this.betM10Button.posY * 0.75) &&
                this.mouseY <= ((this.betM10Button.posY + this.betM10Button.height) * 0.75)
            ) {
                this.betM10Button.mouseOver = true;

                if (this.mouseClick) {
                    this.betM10Button.clicked = true;
                    if (this.betM10Button.clicked) {
                        if (this.player.bet >= 10) {
                            this.player.bet -= 10;
                            this.player.playerProfile.balance += 10;
                        } else {
                            this.player.playerProfile.balance += this.player.bet;
                            this.player.bet = 0;
                        }
                        this.betM10Button.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.betM10Button.clicked = false;
                }
            } else {
                if (this.betM10Button.mouseOver) {
                    this.betM10Button.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.betOk.posX * 0.75) &&
                this.mouseX <= ((this.betOk.posX + this.betOk.width) * 0.75) &&
                this.mouseY >= (this.betOk.posY * 0.75) &&
                this.mouseY <= ((this.betOk.posY + this.betOk.height) * 0.75)
            ){
                this.betOk.mouseOver = true;

                if(this.mouseClick){
                    this.betOk.clicked = true;
                    if (this.betOk.clicked){
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
                        this.betOk.clicked = false;
                    }
                    this.mouseClick = false;
                }else {
                    this.betOk.clicked = false;
                }
            }else {
                if (this.betOk.mouseOver){
                    this.betOk.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.betCancel.posX * 0.75) &&
                this.mouseX <= ((this.betCancel.posX + this.betCancel.width) * 0.75) &&
                this.mouseY >= (this.betCancel.posY * 0.75) &&
                this.mouseY <= ((this.betCancel.posY + this.betCancel.height) * 0.75)
            ){
                this.betCancel.mouseOver = true;

                if(this.mouseClick){
                    this.betCancel.clicked = true;
                    if (this.betCancel.clicked){
                        window.location.href = '/';
                        this.betCancel.clicked = false;
                    }
                    this.mouseClick = false;
                }else {
                    this.betCancel.clicked = false;
                }
            }else {
                if (this.betCancel.mouseOver){
                    this.betCancel.mouseOver = false;
                }
            }

            if (this.mouseClick){
                this.mouseClick = false;
            }
        }
        const selectDealerUpdate = () => {
            if (this.mouseX >= (this.dealerFrogButton.posX * 0.75) &&
                this.mouseX <= ((this.dealerFrogButton.posX + this.dealerFrogButton.width) * 0.75) &&
                this.mouseY >= (this.dealerFrogButton.posY * 0.75) &&
                this.mouseY <= ((this.dealerFrogButton.posY + this.dealerFrogButton.height) * 0.75)
            ) {
                this.dealerFrogButton.mouseOver = true;

                if (this.mouseClick) {
                    this.dealerFrogButton.clicked = true;
                    if (this.dealerFrogButton.clicked) {
                        this.dealer = new Dealer(this, this.dealerFrogButton.text, this.dealerFrogButton.image.src);
                        this.gameState = 'GET_START_CARDS';
                        this.dealerFrogButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.dealerFrogButton.clicked = false;
                }
            } else {
                if (this.dealerFrogButton.mouseOver) {
                    this.dealerFrogButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.dealerBearButton.posX * 0.75) &&
                this.mouseX <= ((this.dealerBearButton.posX + this.dealerBearButton.width) * 0.75) &&
                this.mouseY >= (this.dealerBearButton.posY * 0.75) &&
                this.mouseY <= ((this.dealerBearButton.posY + this.dealerBearButton.height) * 0.75)
            ) {
                this.dealerBearButton.mouseOver = true;

                if (this.mouseClick) {
                    this.dealerBearButton.clicked = true;
                    if (this.dealerBearButton.clicked) {
                        this.dealer = new Dealer(this, this.dealerBearButton.text, this.dealerBearButton.image.src)
                        this.gameState = 'GET_START_CARDS';
                        this.dealerBearButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.dealerBearButton.clicked = false;
                }
            } else {
                if (this.dealerBearButton.mouseOver) {
                    this.dealerBearButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.dealerRavenButton.posX * 0.75) &&
                this.mouseX <= ((this.dealerRavenButton.posX + this.dealerRavenButton.width) * 0.75) &&
                this.mouseY >= (this.dealerRavenButton.posY * 0.75) &&
                this.mouseY <= ((this.dealerRavenButton.posY + this.dealerRavenButton.height) * 0.75)
            ) {
                this.dealerRavenButton.mouseOver = true;

                if (this.mouseClick) {
                    this.dealerRavenButton.clicked = true;
                    if (this.dealerRavenButton.clicked) {
                        this.dealer = new Dealer(this, this.dealerRavenButton.text, this.dealerRavenButton.image.src)
                        this.gameState = 'GET_START_CARDS';
                        this.dealerRavenButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.dealerRavenButton.clicked = false;
                }
            } else {
                if (this.dealerRavenButton.mouseOver) {
                    this.dealerRavenButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.dealerSpiderButton.posX * 0.75) &&
                this.mouseX <= ((this.dealerSpiderButton.posX + this.dealerSpiderButton.width) * 0.75) &&
                this.mouseY >= (this.dealerSpiderButton.posY * 0.75) &&
                this.mouseY <= ((this.dealerSpiderButton.posY + this.dealerSpiderButton.height) * 0.75)
            ) {
                this.dealerSpiderButton.mouseOver = true;

                if (this.mouseClick) {
                    this.dealerSpiderButton.clicked = true;
                    if (this.dealerSpiderButton.clicked) {
                        this.dealer = new Dealer(this, this.dealerSpiderButton.text, this.dealerSpiderButton.image.src)
                        this.gameState = 'GET_START_CARDS';
                        this.dealerSpiderButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.dealerSpiderButton.clicked = false;
                }
            } else {
                if (this.dealerSpiderButton.mouseOver) {
                    this.dealerSpiderButton.mouseOver = false;
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
            if (this.mouseX >= (this.gameHitButton.posX * 0.75) &&
                this.mouseX <= ((this.gameHitButton.posX + this.gameHitButton.width) * 0.75) &&
                this.mouseY >= (this.gameHitButton.posY * 0.75) &&
                this.mouseY <= ((this.gameHitButton.posY + this.gameHitButton.height) * 0.75)
            ){
                this.gameHitButton.mouseOver = true;

                if (this.mouseClick) {
                    this.gameHitButton.clicked = true;
                    if (this.gameHitButton.clicked && !this.player.stand) {
                        this.player.getCard();

                        this.gameHitButton.clicked = false;
                        this.gameHitButton.mouseOver = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.gameHitButton.clicked = false;
                }
            } else {
                if (this.gameHitButton.mouseOver) {
                    this.gameHitButton.mouseOver = false;
                }
            }

            if (this.mouseX >= (this.gameStandButton.posX * 0.75) &&
                this.mouseX <= ((this.gameStandButton.posX + this.gameStandButton.width) * 0.75) &&
                this.mouseY >= (this.gameStandButton.posY * 0.75) &&
                this.mouseY <= ((this.gameStandButton.posY + this.gameStandButton.height) * 0.75)
            ) {
                this.gameStandButton.mouseOver = true;

                if (this.mouseClick) {
                    this.gameStandButton.clicked = true;

                    if (this.gameStandButton.clicked && !this.player.stand) {
                        this.player.stand = true;
                        this.turnState = 'DEALER_TURN';
                        this.gameStandButton.clicked = false;
                    }

                    this.mouseClick = false;
                } else {
                    this.gameStandButton.clicked = false;
                }
            } else {
                if (this.gameStandButton.mouseOver) {
                    this.gameStandButton.mouseOver = false;
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
                        if (this.mouseX >= (this.aceValue1Button.posX * 0.75) &&
                            this.mouseX <= ((this.aceValue1Button.posX + this.aceValue1Button.width) * 0.75) &&
                            this.mouseY >= (this.aceValue1Button.posY * 0.75) &&
                            this.mouseY <= ((this.aceValue1Button.posY + this.aceValue1Button.height) * 0.75)
                        ) {
                            this.aceValue1Button.mouseOver = true;

                            if (this.mouseClick) {
                                this.aceValue1Button.clicked = true;
                                if (this.aceValue1Button.clicked) {
                                    this.player.addPoints(1);
                                    this.aceOccured = false;
                                    this.aceValue1Button.clicked = false;
                                }

                                this.mouseClick = false;
                            } else {
                                this.aceValue1Button.clicked = false;
                            }
                        } else {
                            if (this.aceValue1Button.mouseOver) {
                                this.aceValue1Button.mouseOver = false;
                            }
                        }

                        if (this.mouseX >= (this.aceValue11Button.posX * 0.75) &&
                            this.mouseX <= ((this.aceValue11Button.posX + this.aceValue11Button.width) * 0.75) &&
                            this.mouseY >= (this.aceValue11Button.posY * 0.75) &&
                            this.mouseY <= ((this.aceValue11Button.posY + this.aceValue11Button.height) * 0.75)
                        ) {
                            this.aceValue11Button.mouseOver = true;

                            if (this.mouseClick) {
                                this.aceValue11Button.clicked = true;
                                if (this.aceValue11Button.clicked) {
                                    this.player.addPoints(11);
                                    this.aceOccured = false;
                                    this.aceValue11Button.clicked = false;
                                }

                                this.mouseClick = false;
                            } else {
                                this.aceValue11Button.clicked = false;
                            }
                        } else {
                            if (this.aceValue11Button.mouseOver) {
                                this.aceValue11Button.mouseOver = false;
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
                    if (this.mouseX >= (this.aceValue1Button.posX * 0.75) &&
                        this.mouseX <= ((this.aceValue1Button.posX + this.aceValue1Button.width) * 0.75) &&
                        this.mouseY >= (this.aceValue1Button.posY * 0.75) &&
                        this.mouseY <= ((this.aceValue1Button.posY + this.aceValue1Button.height) * 0.75)
                    ) {
                        this.aceValue1Button.mouseOver = true;

                        if (this.mouseClick) {
                            this.aceValue1Button.clicked = true;
                            if (this.aceValue1Button.clicked) {
                                this.player.addPoints(1);
                                this.playerAcesAtStart--;
                                this.aceValue1Button.clicked = false;
                            }

                            this.mouseClick = false;
                        } else {
                            this.aceValue1Button.clicked = false;
                        }
                    } else {
                        if (this.aceValue1Button.mouseOver) {
                            this.aceValue1Button.mouseOver = false;
                        }
                    }

                    if (this.mouseX >= (this.aceValue11Button.posX * 0.75) &&
                        this.mouseX <= ((this.aceValue11Button.posX + this.aceValue11Button.width) * 0.75) &&
                        this.mouseY >= (this.aceValue11Button.posY * 0.75) &&
                        this.mouseY <= ((this.aceValue11Button.posY + this.aceValue11Button.height) * 0.75)
                    ) {
                        this.aceValue11Button.mouseOver = true;

                        if (this.mouseClick) {
                            this.aceValue11Button.clicked = true;
                            if (this.aceValue11Button.clicked) {
                                this.player.addPoints(11);
                                this.playerAcesAtStart--;
                                this.aceValue11Button.clicked = false;
                            }

                            this.mouseClick = false;
                        } else {
                            this.aceValue11Button.clicked = false;
                        }
                    } else {
                        if (this.aceValue11Button.mouseOver) {
                            this.aceValue11Button.mouseOver = false;
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

                console.log(this.gameState);

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
            for (let i = 0; i < this.betButtons.length; i++) {
                this.betButtons[i].draw();
            }
        }
        const drawDealerButtons = () => {
            for (let i = 0; i < this.dealerButtons.length; i++) {
                this.dealerButtons[i].draw();
            }
        }
        const drawGameButtons = () => {
            for (let i = 0; i < this.gameButtons.length; i++) {
                this.gameButtons[i].draw();
            }
        }
        const drawAceButtons = () => {
            for (let i = 0; i < this.aceButtons.length; i++) {
                this.aceButtons[i].draw();
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