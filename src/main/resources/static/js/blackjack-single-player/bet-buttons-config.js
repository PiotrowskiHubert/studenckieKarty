class BetButtonsConfig{
    constructor() {
        this.betButtonsWidth = 100;
        this.betButtonsHeight = 50;
        this.betButtonsOffset = 125;

        this.betUtilButtonsWidth = 167.5;
        this.betUtilButtonsHeight = 50;
        this.betUtilButtonsOffset = 125;
    }

    bet1Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width / 2 - this.betButtonsWidth * 1.25 - this.betButtonsWidth / 2,
            game.canvas.height / 2 - this.betButtonsHeight / 2 - this.betButtonsOffset,
            this.betButtonsWidth,
            this.betButtonsHeight,
            "bet1Button",
            "1",
            "+1"
        );
    }
    bet5Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.betButtonsWidth/2,
            game.canvas.height/2 - this.betButtonsHeight/2 - this.betButtonsOffset,
            this.betButtonsWidth,
            this.betButtonsHeight,
            "bet5Button",
            "2",
            "+5"
        );
    }
    bet10Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 + this.betButtonsWidth * 1.25 - this.betButtonsWidth/2,
            game.canvas.height/2 - this.betButtonsHeight/2 - this.betButtonsOffset,
            this.betButtonsWidth,
            this.betButtonsHeight,
            "bet10Button",
            "3",
            "+10"
        );
    }
    betM1Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.betButtonsWidth * 1.25 - this.betButtonsWidth/2,
            game.canvas.height/2 - this.betButtonsHeight/2 + this.betButtonsOffset,
            this.betButtonsWidth,
            this.betButtonsHeight,
            "betMinus1Button",
            "4",
            "-1"
        );
    }
    betM5Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.betButtonsWidth/2,
            game.canvas.height/2 - this.betButtonsHeight/2 + this.betButtonsOffset,
            this.betButtonsWidth,
            this.betButtonsHeight,
            "betMinus5Button",
            "5",
            "-5"
        );
    }
    betM10Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 + this.betButtonsWidth * 1.25 - this.betButtonsWidth/2,
            game.canvas.height/2 - this.betButtonsHeight/2 + this.betButtonsOffset,
            this.betButtonsWidth,
            this.betButtonsHeight,
            "betMinus10Button",
            "6",
            "-10"
        );
    }
    betOkButton(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.betUtilButtonsWidth/2,
            game.canvas.height/2 - (this.betUtilButtonsHeight/2) + 1.65 * this.betButtonsOffset,
            this.betUtilButtonsWidth,
            this.betUtilButtonsHeight,
            "betOk",
            "7",
            "Bet"
        );
    }
    betCancelButton(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.betUtilButtonsWidth/2,
            game.canvas.height/2 - (this.betUtilButtonsHeight/2) + (2.3 * this.betButtonsOffset),
            this.betUtilButtonsWidth,
            this.betUtilButtonsHeight,
            "betCancel",
            "8",
            "Cancel"
        );
    }
}