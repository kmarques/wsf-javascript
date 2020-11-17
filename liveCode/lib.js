String.prototype.ucfirst = function () {
  return this.replace(/^\w/, function (e) {
    return e.toUpperCase();
  });
};
