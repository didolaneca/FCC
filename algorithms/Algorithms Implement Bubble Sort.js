function bubbleSort(array) {
    // change code below this line
    isSorted = false;
    lastUnsorted = array.length - 1;
    while(!isSorted){
      for(i = 0; i < lastUnsorted; i++){
        if(array[i] > array[i + 1]){
          swap(array, i, i +1);
          isSorted = false;
        }
      }
      lastUnsorted--;
    }
    // change code above this line
    return array;
  }
  
  const swap = (array, a, b) => {
    //swap index a and index b in the array
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    return array;
  }
  
  // test array:
  // [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]