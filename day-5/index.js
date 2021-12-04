const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    let first = str.indexOf("X");
    let second = str.length - 1 - str.split('').reverse().join('').indexOf("X");
    if (first == -1 || second == -1){
        return -1;
    }

    return second-first;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
