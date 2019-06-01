/*
* Расчет общей суммы ставок в зависимости от силы ставки, макс бета и числа активных аккаунтов
* */

import Match from "../../views/Match";

const Chance = require('chance')
const chance = new Chance();


const calcAvgTotalBetSumm = (power, max_bet, active_accounts) => {
    return Math.round(max_bet * active_accounts * power)
};

const calcMinAccToBet = (max_total_bet_summ, max_bet) => {
    return Math.ceil(max_total_bet_summ / max_bet)
};

const isInteger = (num) => {
    return (num ^ 0) === num
};


export const randomBetArray = (power, max_bet, active_accounts) => {


    function genNewRBArray() {
        let genRBArraySumm = 0;
        let genRBArray = [];
        let genRBLastIndex = 0;
        let betAccCount = 0;
        let diff = 0;

        genArray.forEach((elem, index, array) => {
            if (index + 1 <= active_accounts && genRBArraySumm < avg_total_bet_summ) {

                genRBArraySumm += elem;
                diff = genRBArraySumm - avg_total_bet_summ;
                genRBLastIndex = index
                genRBArray.push(elem)
            }


        });

        console.log(`razn: ${diff}`)
        if (diff > 0) {


            if (genRBArray[genRBLastIndex] > diff) {
                genRBArray[genRBLastIndex] = genRBArray[genRBLastIndex] - diff

            }
        } else if (diff < 0) {



            if ((genRBArray[genRBLastIndex] + (-diff)) <= max_bet) {
                genRBArray[genRBLastIndex] = genRBArray[genRBLastIndex] + (-diff)
            } else {
                genRBArray[genRBLastIndex+1] = (-diff)
            }
        }

        betAccCount = genRBLastIndex+1;

        return {
            genRBArray,
            betAccCount
        }
    }

    let avg_total_bet_summ = calcAvgTotalBetSumm(power, max_bet, active_accounts);
    let min_acc_to_bet = calcMinAccToBet(avg_total_bet_summ, max_bet);

    console.log(`Avg Total Bet Summ:  ${avg_total_bet_summ}`)
    console.log(`Min Acc To Bet: ${min_acc_to_bet}`);

    let genArray = [];


    for (let i = 0; i < active_accounts * 20; i++) {
        if (chance.bool({likelihood: 70 * power})) {
            genArray.push(chance.integer({min: max_bet, max: max_bet}));
        }

        if (chance.bool({likelihood: 40 * (1 - power)})) {
            genArray.push(chance.integer({min: Math.round(max_bet / 2), max: Math.round(max_bet / 2)}));
        }
        if (chance.bool({likelihood: 80 * (1 - power)})) {
            genArray.push(chance.integer({min: Math.round(max_bet / 5), max: Math.round(max_bet / 1.1)}));
        }
    }

    console.log(`GEN ARRAY : ${genArray}`)

    return genNewRBArray()

    // let min_acc_to_bet = calcMinAccToBet(calcBetSizing(power, max_bet, active_accounts), max_bet);
    // let max_total_bet_summ = calcBetSizing(power, max_bet, active_accounts);
    //
    // console.log(min_acc_to_bet)
    //  console.log(max_total_bet_summ)
    //
    // const genArray = [];
    //
    //
    // const max = (100 / min_acc_to_bet) / 100;
    //
    //  console.log(max * max_total_bet_summ)
    //
    //
    // for (let i = 0; i < 100; i++) {
    //     if (chance.bool({likelihood: 82 * power})) {
    //         genArray.push(chance.floating({min: max, max: max, fixed: 3}));
    //     }
    //
    //     if (chance.bool({likelihood: 39 * (1 - power)})) {
    //         genArray.push(chance.floating({min: max / 2, max: max / 2, fixed: 3}));
    //     }
    //     if (chance.bool({likelihood: 80 * (1 - power)})) {
    //         genArray.push(chance.floating({min: max / 3.4, max: max / 1.07, fixed: 3}));
    //     }
    // }
    //
    //
    //
    // const newGenArray = [];
    //
    //
    //
    // let arraySumm = 0;
    // genArray.forEach((elem, index, array) => {
    //     if (arraySumm < 0.945) {
    //         if (chance.bool({likelihood: 36})) {
    //             arraySumm += elem;
    //             newGenArray.push(elem)
    //             if (arraySumm > 1.1) {
    //                 newGenArray.splice(-1, 1)
    //             }
    //         }
    //     }
    // });
    // let arr = [];
    //
    //
    // newGenArray.forEach(elem => {
    //     if (isInteger(elem * max_total_bet_summ)) {
    //         arr.push(elem * max_total_bet_summ)
    //     } else {
    //         arr.push(Math.ceil(elem * max_total_bet_summ))
    //     }
    // });
    //     let arrElemCount = -1;
    //     arr.forEach(elem => {
    //         arrElemCount++;
    //     })
    //
    //     return arr

};








