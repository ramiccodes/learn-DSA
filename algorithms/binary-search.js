// function binary_search(list, target) {
//   let first = 0;
//   let last = list.length - 1;

//   while (first <= last) {
//     midpoint = (first + last) / 2;

//     if (list[midpoint] === target) {
//       return midpoint;
//     } else if (list[midpoint] < target) {
//       first = midpoint + 1;
//     } else {
//       last = midpoint - 1;
//     }
//   }
//   return null;
// }

function binary_search(list, target) {
  var first, last, midpoint;
  first = 0;
  last = list.length - 1;

  while (first <= last) {
    midpoint = (first + last) / 2;

    if (list[midpoint] === target) {
      return midpoint;
    } else {
      if (list[midpoint] < target) {
        first = midpoint + 1;
      } else {
        last = midpoint - 1;
      }
    }
  }

  return null;
}

function verify(index) {
  if (index != null) {
    console.log(`Target found at index: ${index}`);
  } else {
    console.log("Target not found in list");
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = binary_search(numbers, 7);
console.log(result);
verify(result);
