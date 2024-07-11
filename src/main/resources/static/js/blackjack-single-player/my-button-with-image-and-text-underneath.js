class MyButtonWithImageAndTextUnderneath{
    constructor(game, posX, posY, width, height, name, id, image, text) {
        this.game = game;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.name = name;
        this.id = id;

        this.text = text;
        this.image = image;

        this.mouseOver = false;
        this.clicked = false;
    }

    draw(){
        this.game.ctx.fillStyle = 'rgb(7,103,103)';
        this.game.ctx.fillRect(
            this.posX,
            this.posY,
            this.width,
            this.height
        );

        if (!this.mouseOver){

        }else if (this.mouseOver){
            this.game.ctx.fillStyle = 'rgba(0,0,0,0.33)';
            this.game.ctx.fillRect(
                this.posX,
                this.posY,
                this.width,
                this.height
            );
        }

        this.game.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height
        )

        if (this.clicked){

        }

        //draw border
        this.game.ctx.strokeStyle = 'rgb(255,255,255)';
        this.game.ctx.lineWidth = 2;
        this.game.ctx.strokeRect(
            this.posX,
            this.posY,
            this.width,
            this.height
        );

       //if text is not null draw text, 25 px from the bottom of the button and centered regard to the button
        if (this.text !== null){
            this.game.ctx.fillStyle = 'white';
            this.game.ctx.font = '45px Arial';
            this.game.ctx.fillText(
                this.text,
                this.posX + this.width/2 - this.game.ctx.measureText(this.text).width/2,
                this.posY + this.height + 50
            );
        }

    }
}