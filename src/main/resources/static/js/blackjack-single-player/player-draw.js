class PlayerDraw{
    constructor(player) {
        this.player = player;
        this.infoAreaWidth = 350;
        this.infoAreaHeight = 125;
        this.spriteWidth = this.infoAreaHeight;
        this.spriteHeight = this.infoAreaHeight;
    }

    draw(){
        const drawSprite = () => {
            setFillStyle(getCtx(), 'black');
            getCtx().fillRect(
                getCanvas().width/2 - this.infoAreaWidth/2 - this.spriteWidth - 4*(this.infoAreaWidth/2) + 150,
                getCanvas().height - this.infoAreaHeight,
                this.spriteWidth,
                this.spriteHeight
            );

            const drawBorder = () => {
                setFillStyle(getCtx(), 'white');
                getCtx().lineWidth = 2;
                getCtx().strokeRect(
                    getCanvas().width/2 - this.infoAreaWidth/2 - this.spriteWidth - 4*(this.infoAreaWidth/2) + 150,
                    getCanvas().height - this.infoAreaHeight,
                    this.spriteWidth,
                    this.spriteHeight
                );
            }
            drawBorder();
        }
        const drawCards = () => {
            if (this.player.cards.length>0){
                this.player.cards.forEach(card => {
                    card.draw();
                });
            }
        }
        const drawInfo = () => {
            const drawNickname = () => {
                setFillStyle(getCtx(), 'white');
                setFontWithSize(getCtx(), 'Arial', 20);
                drawText(
                    getCtx(),
                    'Nickname: ' + this.player.playerProfile.nickname,
                    getCanvas().width/2 - (0.15*getCanvas().width/2) + 10 - 4*(this.infoAreaWidth/2) + 150,
                    getCanvas().height - 0.15*this.player.game.height + 20
                );
            };
            const drawBalance = () => {
                setFillStyle(getCtx(), 'white');
                setFontWithSize(getCtx(), 'Arial', 20);
                drawText(
                    getCtx(),
                    'Balance: ' + this.player.playerProfile.balance,
                    getCanvas().width/2 - (0.15*getCanvas().width/2) + 10 - 4*(this.infoAreaWidth/2) + 150,
                    getCanvas().height - 0.15*this.player.game.height + 40
                );
            }
            const drawPoints = () => {
                setFillStyle(getCtx(), 'white');
                setFontWithSize(getCtx(), 'Arial', 20);
                drawText(
                    getCtx(),
                    'Points: ' + this.player.points,
                    getCanvas().width/2 - (0.15*getCanvas().width/2) + 10 - 4*(this.infoAreaWidth/2) + 150,
                    getCanvas().height - 0.15*this.player.game.height + 60
                );
            }
            const drawBet = () => {
                setFillStyle(getCtx(), 'white');
                setFontWithSize(getCtx(), 'Arial', 20);
                drawText(
                    getCtx(),
                    'Bet: ' + this.player.bet,
                    getCanvas().width/2 - (0.15*getCanvas().width/2) + 10 - 4*(this.infoAreaWidth/2) + 150,
                    getCanvas().height - 0.15*this.player.game.height + 80
                );
            }

            drawNickname();
            drawBalance()
            drawPoints();
            drawBet();
        }
        const drawInfoArea = () => {
            setFillStyle(getCtx(), 'rgba(0,0,0,0.68)');
            getCtx().fillRect(
                getCanvas().width/2 - (this.infoAreaWidth/2) - 4*(this.infoAreaWidth/2) + 150,
                getCanvas().height - this.infoAreaHeight,
                this.infoAreaWidth,
                this.infoAreaHeight
            );
        }

        const getCtx = () => {
            return this.player.game.ctx;
        }
        const getCanvas = () => {
            return this.player.game.canvas;
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

        drawInfoArea();
        drawSprite();
        drawCards();
        drawInfo();
    }

}