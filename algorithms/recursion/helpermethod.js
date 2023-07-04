function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

// Example:
// Try to collect all of the odd values in an array

// Helper function is used for the result array to persist
function collectOdd(arr) {
  let result = [];

  // Recursive function
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1))
  }
  
  // Invoke recursive function
  helper(arr);

  return result;
}