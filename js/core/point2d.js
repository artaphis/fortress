/**
 * Create 2d point instance.
 * @param x
 * @param y
 * @returns {{x: *, y: *, move: Function}}
 * @constructor
 */
Fort.Point2d = function (x, y) {
  if (typeof(x) === 'undefined') {
    x = 0;
  }

  if (typeof(y) === 'undefined') {
    y = 0;
  }

  return {
    x : x,
    y : y,
    move : function (towards) {
      return Fort.Point2d(this.x + towards.x, this.y + towards.y);
    }
  };
};
