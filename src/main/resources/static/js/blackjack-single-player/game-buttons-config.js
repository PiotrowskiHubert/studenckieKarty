class GameButtonsConfig{
    constructor() {
        this.gameButtonWidth = 200;
        this.gameButtonHeight = 100;
        this.gameButtonOffset = 125;
    }

    gameHitButton(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.gameButtonWidth/2 - 1.5*this.gameButtonWidth ,
            game.canvas.height/2 - this.gameButtonHeight/2,
            this.gameButtonWidth,
            this.gameButtonHeight,
            "gameHitButton",
            "13",
            "Hit"
        );
    }

    gameStandButton(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.gameButtonWidth/2 + 1.5*this.gameButtonWidth ,
            game.canvas.height/2 - this.gameButtonHeight/2,
            this.gameButtonWidth,
            this.gameButtonHeight,
            "gameStandButton",
            "14",
            "Stand"
        );
    }
}