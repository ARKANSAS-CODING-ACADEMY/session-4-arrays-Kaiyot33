/**
 * Returns the sum of all numbers in the given array.
 * If the array is empty, returns 0.
 * @param {number[]} numbers - An array of numbers to be summed.
 * @returns {number} The sum of the numbers in the array, or 0 if the array is empty.
 */
export default function sumArray(numbers) {
  // TODO: calculate the sum of numbers in the array

  let total = 0;{

  for (let i = 0; i < numbers.length; i++){
    total = total + numbers[i];
  }
  }
  
  return total;

}
console.log(sumArray([4, 7, 9, 28, 47]));