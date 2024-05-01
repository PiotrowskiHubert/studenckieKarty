class Player{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.spriteWidth = 89;
        this.spriteHeight = 57;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.playerProfile = new PlayerProfile(this.game);
        this.cards = [];
    }
    insertCard(){
        this.cards.push(
            new Card(
                this.game,
                300 + (this.cards.length * (this.spriteWidth * 0.2)),
                300 + (this.cards.length * (this.spriteHeight * 0.1)),
                57,
                89
            )
        )
    }
    draw(){

        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);

        this.cards.forEach(card => {
            card.draw();
        });

        this.playerProfile.draw();
    }
    updateXCord(){
        function getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }

        if (this.x - 1 < 0){
            this.x += 1;
        }else if (this.x + 1 > this.game.width){
            this.x += -1;
        } else {
            this.x += getRandomNumber(-1,1);
        }
    }
    updateYCord(){
        function getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }

        if (this.y - 1 < 0){
            this.y += 1;
        }else if (this.y + 1 > this.game.height){
            this.y += -1;
        }else{
            this.y += getRandomNumber(-1,1);
        }
    }
    //test random update function
    update(){
        this.updateXCord();
        this.updateYCord();
    }
    resize(){
        this.width = this.spriteWidth * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
    }
}
