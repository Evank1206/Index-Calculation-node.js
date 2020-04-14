/* function library */
// arr: bol "2x+4=10"
// item: bol zuvhun "x + ="
const indexOf = (arr, item) => { // хоёр // index -uudiin bairlaliig boloh function
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr.length);
        // console.log(item);
        // console.log(i);

        if (arr[i] === item) {
            return i;
        }
    }
};

const isolate = (arr, num1, num2) => { // хоёр // хариуг гаргах function
    let message = "";
    // console.log(num1, num2);
    for (let i = num1; i < num2; i++) {
        message += arr[i];
    }
    // console.log(message);
    return message;
};


module.exports = { // гурав
    indexOf: indexOf,
    isolate: isolate
};

