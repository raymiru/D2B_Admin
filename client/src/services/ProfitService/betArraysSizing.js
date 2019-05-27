import {calcMaxTotalBetSumm} from "./calcMaxTotalBetSumm";

let betSizingArrays = {

    twoActivePlayers: {
        0: [10, 10],
        1: []
    }

};


const betSizing = (max_total_bet_summ, max_Bet) => {
    return max_total_bet_summ/max_Bet
};


console.log(betSizing(calcMaxTotalBetSumm(0.5, 10, 6)/10));
