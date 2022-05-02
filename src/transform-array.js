const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  let error = "'arr' parameter must be an instance of the Array!"
  let newArr = [];

  let discardNext = '--discard-next'; //исключает следующий элемент массива из преобразованного массива
  let discardPrev = '--discard-prev'; //исключает предыдущий элемент массива из преобразованного массива
  let doubleNext = '--double-next'; //дублирует следующий элемент массива в преобразованном массиве
  let doublePrev = '--double-prev'; //дублирует предыдущий элемент массива в преобразованном массиве

  if (arr.constructor != Array) {
    return error;
  } else {
    for (let i = 0; i < arr.length; i++){

      if (arr[i] == discardNext && i + 2 < arr.length) { 
        newArr.push(arr[i + 2]);
      } else if (arr[i] == discardPrev && i - 2 > 0) { 
        newArr.push(arr[i - 2]);
      } else if (arr[i] == doubleNext && i + 1 < arr.length) { 
        newArr.push(arr[i + 1]);
      } else if (arr[i] == doublePrev && i - 1 > 0) { 
        newArr.push(arr[i - 1]);
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
    
  }
}

module.exports = {
  transform
};
