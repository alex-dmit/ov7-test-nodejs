function checkNoZeros(num) {
    while (num % 10 >= 1) {
        num /= 10
    }
    if (num < 1) return false
    return true
}

function findNums(num = 1000000) {
    let numOfZeros = 0
    while (num % 10 === 0) {
        numOfZeros++
        num /= 10
    }
    if (num !== 1) {
        console.error('Wrong number')
        return null
    }
    let first = Math.pow(2, numOfZeros)
    let second = Math.pow(5, numOfZeros)
    if (checkNoZeros(first)
        || checkNoZeros(second)) return null
    return [first, second]
}

function findAllNums(numOfZeros) {

}

// CommonJS modules
module.exports = {
    findNums,
    findAllNums
}
