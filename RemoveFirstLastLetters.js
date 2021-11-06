function removeFirstLastLetters(arr){
  if(arr.split(',').length < 3)
    return null;
  return arr.split(',')
    .filter((item, key, arr) => key !== arr.length-1 && key !== 0)
    .join(' ')
    .trim();
}

console.log(removeFirstLastLetters('1,2,5,4,7'));