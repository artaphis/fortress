Fort.Rectangle = function (x, y, width, height) {
  if (typeof(x) === 'undefined') {
    x = 0;
  }

  if (typeof(y) === 'undefined') {
    y = 0;
  }

  if (typeof(width) === 'undefined') {
    width = 0;
  }

  if (typeof(height) === 'undefined') {
    height = 0;
  }

  return {
    position   : Fort.Point2d(x, y),
    size       : Fort.Point2d(width, height),
    right      : function () {
      return this.position.x + this.size.x;
    },
    bottom     : function () {
      return this.position.y + this.size.y;
    },
    contains   : function (point) {
      return (point.x >= this.position.x)
        && (point.x <= this.right())
        && (point.y >= this.position.y)
        && (point.y <= this.bottom());
    },

    /**
     * Test two rectangles for intersection.
     *
     * @param rect
     * @returns {boolean}
     */
    intersects : function (rect) {

      var intersects = false;

      intersects = intersects || this.contains(rect.position);
      intersects = intersects || this.contains(Fort.Point2d(rect.position.x + rect.size.x, rect.position.y));
      intersects = intersects || this.contains(Fort.Point2d(rect.position.x, rect.position.y + rect.size.y));
      intersects = intersects || this.contains(rect.position.move(rect.size));

      return intersects;
    }
  };
};
