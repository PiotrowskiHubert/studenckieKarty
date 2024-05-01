class PlayerProfile{
    constructor(game){
        this.game = game;
        this.name = "Name"
        this.bet = 100;
        this.balance = 1000;
    }
    draw(){
        this.game.ctx.fillStyle = 'rgba(0,0,0,0.68)';
        this.game.ctx.fillRect(
            this.game.canvas.width-0.5*this.game.canvas.width-(0.15*this.game.canvas.width/2),
            this.game.canvas.height-0.15*this.game.height,
            0.15*this.game.canvas.width,
            0.15*this.game.canvas.height
        );
    }
}
