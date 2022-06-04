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

// CLIMBING STAIRS
// fibonacci sequence

const climbStairs = (n) => {
  const arr = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

// REMOVE DUPLICATES FROM SORTED LINKED LIST

const deleteDuplicates = (head) => {
  if (!head) return head;
  let previousNode = head;
  let currentNode = head.next;
  let currentVal = head.val;

  while (currentNode) {
    if (currentVal === currentNode.val) {
      previousNode.next = currentNode.next;
    } else {
      currentVal = currentNode.val;
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return head;
};

// MERGE SORTED ARRAYS

const mergeSortedArrays = function (nums1, m, nums2, n) {
  let output = [];
  let i = 0;
  let j = 0;

  // get rid of 0s
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nums1[i] === 0) {
      nums1.pop();
    } else {
      break;
    }
  }

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      output.push(nums1[i]);
      i++;
    } else {
      output.push(nums2[j]);
      j++;
    }
    console.log(`Output ===> ${output}`);
  }

  while (i < m) {
    output.push(nums1[i]);
    i++;
    console.log(`Output ===> ${output}`);
  }
  while (j < n) {
    output.push(nums2[j]);
    j++;
    console.log(`Output ===> ${output}`);
  }

  console.log(output);
  return output;
};

// INORDER TRAVERSAL

const inorderTraversal = (root) => {
  if (root === []) return [];
  const output = [];

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    output.push(node.val);
    traverse(node.right);
  };

  traverse(root);
  return output;
};

// SAME TREE

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(q.left, p.left) && isSameTree(q.right, p.right);
};

// MAX DEPTH OF BINARY TREE

const maxDepth = (node) => {
  if (!node) return -1;

  const leftSide = maxDepth(node.left);
  const rightSide = maxDepth(node.right);

  if (leftSide > rightSide) {
    return leftSide + 1;
  } else {
    return rightSide + 1;
  }
};

// PATH SUM

const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  targetSum -= root.val;

  if (!root.left && !root.right) return targetSum === 0;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// VALID PALINDROME

const isPalindrome = function (s) {
  const newStr = s.replace(/[^0-9a-z]/gi, "");
  console.log(newStr);

  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left].toLowerCase() !== newStr[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

// SINGLE NUMBER

const singleNumber = function (nums) {
  const found = new Set();
  const doubles = new Set();

  for (let num of nums) {
    if (!found.has(num)) {
      found.add(num);
    } else {
      doubles.add(num);
    }
  }

  for (let num of nums) {
    if (!doubles.has(num)) return num;
  }
};

// INTERSECTION OF TWO LINKED LISTS

const getIntersectionNode = function (headA, headB) {
  const nodeSet = new Set();

  let currentNode = headA;

  while (currentNode) {
    nodeSet.add(currentNode);
    currentNode = currentNode.next;
  }

  currentNode = headB;

  while (currentNode) {
    if (nodeSet.has(currentNode)) return currentNode;
    currentNode = currentNode.next;
  }

  return null;
};

// REVERSE LINKED LIST IN PLACE

const reverseLinkedList = (list) => {
  let currentNode = list.head;
  let previousNode = null;
  let tempNode = null;

  while (currentNode) {
    // 1
    tempNode = currentNode;
    // null
    currentNode.next = previousNode;
    // 2
    currentNode = tempNode.next;
    // 1
    previousNode = tempNode;
  }

  list.head = previousNode;
  return list;
};

// SORT SORTED LISTS

// 1 -> 5 -> 7
// 3 -> 4 -> 6

const sortSortedLists = (list1, list2) => {
  let currentNode = list1.head;
  const leftArr = [];
  const rightArr = [];

  while (currentNode) {
    leftArr.push(currentNode);
    currentNode = currentNode.next;
  }

  currentNode = list2.head;
  while (currentNode) {
    rightArr.push(currentNode);
    currentNode = currentNode.next;
  }

  const combinedLists = mergeSort(leftArr, rightArr);
  let previousNode = combinedLists[0];

  for (let i = 1; i < combinedLists.length; i++) {
    currentNode = combinedLists[i];
    previousNode.next = currentNode;
    previousNode = currentNode;
  }

  // RETURN NEW LINKED LIST WHERE HEAD = combinedLists[0]

  const mergeSort = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const output = [];

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i].val < arr2[j].val) {
        output.push(arr1[i]);
        i++;
      } else {
        output.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      output.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      output.push(arr2[j]);
      j++;
    }

    return output;
  };
};

// PIVOT AROUND VALUE

const pivot = (list, val) => {
  const leftSide = [];
  const rightSide = [];

  let currentNode = list.head;

  while (currentNode) {
    if (currentNode.val < val) {
      leftSide.push(currentNode);
    } else {
      rightSide.push(currentNode);
    }
  }

  for (let node of rightSide) {
    leftSide.push(rightSide.pop());
  }

  let previousNode = leftSide[0];
  currentNode = leftSide[1];

  while (currentNode) {
    previousNode.next = currentNode;
    currentNode = currentNode.next;
  }

  list.head = leftSide[0];
  return list;
};

