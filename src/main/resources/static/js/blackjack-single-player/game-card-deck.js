class GameCardDeck{
    constructor(game){
        this.game = game;
        this.cardDeck = new CardDeck();

        this.cardImages = new Image();
        this.cardImages.src = '../../img/blackjack-single-player/cute-cards.png';

        this.cardBack = new Image();
        this.cardBack.src = '../../img/blackjack-single-player/cards/card-back.PNG';

        this.clubs2 = new Image();
        this.clubs2.src = '../../img/blackjack-single-player/cards/clubs/clubs-2.PNG';
        this.clubs3 = new Image();
        this.clubs3.src = '../../img/blackjack-single-player/cards/clubs/clubs-3.PNG';
        this.clubs4 = new Image();
        this.clubs4.src = '../../img/blackjack-single-player/cards/clubs/clubs-4.PNG';
        this.clubs5 = new Image();
        this.clubs5.src = '../../img/blackjack-single-player/cards/clubs/clubs-5.PNG';
        this.clubs6 = new Image();
        this.clubs6.src = '../../img/blackjack-single-player/cards/clubs/clubs-6.PNG';
        this.clubs7 = new Image();
        this.clubs7.src = '../../img/blackjack-single-player/cards/clubs/clubs-7.PNG';
        this.clubs8 = new Image();
        this.clubs8.src = '../../img/blackjack-single-player/cards/clubs/clubs-8.PNG';
        this.clubs9 = new Image();
        this.clubs9.src = '../../img/blackjack-single-player/cards/clubs/clubs-9.PNG';
        this.clubs10 = new Image();
        this.clubs10.src = '../../img/blackjack-single-player/cards/clubs/clubs-10.PNG';
        this.clubsJ = new Image();
        this.clubsJ.src = '../../img/blackjack-single-player/cards/clubs/clubsJ.PNG';
        this.clubsQ = new Image();
        this.clubsQ.src = '../../img/blackjack-single-player/cards/clubs/clubsQ.PNG';
        this.clubsK = new Image();
        this.clubsK.src = '../../img/blackjack-single-player/cards/clubs/clubsK.PNG';
        this.clubsAce = new Image();
        this.clubsAce.src = '../../img/blackjack-single-player/cards/clubs/clubs-Ace.PNG';

        this.spades2 = new Image();
        this.spades2.src = '../../img/blackjack-single-player/cards/spades/spades-2.PNG';
        this.spades3 = new Image();
        this.spades3.src = '../../img/blackjack-single-player/cards/spades/spades-3.PNG';
        this.spades4 = new Image();
        this.spades4.src = '../../img/blackjack-single-player/cards/spades/spades-4.PNG';
        this.spades5 = new Image();
        this.spades5.src = '../../img/blackjack-single-player/cards/spades/spades-5.PNG';
        this.spades6 = new Image();
        this.spades6.src = '../../img/blackjack-single-player/cards/spades/spades-6.PNG';
        this.spades7 = new Image();
        this.spades7.src = '../../img/blackjack-single-player/cards/spades/spades-7.PNG';
        this.spades8 = new Image();
        this.spades8.src = '../../img/blackjack-single-player/cards/spades/spades-8.PNG';
        this.spades9 = new Image();
        this.spades9.src = '../../img/blackjack-single-player/cards/spades/spades-9.PNG';
        this.spades10 = new Image();
        this.spades10.src = '../../img/blackjack-single-player/cards/spades/spades-10.PNG';
        this.spadesJ = new Image();
        this.spadesJ.src = '../../img/blackjack-single-player/cards/spades/spadesJ.PNG';
        this.spadesQ = new Image();
        this.spadesQ.src = '../../img/blackjack-single-player/cards/spades/spadesQ.PNG';
        this.spadesK = new Image();
        this.spadesK.src = '../../img/blackjack-single-player/cards/spades/spadesK.PNG';
        this.spadesAce = new Image();
        this.spadesAce.src = '../../img/blackjack-single-player/cards/spades/spades-Ace.PNG';

        this.hearts2 = new Image();
        this.hearts2.src = '../../img/blackjack-single-player/cards/hearts/hearts-2.PNG';
        this.hearts3 = new Image();
        this.hearts3.src = '../../img/blackjack-single-player/cards/hearts/hearts-3.PNG';
        this.hearts4 = new Image();
        this.hearts4.src = '../../img/blackjack-single-player/cards/hearts/hearts-4.PNG';
        this.hearts5 = new Image();
        this.hearts5.src = '../../img/blackjack-single-player/cards/hearts/hearts-5.PNG';
        this.hearts6 = new Image();
        this.hearts6.src = '../../img/blackjack-single-player/cards/hearts/hearts-6.PNG';
        this.hearts7 = new Image();
        this.hearts7.src = '../../img/blackjack-single-player/cards/hearts/hearts-7.PNG';
        this.hearts8 = new Image();
        this.hearts8.src = '../../img/blackjack-single-player/cards/hearts/hearts-8.PNG';
        this.hearts9 = new Image();
        this.hearts9.src = '../../img/blackjack-single-player/cards/hearts/hearts-9.PNG';
        this.hearts10 = new Image();
        this.hearts10.src = '../../img/blackjack-single-player/cards/hearts/hearts-10.PNG';
        this.heartsJ = new Image();
        this.heartsJ.src = '../../img/blackjack-single-player/cards/hearts/heartsJ.PNG';
        this.heartsQ = new Image();
        this.heartsQ.src = '../../img/blackjack-single-player/cards/hearts/heartsQ.PNG';
        this.heartsK = new Image();
        this.heartsK.src = '../../img/blackjack-single-player/cards/hearts/heartsK.PNG';
        this.heartsAce = new Image();
        this.heartsAce.src = '../../img/blackjack-single-player/cards/hearts/hearts-Ace.PNG';

        this.diamonds2 = new Image();
        this.diamonds2.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-2.PNG';
        this.diamonds3 = new Image();
        this.diamonds3.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-3.PNG';
        this.diamonds4 = new Image();
        this.diamonds4.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-4.PNG';
        this.diamonds5 = new Image();
        this.diamonds5.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-5.PNG';
        this.diamonds6 = new Image();
        this.diamonds6.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-6.PNG';
        this.diamonds7 = new Image();
        this.diamonds7.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-7.PNG';
        this.diamonds8 = new Image();
        this.diamonds8.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-8.PNG';
        this.diamonds9 = new Image();
        this.diamonds9.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-9.PNG';
        this.diamonds10 = new Image();
        this.diamonds10.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-10.PNG';
        this.diamondsJ = new Image();
        this.diamondsJ.src = '../../img/blackjack-single-player/cards/diamonds/diamondsJ.PNG';
        this.diamondsQ = new Image();
        this.diamondsQ.src = '../../img/blackjack-single-player/cards/diamonds/diamondsQ.PNG';
        this.diamondsK = new Image();
        this.diamondsK.src = '../../img/blackjack-single-player/cards/diamonds/diamondsK.PNG';
        this.diamondsAce = new Image();
        this.diamondsAce.src = '../../img/blackjack-single-player/cards/diamonds/diamonds-Ace.PNG';

        this.backOfCardImagePosX = 0;
            // 14*100;
        this.backOfCardImagePosY = 0;
            // 3*144;
        this.backOfCardImageWidth = 3000;
            // 100;
        this.backOfCardImageHeight = 5000;
            //144;
        this.backOfCardWidth = 2*100;
        this.backOfCardHeight = 2*144;
        this.backOfCardPosX = this.game.canvas.width - 0.5*this.game.canvas.width - (this.backOfCardWidth/2);
        this.backOfCardPosY = this.game.canvas.height - 0.5*this.game.canvas.height - (this.backOfCardHeight/2);

        this.cardImages.onload = () => {
            this.initializeDeck();
            this.shuffleDeck();
        }
    }

    initializeDeck() {
        const suits = ['clubs', 'diamonds', 'spades', 'hearts'];
        const names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < names.length; j++) {
                let points;
                if (names[j] === 'A') {
                    points = 11;
                } else if (['J', 'Q', 'K'].includes(names[j])) {
                    points = 10;
                } else {
                    points = parseInt(names[j]);
                }
                let name = `${names[j]} of ${suits[i]}`;

                let cardWidth = 100*2;
                let cardHeight = 144*2;

                let deckPosX = this.game.canvas.width - 0.5*this.game.canvas.width - (cardWidth/2);
                let deckPosY = this.game.canvas.height - 0.5* this.game.canvas.height - (cardHeight/2);


                if (name === '2 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs2,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '3 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs3,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '4 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs4,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '5 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs5,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '6 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs6,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '7 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs7,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '8 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs8,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '9 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs9,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '10 of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubs10,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'J of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubsJ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Q of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubsQ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'K of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubsK,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Ace of clubs'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.clubsAce,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if (name === '2 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades2,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '3 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades3,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '4 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades4,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '5 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades5,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '6 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades6,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '7 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades7,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '8 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades8,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '9 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades9,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '10 of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spades10,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'J of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spadesJ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Q of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spadesQ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'K of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spadesK,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Ace of spades'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.spadesAce,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if (name === '2 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts2,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '3 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts3,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '4 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts4,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '5 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts5,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '6 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts6,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '7 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts7,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '8 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts8,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '9 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts9,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '10 of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.hearts10,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'J of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.heartsJ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Q of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.heartsQ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'K of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.heartsK,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Ace of hearts'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.heartsAce,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if (name === '2 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds2,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '3 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds3,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '4 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds4,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '5 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds5,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '6 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds6,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '7 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds7,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '8 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds8,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '9 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds9,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === '10 of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamonds10,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'J of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamondsJ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Q of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamondsQ,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'K of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamondsK,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }else if(name === 'Ace of diamonds'){
                    let card = new Card(
                        this.game,
                        deckPosX,
                        deckPosY,
                        cardWidth,
                        cardHeight,
                        name,
                        points,
                        `${suits[i]}-${names[j]}`,
                        this.diamondsAce,
                        0,
                        0,
                        3000,
                        5000
                    );
                    this.cardDeck.addCard(card);
                }
                // else{
                //     let card = new Card(
                //         this.game,
                //         deckPosX,
                //         deckPosY,
                //         cardWidth,
                //         cardHeight,
                //         name,
                //         points,
                //         `${suits[i]}-${names[j]}`,
                //         this.cardImages,
                //         j * cardWidth,
                //         i * cardHeight,
                //         cardWidth,
                //         cardHeight
                //     );
                //     this.cardDeck.addCard(card);
                // }

            }
        }
    }
    shuffleDeck(){
        for (let i = this.cardDeck.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = this.cardDeck.cards[i];
            this.cardDeck.cards[i] = this.cardDeck.cards[j];
            this.cardDeck.cards[j] = temp;
        }
    }

    drawGameCardDeck() {

        if (this.cardDeck.cards.length > 0){
            this.drawBackOfCard();
        }
    }

    drawBackOfCard(){
        this.game.ctx.drawImage(
            this.cardBack,
            this.backOfCardImagePosX,
            this.backOfCardImagePosY,
            this.backOfCardImageWidth,
            this.backOfCardImageHeight,
            this.backOfCardPosX,
            this.backOfCardPosY,
            this.backOfCardWidth,
            this.backOfCardHeight
        )
    }
}