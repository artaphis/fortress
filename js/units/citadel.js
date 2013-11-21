/**
 * Create citadel instance.
 *
 * @constructor
 */
Fort.Citadel = function () {
  Fort.Citadel.superclass.constructor.call(this);
};

Fort.Citadel.inherits(Fort.Unit);

/**
 * Draw unit.
 */
Fort.Citadel.prototype.draw = function () {
  var me = this;
  var context = Fort.App.instance.canvasContext;
  var position = me.getPosition();
  var size = me.getSize();
  context.fillStyle = '#f55';
  context.fillRect(position.x, position.y, size.x, size.y);
};
