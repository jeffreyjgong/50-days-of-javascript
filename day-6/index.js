const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    var arr = str.split(" ", wordLimit);

    return arr.join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
