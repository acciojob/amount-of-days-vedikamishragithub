// Prompt the user first
let year = prompt('Please enter the year:');

// Convert the input to a number
year = Number(year);

function leapyear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; // leap year
    } else {
        return 365; // non-leap year
    }
}

alert(leapyear(year));
