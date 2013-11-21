/**
 * Button class.
 *
 * @constructor
 */
Fort.Gui.Button = function () {
  Fort.Gui.Button.superclass.constructor.call(this);
  this.text = 'Button';
};

Fort.Gui.Button.inherits(Fort.Gui.Widget);

/**
 * Set button text.
 *
 * @param text
 */
Fort.Gui.Button.prototype.setText = function (text) {
  this.text = text;
};

/**
 * Draw button background.
 */
Fort.Gui.Button.prototype.drawBackground = function () {
  var me = this;
  var context = Fort.App.instance.canvasContext;

  if (me.hover) {
    context.fillStyle = me.backgroundHover;
  } else {
    context.fillStyle = me.background;
  }

  context.fillRect(me.rectangle.position.x, me.rectangle.position.y, me.rectangle.size.x, me.rectangle.size.y);
};

/**
 * Draw button foreground.
 */
Fort.Gui.Button.prototype.drawForeground = function () {
  var me = this;
  var context = Fort.App.instance.canvasContext;

  context.fillStyle = me.foreground;
  context.strokeStyle = me.foreground;
  context.font = me.rectangle.size.y/2 + 'px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  context.fillText(me.text, me.rectangle.position.x + me.rectangle.size.x/2, me.rectangle.position.y + me.rectangle.size.y/2);
};

/**
 * Draw button.
 */
Fort.Gui.Button.prototype.draw = function () {
  var me = this;
  me.drawBackground();
  me.drawForeground();
};
