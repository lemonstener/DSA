// TWO SUM

var twoSum = function (nums, target) {
  const found = {};
  for (let i = 0; i < nums.length; i++) {
    let curr = target - nums[i];
    if (found[curr] !== undefined) {
      return [found[curr], i];
    } else {
      found[nums[i]] = i;
    }
  }
  console.log(found);
};

// BUY AND SELL STOCK

var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return profit;
};

// CONTAINST DUPLICATE

var containsDuplicate = function (nums) {
  const found = new Set();
  for (let val of nums) {
    if (found.has(val)) {
      return true;
    } else {
      found.add(val);
    }
  }
  return false;
};

// PRODUCT EXCEPT SELF

var productExceptSelf = function (nums) {
  const result = [];
  let currProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = currProduct;
    currProduct *= nums[i];
  }

  currProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= currProduct;
    currProduct *= nums[i];
  }

  return result;
};

// MAXIMUM SUBARRAY

var maxSubArray = function (nums) {
  let result = Number.MIN_SAFE_INTEGER;
  let current = 0;
  for (let num of nums) {
    current += num;
    result = Math.max(result, current);
    current = current < 0 ? 0 : current;
  }
  return result;
};

// FIND MINIMUM IN ROTATED SORTED ARRAY

var findMin = function (arr, start = 0, end = arr.length - 1) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid - 1] > arr[mid]) return arr[mid];
    if (arr[mid + 1] < arr[mid]) return arr[mid + 1];

    if (arr[mid] > arr[start]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return arr[0];
};

// IS VALID ANAGRAM

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const lettersS = freqCounter(s);
  const lettersT = freqCounter(t);

  for (let char in lettersS) {
    if (lettersS[char] !== lettersT[char]) return false;
  }

  return true;
};

const freqCounter = (str) => {
  const obj = {};
  for (let char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  return obj;
};

// GROUP ANAGRAMS

var groupAnagrams = function (strs) {
  const obj = {};
  for (let str of strs) {
    const sortedStr = str.split("").sort().toString();
    obj[sortedStr] ? obj[sortedStr].push(str) : (obj[sortedStr] = [str]);
  }
  const arr = [];
  for (let kv in obj) arr.push(obj[kv]);
  return arr;
};

// VALID BRACKETS

var isValid = function (s) {
  if (s[0] === "}" || s[0] === "]" || s[0] === ")") return false;
  const values = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let currStr = [];
  for (let char of s) {
    if (char === "}" || char === "]" || char === ")") {
      if (char !== values[currStr.pop()]) return false;
    } else {
      currStr.push(char);
    }
  }

  if (currStr.length === 0) {
    return true;
  } else {
    return false;
  }
};
