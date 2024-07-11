class AceButtonsConfig {
    constructor() {
        this.aceButtonWidth = 100;
        this.aceButtonHeight = 144;
        this.aceButtonOffset = 125;
    }

    aceValue1Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.aceButtonWidth/2 - this.aceButtonOffset,
            game.canvas.height/2 - this.aceButtonHeight/2,
            this.aceButtonWidth,
            this.aceButtonHeight,
            "aceValue1Button",
            "15",
            "+1"
        );
    }

    aceValue11Button(game){
        return new MyButtonWithText(
            game,
            game.canvas.width/2 - this.aceButtonWidth/2 + this.aceButtonOffset,
            game.canvas.height/2 - this.aceButtonHeight/2,
            this.aceButtonWidth,
            this.aceButtonHeight,
            "aceValue11Button",
            "16",
            "+11"
        );
    }
}