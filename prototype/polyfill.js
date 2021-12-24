// map을 지원하지 않는 브라우저를 위한 폴리필
Array.prototype.MyMap = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
}[(1, 2, 3)].MyMap((n) => n * 2);
