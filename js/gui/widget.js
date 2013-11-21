/**
 * Create widget instance.
 *
 * @constructor
 */
Fort.Gui.Widget = function () {
  var me = this;
  me.hover = false;
  me.background = '#f0f';
  me.backgroundHover = '#909';
  me.foreground = '#000';

  me.rectangle = new Fort.Rectangle(0, 0, 100, 50);
};

/**
 * Set widget hover state.
 *
 * @param {boolean} hover
 */
Fort.Gui.Widget.prototype.setHover = function (hover) {
  this.hover = hover;
};

/**
 * Draw widget.
 */
Fort.Gui.Widget.prototype.draw = function () {
  var me = this;
  var context = Fort.App.instance.canvasContext;

  context.fillStyle = me.background;
  context.fillRect(me.rectangle.position.x, me.rectangle.position.y, me.rectangle.size.x, me.rectangle.size.y);
};

/**
 * Mouse click event callback.
 *
 * @param {MouseEvent} e
 */
Fort.Gui.Widget.prototype.click = function (e) {
};

/**
 * Mouse move event callback.
 *
 * @param {MouseEvent} e
 */
Fort.Gui.Widget.prototype.mousemove = function (e) {
};

/**
 * Set widget position.
 *
 * @param {Fort.Point2d} position
 */
Fort.Gui.Widget.prototype.setPosition = function (position) {
  this.rectangle.position.x = position.x;
  this.rectangle.position.y = position.y;
};

/**
 * Set widget size.
 *
 * @param {Fort.Point2d} size
 */
Fort.Gui.Widget.prototype.setSize = function (size) {
  this.rectangle.size.x = size.x;
  this.rectangle.size.y = size.y;
};

/**
 * Get widget rectangle.
 *
 * @returns {Fort.Rectangle}
 */
Fort.Gui.Widget.prototype.getRectangle = function () {
  return this.rectangle;
};
