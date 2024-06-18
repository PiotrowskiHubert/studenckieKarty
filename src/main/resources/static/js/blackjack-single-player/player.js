class Player{
    constructor(game, nickname, balance) {
        this.game = game;
        this.playerProfile = new PlayerProfile(game, nickname, balance);
        this.playerDraw = new PlayerDraw(this);

        this.points = 0;
        this.bet = 0;
        this.cards = [];

        this.spriteWidth = 1;
        this.spriteHeight = 1;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.xPos = 0;
        this.yPos = 0;
        this.stand = false;
    }

    update(){

    }

    resize(){
        this.width = this.spriteWidth * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
    }

    getCard(){
        const card = this.game.gameCardDeck.cardDeck.getCard();

        let centerX = (this.game.canvas.width/2) - (card.width/2);
        let cardSpacing = 150;

        card.yPos = this.game.canvas.height - card.height;
            //- 2*this.playerDraw.infoAreaHeight - 40;

        this.cards.push(card);

        for (let i = 0; i < this.cards.length; i++) {
            let offsetX = (i - (this.cards.length - 1)/2) * cardSpacing;
            this.cards[i].xPos = centerX + offsetX;
        }

        if (card.name.charAt(0) === 'A'){
            this.game.aceOccured = true;
        }else {
            this.addPoints(card.points);
        }
    }

    getStartCard(card){
        let centerX = (this.game.canvas.width/2) - (card.width/2);
        let cardSpacing = 150;

        card.yPos = this.game.canvas.height - card.height;
        // this.game.canvas.height - 2*this.playerDraw.infoAreaHeight - 40;

        this.cards.push(card);

        for (let i = 0; i < this.cards.length; i++) {
            let offsetX = (i - (this.cards.length - 1)/2) * cardSpacing;
            this.cards[i].xPos = centerX + offsetX;
        }

        if (card.name.charAt(0) === 'A'){

        }else {
            this.addPoints(card.points);
        }

    }

    addPoints(points){
        this.points += points;
    }

    draw(){
        this.playerDraw.draw();
    }
}
