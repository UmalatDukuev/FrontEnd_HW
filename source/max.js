'use strict';

const max = numbers => Math.max(...numbers);

const inverse = function () {
    let numbers = arguments[0];
    if (arguments[1]) {
        var ind = arguments[1];
        if (arguments[1] >= 0){
	        var reversedSubarray = numbers.slice(ind).reverse();
            return numbers.slice(0, ind).concat(reversedSubarray);
        } else {
            ind = Math.abs(ind);
            var subarray = numbers.splice(numbers.length - ind, ind)
            var result = numbers.reverse().concat(subarray);
            return result;
        }
    }
    else {
        return arguments[0].reverse();
    }
};