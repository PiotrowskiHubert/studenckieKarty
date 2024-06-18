class CardDeck{
    constructor() {
        this.cards = [];
    }

    addCard(card){
        this.cards.push(card);
    }

    getCard(){
        if(this.cards.length > 0) {
            return this.cards.pop();
        } else {
            console.error("No cards left in the deck");
            return null;
        }
    }
}