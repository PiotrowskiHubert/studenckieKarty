class CardDraw {
    constructor(game, card) {
        this.game = game;
        this.card = card;
    }

    draw() {
        this.drawCardBorder();
        this.drawCard();
    }

    drawBack(){
        this.drawCardBorder();
        this.drawBack();
    }

    drawCard(){

        this.game.ctx.drawImage(
            this.card.image,
            this.card.imagePosX,
            this.card.imagePosY,
            this.card.imageWidth,
            this.card.imageHeight,
            this.card.xPos,
            this.card.yPos,
            this.card.width,
            this.card.height
        );

    }

    drawBack(){
        this.game.gameCardDeck.drawBackOfCard();
    }

    drawCardBorder(){
        this.game.ctx.strokeStyle = 'black';
        this.game.ctx.lineWidth = 2;
        this.game.ctx.strokeRect(
            this.card.xPos,
            this.card.yPos,
            this.card.width,
            this.card.height
        );
    }
}