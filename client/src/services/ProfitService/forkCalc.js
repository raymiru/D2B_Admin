const calcNewMinNumberAccToBet = (new_max_total_bet_summ, new_max_bet) => {
    return Math.ceil(new_max_total_bet_summ/new_max_bet)
};

const randomNewNumberAccToBet = (new_min_number_acc_to_bet, new_max_total_bet_summ) => {

};

const forkCalc = (old_bet_summ, old_income_summ, old_profit_summ, new_max_bet, waitingAccounts) => {
    const min_max_bet = 10;
    let koef_summ = old_income_summ / old_bet_summ;
    let fork = {
        new_max_total_bet_summ: 0,
        new_max_single_bet_summ: 0,
        new_min_number_acc_to_bet: 0,
        new_final_number_acc_to_bet: 0,
        new_min_income_summ: 0,
        new_min_profit_summ: 0,
        new_koef_summ: 0,
    };

    fork.new_max_total_bet_summ = Math.floor(old_profit_summ);
    fork.new_min_number_acc_to_bet = calcNewMinNumberAccToBet(fork.new_max_total_bet_summ, new_max_bet);
    fork.new_final_number_acc_to_bet = randomNewNumberAccToBet(fork.new_min_number_acc_to_bet, fork.new_max_total_bet_summ)



    return {
        new_max_total_bet_summ: fork.new_max_total_bet_summ,
        new_min_number_acc_to_bet: fork.new_min_number_acc_to_bet,
        new_max_single_bet_summ: fork.new_max_single_bet_summ
    }

};

console.log(forkCalc(70, 130, 60,10, 5));
