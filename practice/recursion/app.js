const count = (n = 1) => {
  if (n > 3) return;
  console.log(n);
  count(n + 1);
};

const sum = (arr) => {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
};

const doubler = (nums) => {
  for (let n of nums) {
    if (Array.isArray(n)) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
};

const product = (nums) => {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
};

const longestWord = (strings, idx = 0) => {
  if (strings.length === idx) return 0;
  return Math.max(strings[idx].length, longestWord(strings, idx + 1));
};

const everyOther = (string, idx = 0) => {
  if (idx >= string.length) return "";
  return string[idx] + everyOther(string, idx + 2);
};

const isPalindrome = (word, start = 0, end = word.length - 1) => {
  if (start >= end) return true;
  if (word[start] !== word[end]) return false;
  return isPalindrome(word, start + 1, end - 1);
};

const findIndex = (arr, val, idx = 0) => {
  if (idx >= arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
};

const animals = ["cat", "dog", "fly"];

const reverse = (word, idx = word.length - 1) => {
  if (idx < 0) return "";
  return word[idx] + reverse(word, idx - 1);
};

const gatherStrings = (obj) => {
  const result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") result.push(obj[key]);
    if (typeof obj[key] === "object") result.push(...gatherStrings(obj[key]));
  }
  return result;
};

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};

const binarySearch = (nums, val) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const midIdx = Math.floor((left + right) / 2);
    const midVal = nums[midIdx];
    if (midVal < val) {
      left = midIdx + 1;
    } else if (midVal > val) {
      right = midIdx - 1;
    } else {
      return midIdx;
    }
  }
  return -1;
};
