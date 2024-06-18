class MyButtonWithText {
    constructor(game, posX, posY, width, height, name, id, text) {
        this.game = game;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.name = name;
        this.id = id;

        this.text = text;

        this.mouseOver = false;
        this.clicked = false;
    }

    draw(){
        if (!this.mouseOver){
            this.game.ctx.fillStyle = 'rgb(0,0,0)';
        }else if (this.mouseOver){
            this.game.ctx.fillStyle = 'rgb(220,116,178)';
        }

        if (this.clicked){
            this.game.ctx.fillStyle = 'rgba(0,115,7,0.98)';
        }

        this.game.ctx.fillRect(
            this.posX,
            this.posY,
            this.width,
            this.height
        );

        this.game.ctx.strokeStyle = 'rgb(255,255,255)';
        this.game.ctx.lineWidth = 2;
        this.game.ctx.strokeRect(
            this.posX,
            this.posY,
            this.width,
            this.height
        );

        if (this.text!=null){
            this.game.ctx.fillStyle = 'white';
            this.game.ctx.font = '20px Arial';
            this.game.ctx.fillText(
                this.text,
                this.posX+this.width/2-0.5*this.game.ctx.measureText(this.text).width,
                this.posY+this.height/2+10
            );
        }
    }
}
