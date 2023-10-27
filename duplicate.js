function findRepeatingNumbers(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let index = Math.abs(arr[i]);
  
      if (arr[index] >= 0) {
        arr[index] = -arr[index];
      } else {
        console.log(index);
      }
    }
  }
  
  // Example usage:
  const arr = [4, 3, 2, 7, 8, 2, 1, 1];
  console.log("Repeating numbers:");
  findRepeatingNumbers(arr);