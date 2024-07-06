class Buttons{
    constructor(game) {
        this.game = game;

        this.testButton = new MyButtonWithText(
            this.game,
            100,
            100,
            100,
            100,
            "test",
            50,

            "test",
        );
    }
}