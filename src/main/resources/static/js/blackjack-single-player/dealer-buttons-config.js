class DealerButtonsConfig {
    constructor(){
        this.dealerButtonWidth = 200;
        this.dealerButtonHeight = 200;
        this.dealerButtonOffset = 150;
        this.dealerButtonPosY = 200;
    }

    dealerFrogButton(game) {
        const frogImage = new Image();
        frogImage.src = '../../img/blackjack-single-player/portrait-frog.png';

        return new MyButtonWithImageAndTextUnderneath(
            game,
            game.canvas.width/2 - 2*this.dealerButtonWidth - 1.5*this.dealerButtonOffset,
            this.dealerButtonPosY,
            this.dealerButtonWidth,
            this.dealerButtonHeight,
            "dealerFrogButton",
            "9",
            frogImage,
            "Vito"
        );
    }
    dealerBearButton(game) {
        const bearImage = new Image();
        bearImage.src = '../../img/blackjack-single-player/portrait-bear.png';

        return new MyButtonWithImageAndTextUnderneath(
            game,
            game.canvas.width/2 - this.dealerButtonWidth - 0.5*this.dealerButtonOffset,
            this.dealerButtonPosY,
            this.dealerButtonWidth,
            this.dealerButtonHeight,
            "dealerBearButton",
            "10",
            bearImage,
            "Pedro"
        );
    }
    dealerRavenButton(game) {
        const ravenImage = new Image();
        ravenImage.src = '../../img/blackjack-single-player/portrait-raven.png';

        return new MyButtonWithImageAndTextUnderneath(
            game,
            game.canvas.width/2 + 0.5*this.dealerButtonOffset,
            this.dealerButtonPosY,
            this.dealerButtonWidth,
            this.dealerButtonHeight,
            "dealerRavenButton",
            "11",
            ravenImage,
            "Giovani"
        );
    }
    dealerSpiderButton(game) {
        const spiderImage = new Image();
        spiderImage.src = '../../img/blackjack-single-player/portrait-spider.png';

        return new MyButtonWithImageAndTextUnderneath(
            game,
            game.canvas.width/2 + this.dealerButtonWidth + 1.5*this.dealerButtonOffset,
            this.dealerButtonPosY,
            this.dealerButtonWidth,
            this.dealerButtonHeight,
            "dealerSpiderButton",
            "12",
            spiderImage,
            "Marco"
        );
    }

}