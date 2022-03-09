/* 

Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

*/

function numberOfInvalidArrayStructures(firstArray, secondArray) {
    let invalidStructures = 0;
    for (let i = 0; i < firstArray.length; i++) {
        let firstArrayElement = firstArray[i];
        let secondArrayElement = secondArray[i];
        if (Array.isArray(firstArrayElement) && Array.isArray(secondArrayElement)) {
            invalidStructures += numberOfInvalidArrayStructures(firstArrayElement, secondArrayElement);
        }
        if((typeof (firstArrayElement + '') !== typeof (secondArrayElement + '') )
          || ((firstArrayElement + '').length !== (secondArrayElement + '').length)
          ) {
            invalidStructures++;
        }
    }
    return invalidStructures;
} 


Array.prototype.sameStructureAs = function(other) {
  if (Array.isArray(other) && Array.isArray(other)) {
    return numberOfInvalidArrayStructures(this, other) > 0 ? false : true;
  }
  
  return false;
};

console.log([1,[1,1]].sameStructureAs([2,[2,2]]));