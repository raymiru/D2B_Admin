const Chance = require('chance');
const chance = new Chance();


export const calcDelay = (power) => {
    const delayArray = [];

    for (let i = 0; i < 1; i++) {
        delayArray.push(chance.integer({min: 10/power, max: 160/power}))
    }

    return delayArray
};

