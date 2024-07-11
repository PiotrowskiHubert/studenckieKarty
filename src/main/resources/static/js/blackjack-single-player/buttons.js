class Buttons{
    constructor(game) {
        this.game = game;

        this.betButtonsConfig = new BetButtonsConfig();
        this.dealerButtonsConfig = new DealerButtonsConfig();
        this.gameButtonsConfig = new GameButtonsConfig();
        this.aceButtonConfig = new AceButtonsConfig();

        this.betButtons = [];
        this.dealerButtons = [];
        this.gameButtons = [];
        this.aceButtons = [];

        this.bet1Button = this.betButtonsConfig.bet1Button(this.game);
        this.bet5Button = this.betButtonsConfig.bet5Button(this.game);
        this.bet10Button = this.betButtonsConfig.bet10Button(this.game);
        this.betM1Button = this.betButtonsConfig.betM1Button(this.game);
        this.betM5Button = this.betButtonsConfig.betM5Button(this.game);
        this.betM10Button = this.betButtonsConfig.betM10Button(this.game);
        this.betOk = this.betButtonsConfig.betOkButton(this.game);
        this.betCancel = this.betButtonsConfig.betCancelButton(this.game);

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

        this.dealerFrogButton = this.dealerButtonsConfig.dealerFrogButton(this.game);
        this.dealerBearButton = this.dealerButtonsConfig.dealerBearButton(this.game);
        this.dealerRavenButton = this.dealerButtonsConfig.dealerRavenButton(this.game);
        this.dealerSpiderButton = this.dealerButtonsConfig.dealerSpiderButton(this.game);

        this.dealerButtons.push(
            this.dealerFrogButton,
            this.dealerBearButton,
            this.dealerRavenButton,
            this.dealerSpiderButton
        );

        this.gameHitButton = this.gameButtonsConfig.gameHitButton(this.game);
        this.gameStandButton = this.gameButtonsConfig.gameStandButton(this.game)

        this.gameButtons.push(
            this.gameHitButton,
            this.gameStandButton
        );

        this.aceValue1Button = this.aceButtonConfig.aceValue1Button(this.game);
        this.aceValue11Button = this.aceButtonConfig.aceValue11Button(this.game);

        this.aceButtons.push(
            this.aceValue1Button,
            this.aceValue11Button
        );


    }
}