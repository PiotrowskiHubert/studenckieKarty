class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.image = new Image();
        this.image.src = '../img/blackjack-ingame/game_table.jpg';
        this.image.onload = () => {
            this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeeight = 720;
        this.ratio = this.height = this.baseHeeight;
        this.player = new Player(this);
        this.card = new Card(this, 100, 100, 100, 100);

        this.resize(window.innerWidth, window.innerHeight);
        //resize the game
        window.addEventListener('resize', e=> {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });
        //add card button
        const addCardButton = document.getElementById('addCard');
        addCardButton.addEventListener('click', () => {
            this.player.insertCard();
        });
    }
    //resize the game
    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.fillStyle = 'red';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height = this.baseHeeight;
    }
    //render the game
    render(){
        this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
        this.player.update();
        this.player.draw();

        this.card.draw();
    }

}

//render the game
window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;
    ctx.fillStyle = 'gold';

    const game = new Game(canvas, ctx);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.render();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});

//offset the canvas from the navbar
window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    const canvas = document.getElementById('canvas1');
    canvas.style.marginTop = `${navbar.offsetHeight}px`;
});
