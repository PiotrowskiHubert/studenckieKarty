class Card{
    constructor(game, xPos, yPos, width, height,
                name, points, id,
                image, imagePosX, imagePosY, imageWidth, imageHeight) {

        this.game = game;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;

        this.name = name;
        this.points = points;
        this.id = id;

        this.altPoints = (name === 'A') ? 1 : points;

        this.image = image;
        this.imagePosX = imagePosX;
        this.imagePosY = imagePosY;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;

        this.cardDraw = new CardDraw(
            game,
            this
        );
    }

    draw(){
        this.cardDraw.draw();
    }

    drawBackCard(){
        this.cardDraw.drawBack();
    }

}