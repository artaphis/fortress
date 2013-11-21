/**
 * Label class.
 *
 * @constructor
 */
Fort.Gui.Label = function () {
  Fort.Gui.Label.superclass.constructor.call(this);
  this.text = 'Label';
};

Fort.Gui.Label.inherits(Fort.Gui.Widget);


/**
 * Set label text.
 *
 * @param text
 */
Fort.Gui.Label.prototype.setText = function (text) {
  this.text = text;
};


/**
 * Draw label foreground.
 */
Fort.Gui.Label.prototype.drawForeground = function () {
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
 * Draw label.
 */
Fort.Gui.Label.prototype.draw = function () {
  var me = this;
  me.drawForeground();
};
