class SpiderDealer{
    constructor(dealer) {
        this.dealer = dealer;
    }

    action(){
        const PLAYER_TURN = 'PLAYER_TURN';
        const DEALER_TURN = 'DEALER_TURN';
        const POINTS_TO_STAND = 17;

        const getPlayer = () => {
            return this.dealer.game.player;
        }
        const getDealer = () => {
            return this.dealer.game.dealer;
        }
        const getGame = () => {
            return this.dealer.game;
        }

        if (getDealer().points < POINTS_TO_STAND){
            getDealer().getCard();
            if (!getPlayer().stand){
                getGame().turnState = PLAYER_TURN;
            }else {
                getGame().turnState = DEALER_TURN;
            }
        }else {
            getDealer().stand = true;
            getGame().turnState = PLAYER_TURN;
        }
    }
}