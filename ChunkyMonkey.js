
function chunkArrayInGroups(arr, size) {
  var array = [];
  for (i=0; i <= (arr.length / size); i++) {
  array.push(arr.slice(size * i, size * (i + 1)));
  }
  
  if (array[array.length - 1].length == 0) {
    array.pop();
    return array;
  }
  
  else {
    return array;
  }
  
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
