class Dealer {
    constructor(game, nickname, imgSrc) {
        this.game = game;
        this.dealerType = null;

        this.nickname = nickname;
        this.image = new Image();
        this.image.src = imgSrc;
        this.points = 0;
        this.cards = [];
        this.stand = false;

        this.dealerDraw = new DealerDraw(this);

        switch (nickname) {
            case 'Vito':
                this.dealerType = new FrogDealer(this);
                break;
            case 'Pedro':
                this.dealerType = new BearDealer(this);
                break;
            case 'Giovani':
                this.dealerType = new RavenDealer(this);
                break;
            case 'Marco':
                this.dealerType = new SpiderDealer(this);
                break;
        }
    }

    perform(){
        this.dealerType.action();
    }

    getCard(){
         const card = this.game.gameCardDeck.cardDeck.getCard();

        let centerX = this.game.canvas.width/2 - card.width/2;
        let cardSpacing = 150;

        card.yPos = this.dealerDraw.infoAreaHeight - this.dealerDraw.infoAreaHeight;

        this.cards.push(card);

        for (let i = 0; i < this.cards.length; i++) {
            let offsetX = (i - (this.cards.length - 1)/2) * cardSpacing;
            this.cards[i].xPos = centerX + offsetX;
        }

        if (card.name.charAt(0) === 'A'){
            if (this.points <= 10){
                this.addPoints(11);
            }else{
                this.addPoints(1);
            }

        }else {
            this.addPoints(card.points);
        }
    }

    getStartCard(card){
        let centerX = this.game.canvas.width/2 - card.width/2;
        let cardSpacing = 150;

        card.yPos = this.dealerDraw.infoAreaHeight - this.dealerDraw.infoAreaHeight;

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
        this.dealerDraw.draw();
    }
}