function sumArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  var numbers = [50.54, 42.57, 52.54, 42.57, 52.5, 33.68, 48.72, 34.01, 38.8, 33.51, 37.5, 149.11, 46.37, 26.37, 52.01, 36.33, 43.36, 44.52, 52.15];
  var result = sumArray(numbers);
  console.log(result); // Output: 15