// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(getLength) {console.log(getLength)})


// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr[arr.length-1]);
}

last(items, function(last) {console.log(last)})


// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y)
}

sumNums(2, 3, function(sumNums) {console.log(sumNums)})


// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x * y)

}

multiplyNums(3, 7, function(multiplyNums) {console.log(multiplyNums)})


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  
  if(list.includes(item)){
    cb(true)
  } else {cb(false)}

}

contains('yo-yo', items, function(contains) {console.log(contains)})


/* STRETCH PROBLEM */

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.




function removeDuplicates(array, cb) {

// mutatedArr = [];

// this.has = function(item){
//   return (mutatedArr.indexOf(item) !== -1);
// }


// if([...new Set(array) ]){
//   cb(true)
// }

}

// removeDuplicates(items, function(removeDuplicates){console.log(removeDuplicates)})

// for ( i = 0; i <array.length; i++){
// if(mutatedArr.indexOf(array[i]) === -1){
// mutatedArr.push(items[i])
// }

// }