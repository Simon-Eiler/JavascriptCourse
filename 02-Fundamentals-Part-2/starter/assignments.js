'use strict';
//////////////////////////////////////////////////////////////////////////

/*
function logger() {
    console.log(`My name is Simon`);
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);
 */

/////////////////////////////////////////////////////////////////////////
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3 / 3);

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avDolphins, avgKoalas){
    if (avDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin wins ${avDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avDolphins) {
        console.log(`Koalas wins ${avgKoalas} vs ${avDolphins}`);
    } else {
        console.log('No one wins!');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/
/////////////////////////////////////////////////////////////////////////
/*
function calcTip (bill) {
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else return bill * 0.20;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];

console.log(`Bills ${bills} Tips ${tips} Total Sum ${total}`);
*/
/////////////////////////////////////////////////////////////////////////
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 40,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

const bmiMark = mark.calcBMI();
const bmiJohn = john.calcBMI();

if (bmiMark > bmiJohn){
    console.log(`${mark.fullName} BMI ${bmiMark} is highter then ${john.fullName} ${bmiJohn}!`)
}else
    console.log(`${john.fullName} BMI ${bmiJohn} is highter then ${mark.fullName} ${bmiMark}!`)
*/
/////////////////////////////////////////////////////////////////////////
/*
for (let i = 1; i <= 10;  i++){
    console.log(`Lifiting weights repetitions ${i}`);
}
*/
/////////////////////////////////////////////////////////////////////////
/*
const simonsArray = [
    'Simon',
    'Eiler',
    1983,
    'Selbsständig',
    ['Daniel','David', 'Peter']
];

const types = [];

for (let i= 0; i <= simonsArray.length ;i++){
    // Reading from Jonas array
    console.log(simonsArray[i], typeof simonsArray[i]);

    // Filling types array
    //types [i] = typeof simonsArray[i];
    types.push(typeof simonsArray[i]);
}

console.log(types);

const years = [1911, 2007, 1968, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);
*/
/////////////////////////////////////////////////////////////////////////
/*
const simonsArray = [
    'Simon',
    'Eiler',
    1983,
    'Selbsständig',
    ['Daniel','David', 'Peter']
];

for (let i = simonsArray.length - 1; i >=0; i--){
    console.log(simonsArray[i]);
}

for (let i = 1; i < 4; i++){
    console.log(`------------- Staring Exercise ${i}`);

    for (let y = 1; y < 6; y++){
        console.log(`Lifting weith repetitions ${y}`);
    }
}
*/
/////////////////////////////////////////////////////////////////////////
/*
let i = 1;
while (i <= 10){
    console.log(`Lifting weibhts ${i}`);
    i++;
}
*/
/////////////////////////////////////////////////////////////////////////
/*
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`)
}
*/
/////////////////////////////////////////////////////////////////////////

function calcTip (bill) {
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else return bill * 0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i=0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(bills, tips, totals);