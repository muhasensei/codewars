/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


*/


export function descendingOrder(n: number): number {
  let arr: number[] = n.toString().split('').map((num) => parseInt(num));
  if(arr.length === 1){
    return arr[0];
  }
  return parseInt(sortArray(arr).join(''));
}

function sortArray(arr: number[]) {//could`ve used sort() method, but did it just for myself
  for (let i: number = 0; i < arr.length; i++) {
    let max: number = i;
    for (let j: number = i + 1; j < arr.length; j++) {
      if(arr[max] < arr[j]){
        max = j
      }
    }
    if(max !== i) {
      let a: number = arr[max];
      arr[max] = arr[i];
      arr[i] = a;
    }
  }
  
  return arr;
}

console.log(descendingOrder(52664));

