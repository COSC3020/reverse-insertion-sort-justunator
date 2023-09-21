const { log } = require("console");

function insertionSortReverse(arr) {
    for(var i = arr.length - 2; i >= 0; i--) {
        var val = arr[i];
        var j;
        //console.log(val) //used to see if it is actually reading the array in reverse
        for(j = i; j < arr.length && arr[j + 1] < val; j++) {
            arr[j] = arr[j + 1];
        }
    arr[j] = val;
    }
    return arr;
}

//insertionSortReverse([12,3,6,7,34,2,1,56,5,3,3,6]) //debugging