class DealerDraw{
    constructor(dealer) {
        this.dealer = dealer;
        this.infoAreaWidth = 350;
        this.infoAreaHeight = 125;
        this.spriteWidth = this.infoAreaHeight;
        this.spriteHeight = this.infoAreaHeight;

        this.backOfCardImagePosX = 0;
        this.backOfCardImagePosY = 0;
        this.backOfCardImageWidth = 3000;
        this.backOfCardImageHeight = 5000;
    }

    draw(){
        const drawSprite = () => {
            setFillStyle(getCtx(), 'rgb(7,103,103)');
            this.dealer.game.ctx.fillRect(
                getCanvas().width/2 + this.infoAreaWidth/2 + 4*(this.infoAreaWidth/2) - 150,
                0,
                this.spriteWidth,
                this.spriteHeight
            );

            getCtx().drawImage(
                this.dealer.image,
                getCanvas().width/2 + this.infoAreaWidth/2 + 4*(this.infoAreaWidth/2) - 150,
                0,
                this.spriteWidth,
                this.spriteHeight
            )

            const drawBorder = () => {
                setFillStyle(getCtx(), 'white');
                getCtx().lineWidth = 2;
                getCtx().strokeRect(
                    getCanvas().width/2 + this.infoAreaWidth/2 + 4*(this.infoAreaWidth/2) - 150,
                    0,
                    this.spriteWidth,
                    this.spriteHeight
                );
            }
            drawBorder();
        }
        const drawCards = () => {
            if (this.dealer.cards.length>0){
                this.dealer.cards.forEach(card => {
                    card.draw();
                });

                if (!this.dealer.game.player.stand){
                    for (let i = 0; i < this.dealer.cards.length; i++) {
                        if (i === 1){
                            this.dealer.game.ctx.drawImage(
                                this.dealer.game.gameCardDeck.cardBack  ,
                                this.backOfCardImagePosX,
                                this.backOfCardImagePosY,
                                this.backOfCardImageWidth,
                                this.backOfCardImageHeight,
                                this.dealer.cards[i].xPos,
                                this.dealer.cards[i].yPos,
                                this.dealer.cards[i].width,
                                this.dealer.cards[i].height
                            );
                            break;
                        }
                    }
                }
            }
        }
        const drawProfile = () => {
            const drawNickname = () =>{
                setFillStyle(getCtx(), 'white')
                setFontWithSize(getCtx(), 'Arial', 20);
                drawText(
                    getCtx(),
                    "Nickname: " + this.dealer.nickname,
                    0.5*getCanvas().width - (0.15*getCanvas().width/2) + 10 + 4*(this.infoAreaWidth/2),
                    20
                );
            }
            const drawPoints = () => {
                setFillStyle(getCtx(), 'white')
                setFontWithSize(getCtx(), 'Arial', 20);
                getCtx().fillText(
                    "Points: " + this.dealer.points,
                    0.5*getCanvas().width - (0.15*getCanvas().width/2) + 10 + 4*(this.infoAreaWidth/2) - 150,
                    40
                );
            }

            drawNickname();

            if (this.dealer.game.gameState === 'POST_GAME'){
                drawPoints();
            }
        }
        const drawInfoArea = () => {
            setFillStyle(getCtx(), 'rgba(0,0,0,0.68)');
            getCtx().fillRect(
                0.5*getCanvas().width - 0.5*this.infoAreaWidth + 4*(this.infoAreaWidth/2) - 150,
                0,
                this.infoAreaWidth,
                this.infoAreaHeight
            );
        }

        const setFontWithSize = (ctx, font, size) => {
            return ctx.font = `${size}px ${font}`;
        }
        const setFillStyle = (ctx, style) => {
            return ctx.fillStyle = style;
        }
        const drawText = (ctx, text, posX, posY) => {
            return ctx.fillText(text, posX, posY);
        }
        const getCtx = () => {
            return this.dealer.game.ctx;
        }
        const getCanvas = () => {
            return this.dealer.game.canvas;
        }

        drawInfoArea();
        drawCards();
        drawProfile();
        drawSprite();
    }
}