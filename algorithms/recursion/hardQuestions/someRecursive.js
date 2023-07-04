const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {

  function recursive(arr) {
    if (arr.length === 0) {
      return;
    }
    
    if (cb(arr[0])) {
      return;
    }
    
    recursive(arr.slice(1))

    return true;
  }

  if (recursive(arr)) {
    return true;
  } else { 
    return false;
  }
}

someRecursive([4,6,8,9], isOdd)

// Colt's solution

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}