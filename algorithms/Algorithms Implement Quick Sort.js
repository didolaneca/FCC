// Here we will move on to an intermediate sorting algorithm: quick sort. 
// Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.
// In this method, a pivot value is chosen in the original array. 
// The array is then partitioned into two subarrays of values less than and greater than the pivot value. 
// We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. 
// This continues until the base case of an empty or single-item array is reached, which we return. 
// The unwinding of the recursive calls return us the sorted array.

// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. 
// It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers 
// in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. 
// For simplicity, the first or last element could be used.

// Note:
// We are calling this function from behind the scenes; the test array we are using is commented out in the editor. 
// Try logging array to see your sorting algorithm in action!
function quickSort(array) {
    // change code below this line
    array = myQuickSort(array, 0, array.length - 1);
    // change code above this line
    return array;
  }
  
  
  function myQuickSort(arr, left, right){
     var len = arr.length, 
     pivot,
     partitionIndex;
  
  
    if(left < right){
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);
      
     //sort left and right
     myQuickSort(arr, left, partitionIndex - 1);
     myQuickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  }
  
  function partition(arr, pivot, left, right){
     var pivotValue = arr[pivot],
         partitionIndex = left;
  
     for(var i = left; i < right; i++){
      if(arr[i] < pivotValue){
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(arr, i, j){
     var temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
  }
  
  // test array:
  // [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]