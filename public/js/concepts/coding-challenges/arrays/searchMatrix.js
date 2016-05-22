/**
* Given an input matrix array and target value, determine if the target is in the matrix
*
* @param {Array[][]} matrix, {Integer} target
* @return {Boolean}
*/
function searchMatrix(matrix, target) {
  for (var i = 0; i < matrix.length; i++) { // 0 => 2, top to bottom
    for (var j = 0; j < matrix[i].length; j++) { // , 0 => 3, left to right
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}
