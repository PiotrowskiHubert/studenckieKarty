class RavenDealer{
    constructor(dealer) {
        this.dealer = dealer;
    }

    action(){
        const PLAYER_TURN = 'PLAYER_TURN';
        const DEALER_TURN = 'DEALER_TURN';
        let POINTS_TO_STAND = 17;

        const getPlayer = () => {
            return this.dealer.game.player;
        }
        const getDealer = () => {
            return this.dealer.game.dealer;
        }
        const getGame = () => {
            return this.dealer.game;
        }
        const changeTurnToPlayer = () => {
            getGame().turnState = PLAYER_TURN;
        }
        const changeTurnToDealer = () => {
            getGame().turnState = DEALER_TURN;
        }

        if (getDealer().points < getPlayer().points){
            getDealer().getCard();
        }else {
            getDealer().stand = true;
        }
    }
}