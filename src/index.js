module.exports = function reverse (n) {
  let num = String(n);
  let res = '';
  for (let i = (num.length - 1); i >= 0; i--) {
    if (isNaN(num[i])) {
      continue
    }
    else {
      res = res + num[i];
    }
  }
  return(res);
}
