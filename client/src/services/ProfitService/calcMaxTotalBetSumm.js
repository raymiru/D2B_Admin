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


let power = 0.4;
let max_bet = 30;
let active_accounts = 20;
let min_acc_to_bet = 0;
let max_total_bet_summ = 0;

min_acc_to_bet = calcMinAccToBet(calcMaxTotalBetSumm(power, max_bet, active_accounts), max_bet);
max_total_bet_summ = calcMaxTotalBetSumm(power, max_bet, active_accounts);

console.log(max_total_bet_summ * power)
console.log(min_acc_to_bet)

const genArray = [];


const max = (100 / min_acc_to_bet) / 100;


for (let i = 0; i < 100; i++) {
    if (chance.bool({likelihood: 84 * power})) {
        genArray.push(chance.floating({min: max, max: max, fixed: 3}));
    }

    if (chance.bool({likelihood: 39 * (1 - power)})) {
        genArray.push(chance.floating({min: max / 2, max: max / 2, fixed: 3}));
    }
    if (chance.bool({likelihood: 78 * (1 - power)})) {
        genArray.push(chance.floating({min: max / 3.2, max: max / 1.07, fixed: 3}));
    }
}

const delayArray = [];

for (let i = 0; i < 50; i++) {
    delayArray.push(chance.integer({min: 40/power, max: 600/power}))
}

console.log(delayArray)

const newGenArray = [];

const newDelayArray = [];

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


