const Chance = require('chance');
const chance = new Chance();


export const calcDelay = (power) => {
    const delayArray = [];

    for (let i = 0; i < 100; i++) {
        delayArray.push(chance.integer({min: 40/power, max: 600/power}))
    }

    return delayArray
};