// MERGE SORTED LISTS

// 2 -> 7 -> 8
// 4 -> 5 -> 9

const mergeSortedLists = (list1, list2) => {
  const head = new ListNode();

  let previousNode = head;
  let leftNode = list1;
  let rightNode = list2;

  while (leftNode && rightNode) {
    if (leftNode.val < rightNode.val) {
      previousNode.next = leftNode;
      previousNode = leftNode;
      leftNode = leftNode.next;
    } else {
      previousNode.next = rightNode;
      previousNode = rightNode;
      rightNode = rightNode.next;
    }
  }

  while (leftNode) {
    previousNode.next = leftNode;
    previousNode = leftNode;
    leftNode = leftNode.next;
  }
  while (rightNode) {
    previousNode.next = rightNode;
    previousNode = rightNode;
    rightNode = rightNode.next;
  }

  return head.next;
};

// LINKED LIST CYCLE

const hasCycle = (head) => {
  if (!head.next) return false;

  let currentNode = head;
  const seen = new Set();

  while (currentNode) {
    if (seen.has(currentNode)) return false;

    seen.add(currentNode);
    currentNode = currentNode.next;
  }

  return true;
};

// REMOVE ELEMENTS

const removeElements = (head, val) => {
  if (!head) return head;

  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }

  if (!head) return null;

  let previousNode = head;
  let currentNode = previousNode.next;

  while (currentNode) {
    if (currentNode.val === val) {
      previousNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return head;
};

// PALINDROMIC LINKED LIST

const isPalindromicLinkedList = (head) => {
  const nodeArr = [];

  let currentNode = head;

  while (currentNode) {
    nodeArr.push(currentNode);
    currentNode = currentNode.next;
  }

  let left = 0;
  let right = nodeArr.length - 1;

  while (left < right) {
    if (nodeArr[left].val !== nodeArr[right].val) return false;
    left++;
    right--;
  }

  return true;
};

// MIDDLE NODE

const getMiddleNode = (head) => {
  let tortoise = head;
  let hare = head.next;

  while (hare) {
    tortoise = tortoise.next;
    if (!hare.next) {
      break;
    } else {
      hare = hare.next.next;
    }
  }

  return tortoise;
};

// weird egen task

const evalPairs = [1, 4, 3, 7, 5, 6, 5, 8, 2];
const evalPairs2 = [3, 3, 5, 8, 2, 4, 4, 8];

function contPairs(a, m, k) {
  let output = 0;
  let index = 0;
  const found = new Set();

  while (index + m <= a.length) {
    for (let i = index; i < index + m; i++) {
      if (found.has(k - a[i])) {
        output++;
      } else {
        found.add(a[i]);
      }
    }
    index++;
    found.clear();
  }
  console.log(index);
  return output;
}

// other weird egen task

const concatLex = (s1, s2) => {
  let output = "";

  const letters1 = freqCounter(s1);
  const letters2 = freqCounter(s2);

  let l = 0;
  let r = 0;

  while (l < s1.length && r < s2.length) {
    const lChar = s1[l];
    const rChar = s2[r];
    let fillLeft = false;

    if (letters1[lChar] < letters2[rChar]) {
      fillLeft = true;
    } else if (lChar < rChar) {
      fillLeft = true;
    } else if (letters1[l] === letters2[r] && s1[l] === s2[r]) {
      fillLeft = true;
    }

    if (fillLeft) {
      output += s1[l];
      l++;
    } else {
      output += s2[r];
      r++;
    }
  }

  console.log(l, r);
  l < s1.length - 1 ? (output += s1.slice(l)) : (output += s2.slice(r));

  return output;
};

const freqCounter = (str) => {
  const letters = {};
  for (let char of str) {
    letters[char] ? letters[char]++ : (letters[char] = 1);
  }
  return letters;
};
// SERVER HOURS

const hours = ["12:30", "14:00", "19:55"];
// shutoff  = 11:45

const calculateCost = (arr, shutOff) => {
  let total = 0;

  const stopHour =
    shutOff.slice(0, 2) === "00" ? 24 : parseInt(shutOff.slice(0, 2));
  const stopMinutes = parseInt(shutOff.slice(3));

  for (let val of arr) {
    let startHour = parseInt(val.slice(0, 2));
    const startMinutes = parseInt(val.slice(3));

    if (startMinutes !== 0) {
      total += 60 - startMinutes;
      startHour++;
    }
    if (stopHour < startHour - 1) {
      startHour = 24 - startHour + stopHour;
      total += startHour * 60;
    } else {
      total += (stopHour - startHour) * 60;
    }

    total += stopMinutes;
    console.log(total);
  }

  return total;
};

// TOTAL STRING SUFFIX

const strings = ["man", "door", "batman", "backdoor"];

const strSuffix = (arr) => {
  let total = 0;
  const words = new Set(arr);

  for (let word of strings) {
    for (let j = word.length - 1; j >= 0; j--) {
      if (words.has(word.slice(j))) {
        total++;
        continue;
      }
    }
  }

  return total - strings.length;
};
