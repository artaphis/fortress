/**
 * Create bullet instance.
 *
 * @constructor
 */
Fort.Bullet = function () {
  Fort.Bullet.superclass.constructor.call(this);
  this.speed = 10;
};

Fort.Bullet.inherits(Fort.Unit);

/**
 * Set bullet speed.
 */
Fort.Bullet.prototype.setSpeed = function (speed) {
  this.speed = speed;
};

/**
 * Get bullet position.
 *
 * @returns {Fort.Point2d}
 */
Fort.Bullet.prototype.getPosition = function () {
  var me = this;
  me.position.x += me.speed;
  return me.position;
};
