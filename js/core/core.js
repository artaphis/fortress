/**
 * @namespace Fort namespace.
 */
var Fort = Fort || {};

/**
 * Implements object oriented inheritance.
 *
 * @param parent
 */
Object.prototype.inherits = function (Parent) {
  var Dummy = function () {
  };
  Dummy.prototype = Parent.prototype;
  this.prototype = new Dummy();
  this.prototype.constructor = this;
  this.superclass = Parent.prototype;
};

/**
 * Unset array element.
 *
 * @param value
 */
Array.prototype.unset = function(value) {
  if(this.indexOf(value) != -1) {
    this.splice(this.indexOf(value), 1);
  }
}

/**
 * Remove specified value from array.
 *
 * @param deleteValue
 * @returns {Array}
 */
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};
