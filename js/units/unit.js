/**
 * Base game unit.
 * @constructor
 */
Fort.Unit = function () {
  this.position = new Fort.Point2d(0, 0);
  this.size = new Fort.Point2d(20, 20);
  this.scene = null;
  this.player = null;
  this.health = 100;
  this.damage = 10;
  this.armor = 1;
};

Fort.Unit.prototype.getPrice = function () {
  return 0;
};

Fort.Unit.prototype.getHealth = function () {
  return this.health;
};

Fort.Unit.prototype.setHealth = function (health) {
  this.health = health;
};

Fort.Unit.prototype.adjustHealth = function (amount) {
  this.health -= amount;
};

Fort.Unit.prototype.getDamage = function () {
  return this.damage;
};

Fort.Unit.prototype.getArmor = function () {
  return this.armor;
};

/**
 * Get player.
 *
 * @returns {Fort.Player}
 */
Fort.Unit.prototype.getPlayer = function () {
  return this.player;
};

/**
 * Set player.
 *
 * @param {Fort.Player} player
 */
Fort.Unit.prototype.setPlayer = function (player) {
  this.player = player;
};

/**
 * Get unit position.
 *
 * @returns {Fort.Point2d}
 */
Fort.Unit.prototype.getPosition = function () {
  return this.position;
};

/**
 * Set unit position.
 *
 * @param {Fort.Point2d} position
 */
Fort.Unit.prototype.setPosition = function (position) {
  this.position.x = position.x;
  this.position.y = position.y;
};

/**
 * Get game unit size.
 *
 * @returns {Fort.Point2d}
 */
Fort.Unit.prototype.getSize = function () {
  return this.size;
};

/**
 * Set game unit size.
 *
 * @param {Fort.Point2d} size
 */
Fort.Unit.prototype.setSize = function (size) {
  this.size.x = size.x;
  this.size.y = size.y;
};

/**
 * Get bounding rectangle.
 *
 * @returns {Fort.Rectangle}
 */
Fort.Unit.prototype.getBounds = function () {
  return Fort.Rectangle(this.position.x, this.position.y, this.size.x, this.size.y);
};

/**
 * Draw unit.
 */
Fort.Unit.prototype.draw = function () {
  var me = this;
  var context = Fort.App.getCanvasContext();
  var position = me.getPosition();
  var size = me.getSize();
  context.fillStyle = '#f00';
  context.fillRect(position.x, position.y, size.x, size.y);
};
