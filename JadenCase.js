String.prototype.toJadenCase = function () {
  return this.split(' ').map(item => (item.slice(0, 1).toUpperCase()) + item.slice(1)).join(' ')
};

// make string to string array by spliting it to words
// iterate array and make first letter of work uppercase
// and add the rest part without changing
// finally add string array elements to one string using join()