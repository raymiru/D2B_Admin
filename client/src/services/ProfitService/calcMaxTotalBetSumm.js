/*
* Расчет общей суммы ставок в зависимости от силы ставки, макс бета и числа активных аккаунтов
* */

const Chance = require('chance')
const chance = new Chance();


const calcMaxTotalBetSumm = (power, max_bet, active_accounts) => {
    return max_bet * active_accounts * power;
};

const calcMinAccToBet = (max_total_bet_summ, max_bet) => {
    return Math.ceil(max_total_bet_summ / max_bet)
};

const isInteger = (num) => {
    return (num ^ 0) === num
};


let power = 0.5;
let max_bet = 10;
let active_accounts = 10;
let min_acc_to_bet = 0;
let max_total_bet_summ = 0;

min_acc_to_bet = calcMinAccToBet(calcMaxTotalBetSumm(power, max_bet, active_accounts), max_bet);
max_total_bet_summ = calcMaxTotalBetSumm(power, max_bet, active_accounts);

console.log(max_total_bet_summ * power)
console.log(min_acc_to_bet)

const genArray = [];


const max = (100/min_acc_to_bet)/100;



for (let i = 0; i < 45; i++) {
    if (chance.bool({likelihood: 90 * power})) {
        genArray.push(chance.floating({min: max, max: max, fixed: 3}));
    }

    if (chance.bool({likelihood: 60 * (1-power)})) {
        genArray.push(chance.floating({min: max/3.75, max: max/2.03}));
    }
    if (chance.bool({likelihood: 70 * (1-power)})) {
        genArray.push(chance.floating({min: max/2.02, max: max/1.13}));
    }
}


// const genArray = [0.2, 0.1, 0.13, 0.16, 0.18, 0.185, 0.135, 0.14, 0.17, 0.1, 0.2, 0.095, 0.145, 0.115, 0.15, 0.11, 0.05, 0.07, 0.09, 0.2, 0.175, 0.142, 0.135, 0.2, 0.2, 0.1, 0.135, 0.14, 0.17, 0.1, 0.2, 0.095, 0.2, 0.14, 0.17, 0.1, 0.2, 0.095, 0.145, 0.115, 0.15, 0.11, 0.05, 0.07, 0.09, 0.2,];
const newGenArray = [];
let arraySumm = 0;
genArray.forEach((elem, index, array) => {
    if (arraySumm < 0.945) {
        if (chance.bool({likelihood: 36})) {
            arraySumm += elem;
            newGenArray.push(elem)
            if (arraySumm > 1.1) {
                newGenArray.splice(-1, 1)
            }
        }
    }
});

console.log(newGenArray);
console.log(arraySumm);






console.log(min_acc_to_bet);


    let arr = [];
    newGenArray.forEach(elem => {
        if (isInteger(elem * max_total_bet_summ)) {
            arr.push(elem * max_total_bet_summ)
        } else {
            arr.push(Math.round(elem * max_total_bet_summ))
        }
    });

    console.log(arr)
    let arrSumm = 0;
    let arrCount = 0;
    arr.forEach(elem => {
        arrSumm += elem
        arrCount += 1;
    })
    console.log(arrSumm)
    console.log(arrCount)


