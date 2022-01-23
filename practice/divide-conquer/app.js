const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const binarySearch = (arr, val) => {
  if (val === undefined || arr === null) return "Missing arguments";
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] < val) {
      left = middle + 1;
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      return `${val} found at index of ${middle}`;
    }
  }

  return -1;
};
