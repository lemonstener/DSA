// YEAR FROM CENTURY
function solution(year) {
  if (year <= 100) return 1;
  return Math.ceil(year / 100);
}
// ADJACENT ELEMENTS PRODUCT
function solution(inputArray) {
  let highestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    highestProduct = Math.max(
      highestProduct,
      inputArray[i] * inputArray[i + 1]
    );
  }

  return highestProduct;
}
// N-INTERESTING AREA
function solution(n) {
  return n ** 2 + (n - 1) ** 2;
}
// MAKE ARRAY CONSECUTIVE
function solution(statues) {
  if (statues.length < 2) return 0;
  const sortedStatues = statues.sort((a, b) => a - b);
  let statueCount = 0;
  for (let i = 0; i < sortedStatues.length - 1; i++) {
    const currStatue = sortedStatues[i];
    const nextStatue = sortedStatues[i + 1];
    const difference = nextStatue - currStatue;
    if (difference > 1) {
      statueCount += nextStatue - currStatue - 1;
    }
  }

  return statueCount;
}
// ALMOST INCREASING SEQUENCE
function solution(seq) {
  var bad = 0;
  for (var i = 1; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  return true;
}

// MATRIX ELEMENT SUM
function solution(matrix) {
  let sum = 0;
  const hauntedRooms = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let currRoom = matrix[i][j];
      if (!hauntedRooms.has(j)) sum += currRoom;
      if (currRoom === 0) hauntedRooms.add(j);
    }
  }

  return sum;
}
// LONGEST STRINGS
function solution(inputArray) {
  let longestStr = inputArray[0].length;
  let output = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i++) {
    const currStr = inputArray[i];
    if (currStr.length === longestStr) {
      output.push(currStr);
    } else if (currStr.length > longestStr) {
      longestStr = currStr.length;
      output = [currStr];
    }
  }
  return output;
}
// COMMON CHARACTER COUNT
function solution(s1, s2) {
  let total = 0;
  const letters = {};
  for (let char of s1) {
    letters[char] ? letters[char]++ : (letters[char] = 1);
  }
  console.log(letters);
  for (let char of s2) {
    if (letters[char]) {
      if (letters[char] >= 1) {
        console.log(char, letters[char]);
        total++;
        letters[char]--;
      }
    }
  }

  return total;
}
// IS LUCKY
function solution(n) {
  const arr = n.toString().split("");
  if (arr.length % 2 !== 0) return false;
  const mid = arr.length / 2;
  let sum1 = 0;
  let sum2 = 0;
  let left = 0;
  let right = mid;
  while (left < mid) {
    sum1 += parseInt(arr[left]);
    sum2 += parseInt(arr[right]);
    left++;
    right++;
  }
  return sum1 === sum2;
}
// SORT BY HEIGHT
function solution(a) {
  const tempArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      tempArr.push(a[i]);
    }
  }
  tempArr.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = tempArr.pop();
    }
  }
  return a;
}
// REVERSE IN PARENS
function solution(inputString) {
  while (inputString.includes("(")) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join("")
    );
  }
  return inputString;
}
// ALTERNATING SUMS
function solution(a) {
  let teamOne = 0;
  let teamTwo = 0;
  for (let i = 0; i < a.length; i++) {
    i % 2 === 0 ? (teamOne += a[i]) : (teamTwo += a[i]);
  }
  return [teamOne, teamTwo];
}
// ADD BORDER
function solution(picture) {
  const border = picture[0].length + 2;
  const output = ["*".repeat(border)];

  for (let i of picture) {
    output.push("*" + i + "*");
  }
  output.push("*".repeat(border));
  return output;
}
// ARE SIMILAR
function solution(a, b) {
  let swap = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) swap++;
  }
  a.sort();
  b.sort();
  return a.toString() === b.toString() && swap < 3;
}
// ARRAY CHANGE
function solution(inputArray) {
  let moves = 0;
  let prev = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    const curr = inputArray[i];
    if (curr <= prev) {
      moves += Math.abs(curr - prev) + 1;
      prev = prev + 1;
    } else {
      prev = inputArray[i];
    }
  }
  return moves;
}
// PALYNDROME ARRANGING
function solution(inputString) {
  const letters = {};
  let orphaned = false;
  for (let char of inputString) {
    letters[char] ? letters[char]++ : (letters[char] = 1);
  }
  console.log(letters);
  for (let key in letters) {
    if (letters[key] % 2 !== 0) {
      if (orphaned) {
        return false;
      } else {
        orphaned = true;
      }
    }
  }
  return true;
}
// ARE EQUALLY STRONG
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft + yourRight !== friendsLeft + friendsRight) return false;
  return yourLeft === friendsLeft || yourLeft === friendsRight;
}
// MAXIMUM ADJACENT DIFFERENCE
function solution(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    maxDiff = Math.max(maxDiff, Math.abs(inputArray[i] - inputArray[i + 1]));
  }
  return maxDiff;
}
