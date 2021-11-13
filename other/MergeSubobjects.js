/*
merge 'sub-objects' into one object


const result = {//result should be like this
  a: 1,
  b: 2,
  c: '{"d":3,"e":{"f":4},"h":[1,2,3,4,5]}',
  d: 3,
  e: '{"f":4}',
  f: 4,
  g: () => {},
  h: [1, 2, 3, 4, 5],
  i: 5,
  j: '{"k":null,"l":{"m":7,"o":{"p":3.14}}}',
  k: null,
  l: '{"m":7,"o":{"p":3.14}}',
  m: 7,
  o: '{"o":{"p":3.14}}',
  p: 3.14,
};
*/

const task = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
      g: () => {},
    },
    h: [1, 2, 3, 4, 5],
  },
  i: 5,
  j: {
    k: null,
    l: {
      m: 7,
      o: {
        p: 3.14,
      },
    },
  },
};


function mergeObj(obj) {
  for (let key in obj) {
    if(obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])){
        mergeObj(obj[key])
    }
    Object.defineProperty(task, key, {
      value: obj[key],
      enumerable: true,
    });
  }
}

mergeObj(task)
console.log(task);