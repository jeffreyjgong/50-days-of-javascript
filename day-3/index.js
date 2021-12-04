const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here

    return reverseRecur(num, --num.toString().length);
}

function reverseRecur(num, n){
    if (n == 0) {
        return num;
    }
    return (num%10)*Math.pow(10, n) + reverseRecur(Math.floor(num/10), --n)
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)