// Exercise: Level 1

// (1.) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/* let userInput = prompt('Enter your age:');
if(userInput >= 18){
    console.log('you are old enough to drive');
}
else{
    console.log(`you  are left with ${18 - userInput} years to drive.`);
} */

// (2.) Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/* let myAge = prompt('What is your age?');
let yourAge = prompt('what is your age?');
if(myAge < yourAge){
    console.log('My age is ', myAge);
    console.log('Your age is ', yourAge);
    console.log(`You are ${yourAge - myAge} years older than me.`);
}
 else if(myAge > yourAge){
        console.log('My age is ', myAge);
        console.log('Your age is ', yourAge);
        console.log(`You are ${myAge - yourAge} years younger than me.`);
    }
    else{
        console.log('My age is ', myAge);
        console.log('Your age is ', yourAge);
        console.log('we both shares same age.');
    } */


/* (3.) If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
 */

/* let a = 14;
let b = 5;
if(a > b){
    console.log(`a is ${a}.`);
    console.log(`b is ${b}.`);
    console.log(`${a} is greater than ${b}.`);
}
else if(a < b){
    console.log(`a is ${a}.`);
    console.log(`b is ${b}.`);
    console.log(`${a} is smaller than ${b}.`);
} */

// Using ternary operator

/* let a = 4;
let b = 3;
(a < b) 
? console.log('a is smaller than b') 
: console.log('a is greater than b') */

/* (4.) Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? */

/* let isEvenOrOdd = prompt('Enter a number:');
if(isEvenOrOdd % 2 === 0){
    console.log(`${isEvenOrOdd} is an even number.`);
}
else{
    console.log(`${isEvenOrOdd} is an odd number.`)
} */


// Exercises: Level 2

/* (1.) Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

/* let studentMarks = prompt('Enter your marks:');
if(studentMarks >= 80 && studentMarks <= 100){
    console.log('You have been awarded with A Grade.');
}
else if(studentMarks >= 70 && studentMarks < 80){
    console.log('You have been awarded with B Grade.');
}
else if(studentMarks >= 60 && studentMarks < 70){
    console.log('You have been awarded with C Grade.');
}
else if(studentMarks >= 50 && studentMarks < 60){
    console.log('You have been awarded with D Grade.');
}
else if(studentMarks >= 0 && studentMarks < 50){
    console.log('You have been awarded with F Grade.');
}
else{
    console.log('Invalid input');
} */


// Using Switch case:

/* let studentMarks = prompt('What is your marks:');
switch(true){
    case (studentMarks >= 80 && studentMarks <= 100):
    console.log('You have been awarded with A Grade.');
    break;
    case (studentMarks >70 && studentMarks < 80):
    console.log('Grade B');
    break;
    case (studentMarks >= 60 && studentMarks < 70):
    console.log('Grade C');
    break;
    case (studentMarks >= 50 && studentMarks < 60):
    console.log('Grade D');
    break;
    case (studentMarks >= 0 && studentMarks < 50):
    console.log('Grade F');
    break;
    default:
    console.log('Invalid input');
} */

/* (2.) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

/* let checkForSeason = prompt('Which month is this?').toLowerCase();
switch(true){
    case (checkForSeason === 'september' || checkForSeason === 'october' || checkForSeason === 'november'):
    console.log('Autumn');
    break;
    case (checkForSeason === 'december' || checkForSeason === 'january' || checkForSeason ==='february'):
    console.log('Winter');
    break;
    case (checkForSeason === 'march' || checkForSeason === 'april' || checkForSeason === 'may'):
    console.log('Spring');
    break;
    case (checkForSeason === 'june' || checkForSeason === 'july' || checkForSeason === 'august'):
    console.log('Summer');
    break;
    default:
    console.log('Invalid input');

} */

/* (3.) Check if a day is weekend day or a working day. Your script will take day as an input.
 */
/* 
let today = prompt('What is the day today?').toLowerCase();
(today === 'monday' || today === 'tuesday' || today === 'wednesday' || today ==='thursday' || today === 'friday')
? console.log(`${today} is working day.`)
: console.log(`${today} is a weekend.`) */

// Exercises: Level 3

/* (1.) Write a program which tells the number of days in a month. */

/* let daysNoInMonth = prompt('Enter a month:').toLowerCase();
switch(daysNoInMonth){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
    console.log(`${daysNoInMonth} has 31 days.`);
    break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
    console.log(`${daysNoInMonth} has 30 days.`);
    break;
    case 'february':
    console.log(`${daysNoInMonth} has 28 days.`);
    break;
    default:
    console.log('Invalid input');            
}
 */

//  (2.) Write a program which tells the number of days in a month, now consider leap year.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInMonth(year, month) {
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
}

function main() {
    const year = parseInt(prompt("Enter year:"));
    const month = parseInt(prompt("Enter month (1-12):"));

    if (month >= 1 && month <= 12) {
        const numDays = daysInMonth(year, month);
        console.log(`Number of days in ${month}/${year}: ${numDays}`);
    } else {
        console.log("Invalid month input.");
    }
}

main();