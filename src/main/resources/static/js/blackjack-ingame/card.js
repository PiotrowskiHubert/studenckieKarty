class Card{
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(){
        this.game.ctx.fillStyle = 'white';
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
