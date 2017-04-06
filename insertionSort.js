/* jshint esversion: 6 */
var insertionSort = (arr) => {
  //traversing in the array
for (var i = 1; i <= arr.length-1; i++){
  var value = arr[i];
  var checkArrIndex = i;
  //when current index value is less than previous, shift to the left
  while ( arr[checkArrIndex -1] > value){
    arr[checkArrIndex] = arr[checkArrIndex -1];
    checkArrIndex = checkArrIndex -1;
  }
  arr[checkArrIndex] = value;
}

  return arr;
};

module.exports = insertionSort;