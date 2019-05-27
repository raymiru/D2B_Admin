
const getKoef = (team1_bet, team2_bet) => {
    let marja = 0.1;
    let koef_t1 = 0;
    let koef_t2 = 0;
    let full_bet = team1_bet+team2_bet;
    let team1_prob = 0;
    let team2_prob = 0;


    team1_prob = team1_bet/full_bet;
    team2_prob = team2_bet/full_bet;
    koef_t1 = 1/(team1_prob+marja)
    koef_t2 = 1/(team2_prob+marja)


    console.log(team1_prob.toFixed(2));
    console.log(team2_prob.toFixed(2));
    console.log(koef_t1.toFixed(2));
    console.log(koef_t2.toFixed(2));
    console.log(full_bet * marja);
    return {
        koef_t1: 0,
        koef_t2: 1,
    }
}

const getMarja = (team1_odd, team2_odd) => {
    let marja = (1/team1_odd + 1/team2_odd - 1) * 100
    console.log(marja)
};

getMarja(4.18, 1.04);
getMarja(1.82, 1.82);



