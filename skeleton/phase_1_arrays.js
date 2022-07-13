// Array.prototype.uniq = function() {
//     let new_arr = [];
//     this.forEach(function(el) {
//         if (new_arr.includes(el)) {
//             return;
//         } 
//         new_arr.push(el) ;
//     } );
//     return new_arr ; 
// }

// Array.prototype.twoSum = function() {
//     let j = 0;
//     let i = 0;
//     let matches = [];
//     let beep = this
//     beep.forEach(function(el) {
//         j = 0;
//         beep.forEach(function(el2) {
//             if (el + el2 === 0 && j !== i && i <= j) {
//                 matches.push([i, j])
//             }
//             j++;
//         });
//         i++;
//     });
//     return matches
// }


// Array.prototype.transpose = function() {
//     let final_arr = [];
//     let beep = this
//     let sub = [];
//     for(i = 0; i < beep.length; i++) {
//         sub = [];
//         for(j = 0; j < beep[i].length; j++) {
//             if (beep[j][i] === nil) {
//                 return
//             }
//             sub.push(beep[j][i])
//         };
//         final_arr.push(sub)
//     };
//     return final_arr;
// };


// arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// arr2 = [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]

// i = 0
// fin_arr = []
// arr1.each |subarr|
//  inner = []
//  push into inner array subarr[i]
//  i + 1
//  end

//  return fin_arr




// Array.prototype.myEach = function (function) {
//     const arr = this
//     for(i = 0; i < arr.length; i++) {
//         function(arr[i])
//     };
// };

// Array.prototype.myMap = function (function) {
//     const fin_arr = [];
//     const arr = this;
//     for(i = 0; i < arr.length; i++) {
//         fin_arr.push(function(arr[i]))
//     };
//     return fin_arr;
// };



Array.prototype.myReduce = function (func, intialValue) {
    if (intialValue === undefined) {
        intialValue = this[0];
    } 
    let foo = this;
    let i = 0;
    if (intialValue === this[0]) {
        i = 1;
    }
        foo.forEach(function(el) {
            if (i === 1) {
                i = 0;
                return;
            }
            intialValue = func(intialValue, el)
        })
        return intialValue
}


// array.inject(proc, initial)
// initial ||= array.first 

// // without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }); // => 6
  
//   // with initialValue
//   [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25); // => 31


