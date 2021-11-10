let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

let jonSnowHealth = 50;
let jamieLannisterHealth = 50;

let jonSnowDefence = 0;
let jamieLannisterDefence = 20;

if (jonSnowAttack < jamieLannisterAttack) {
    console.log('Jamie has the stronger attack, so he attacks first.');
} else if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon has the stronger attack, so he attacks first.');
} else {
    console.log('Stalemate.');
}

jonSnowDefence += 25

for (let i = 0; i < 3; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefence);
    if (jonSnowHealth <= 0) {
        console.log('Jon Snow has perished');
        break;
    } else {
        console.log(`Jon's health is ${jonSnowHealth}`);
    }
    jamieLannisterHealth -= (jonSnowAttack - jamieLannisterDefence);
    if (jamieLannisterHealth <= 0) {
        console.log('Jamie Lannister has perished');
        break;
    } else {
        console.log(`Jamie's health is ${jamieLannisterHealth}`);
    }
}

let j = 10

var countdown = setInterval(function () {
    if (j === 0) {
        console.log('COUNTDOWN: ' + j);
        console.log('LIFTOFF!')
        clearInterval(countdown);
    } else {
        console.log('COUNTDOWN: ' + j);
    }
    j--;
}, 1000);