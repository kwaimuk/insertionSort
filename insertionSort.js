/* jshint esversion: 6 */
var insertionSort = (arr) => {
  //traversing in the array
for (var i = 1; i <= arr.length-1; i++){
  var pick = arr[i];
  var checkArrIndex = i;
  var shifted = false;
              console.log("i",i);
              //when current index value is less than previous, shift to the left by one, keep repeating until it can't
              console.log("previous ",arr[checkArrIndex -1]);
    var j=0;


  while ( arr[checkArrIndex -1] > pick){
    console.log("arr1",arr);
    //write over the current index value with the previous
    arr[checkArrIndex] = arr[checkArrIndex -1];
    //index is now moved to the previous index
    checkArrIndex = checkArrIndex -1;
    console.log("arr2",arr);
    shifted =true;
     j++;
    console.log("How many shifted times",j);
            console.log("pick",pick);
  }
  if(shifted === true){
            console.log("shifted2", shifted);
            //return the smaller value to the shifted index
  arr[checkArrIndex] = pick;
          console.log("currently",arr[checkArrIndex]);
          console.log("currently pick",checkArrIndex);
          console.log("arr",arr);
  }
}
  return arr;
};
module.exports = insertionSort;
