/**
 * Returns a new array where each number from the input array is squared.
 * (Each element is multiplied by itself.)
 * @param {number[]} numbers - An array of numbers to be squared.
 * @returns {number[]} A new array containing the squares of the input numbers.
 */
export default function squareNumbers(numbers) {
  // TODO: square each number in the array

  
   const SN = []; // "SN" is Square Number.
   for (let i = 0; i < numbers.length; i++) {
    const square = numbers[i] * numbers[i];
    SN.push(square);
  }
  return SN;
}