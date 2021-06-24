
/*Write the necessary Node script to make this code work for all arrays:
[1,2,3,4,5,6,7,8].even(); // [2,4,6,8]
[1,2,3,4,5,6,7,8].odd(); // [1,3,5,7]
Test your code in Node.JS CLI */
Array.prototype.even = function () {
    let evenArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) {
            evenArr.push(this[i]);
        }
    }
    console.log(evenArr);
}


Array.prototype.odd = function () {
    let oddArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 !== 0) {
            oddArr.push(this[i]);
        }
    }
    console.log(oddArr);
}

let x = [1, 2, 3, 4, 5, 6, 7, 8]

x.even();
x.odd();