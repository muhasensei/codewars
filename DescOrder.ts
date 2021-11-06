export function descendingOrder(n: number): number {
  let arr: number[] = n.toString().split('').map((num) => parseInt(num));
  if(arr.length === 1){
    return arr[0];
  }
  return parseInt(sortArray(arr).join(''));
}

function sortArray(arr: number[]) {
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

