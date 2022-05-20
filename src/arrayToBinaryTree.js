//Generating 100 random numbers to be used in a binary tree

/**
 * Generating a random array
 * @type {Array<number>}
 * @desc This will generate a random array of numbers
 * @param {number} maxLength - Set the max length of the desired array
 * @param {number} inBetween - Set the in between number that you would like to use (goes from + to -)
 */
function randomArr(maxLength, inBetween) {
  var arr = [];
  while (arr.length < maxLength) {
    var randomNumber = Math.floor((Math.random() - 0.5) * inBetween * 2);
    if (arr.indexOf(randomNumber) === -1) arr.push(randomNumber);
  }
  return arr.sort((a, b) => a - b); //Sorting array from smallest to largest
};

const nums = randomArr(100, 1000)

/**
 * Array to Binary Tree
 * @desc This function will generate a binary tree from the array given
 * @param {array} nums - Array of numbers
 * @param {number} left - Left default value
 * @param {number} right - Length of the array
 * @throws Throw null if the array is empty
 */
const arrayToBST = (nums, left = 0, right = nums.length - 1) => {
  if (left > right) return null; //Will return null if the left value is higher than the array length

  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);

  root.left = arrayToBST(nums, left, mid - 1);
  root.right = arrayToBST(nums, mid + 1, right);

  return root;
};

/**
 *
 * @desc This will generate a Tree data structure
 * @param {number} value - Value
 * @param {number} left - Left value will be lower than parent
 * @param {number} right - Right value will be higher than parent
 */
function TreeNode(value, left, right) {
  this.value = (value === undefined ? 0 : value)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

console.log("Array", nums) //This will print the array generated
console.log(arrayToBST(nums)) //This will print the Binary Tree
