Array.prototype.bubbleSort = function() {
    let sorted = true
    let arr = this;

    while (sorted) {
        sorted = false;
        for(i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = true;
            };
        };
    };
    return arr
}

String.prototype.subStrings = function() {
    let final_arr = []; 
    for(i = 0; i < this.length; i++) {
        final_arr.push(this[i]);
    };
    i = 0;
    for(i = 0; i < this.length; i++) {
        for (j = 0; j < this.length; j++) {
            if (i < j) {
                final_arr.push(this.slice(i, j+1));
            };
        };
    };
    return final_arr;
}
