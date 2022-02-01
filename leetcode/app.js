// RICHEST CUSTOMER WEALTH

const maximumWealth = (arr) => {
  let highest = 0;
  for (let entry of arr) {
    highest = Math.max(
      highest,
      entry.reduce((acc, reducer) => acc + reducer)
    );
  }
  return highest;
};

// TWO SUM

const twoSum = (nums, target) => {
  const values = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in values) {
      return [values[target - nums[i]], i];
    }

    values[nums[i]] = i;
  }

  return [];
};

// PALINDROME NUMBER

const palindromeNumber = (num) => {
  const str = num.toString();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
};

// ROMAN NUMERALS

const romanToInt = (s) => {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let idx = 0;

  while (idx < s.length) {
    if (values[s[idx]] < values[s[idx + 1]]) {
      result += values[s[idx + 1]] - values[s[idx]];
      idx += 2;
    } else {
      result += values[s[idx]];
      idx++;
    }
  }

  return result;
};

// LONGEST COMMON PREFIX

const longestCommonPrefix = (strs) => {
  let prefix = "";
  if (strs.length === 1) return strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    const current = strs[0][i];
    if (current && strs.every((s) => s[i] === current)) {
      prefix += current;
    } else {
      return prefix;
    }
  }

  return prefix;
};

// VALID BRACKETS

const validBrackets = (s) => {
  if (s.length % 2 !== 0) return false;
  const values = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let previous = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      previous.push(s[i]);
    } else {
      if (previous[previous.length - 1] !== values[s[i]]) {
        return false;
      } else {
        previous.pop();
      }
    }
  }

  if (previous.length) return false;
  return true;
};

// NEEDLE IN A HAYSTACK
"hello", "ll";

const needleInHaystack = (haystack, needle) => {
  if (needle === "") return 0;
  let output = -1;
  const first = needle[0];
  let idx = 0;

  while (idx < haystack.length) {
    if (haystack[idx] === first) {
      console.log(idx);
      const substr = haystack.slice(idx, idx + needle.length);
      if (substr === needle) {
        output = idx;
        break;
      }
    }
    idx++;
  }

  return output;
};

// SEARCH INSERT POSITION

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

// LENGTH OF LAST WORD

const lenghtOfLastWord = (s) => {
  let result = 0;
  let i = s.length - 1;

  while (i > -1) {
    if (s[i] !== " ") {
      result++;
    } else {
      if (result !== 0) break;
    }
    i--;
  }

  return result;
};

// BEST TIME TO BUY AND SELL STOCK

const maxProfit = (prices) => {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

// PLUS ONE

// [1,3,4] ---> [1,3,5]
// [1,2,9] ---> [1,3,0]
// [9,9] ---> [1,0,0]

const plusOne = (digits) => {
  for (let i = digits.length - 1; i > -1; i--) {
    digits[i] = digits[i] + 1;
    if (digits[i] !== 10) {
      break;
    } else {
      digits[i] = 0;
    }
  }

  if (digits.every((d) => d === 0)) digits.unshift(1);

  return digits;
};
