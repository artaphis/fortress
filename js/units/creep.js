/**
 * Create creep instance.
 *
 * @constructor
 */
Fort.Creep = function () {
  Fort.Creep.superclass.constructor.call(this);

  this.health = 100;
  this.maxHealth = 100;
  this.speed = 3;
};

Fort.Creep.inherits(Fort.Unit);

/**
 * Creep states.
 *
 * @type {{STAND: number, WALK: number, ATTACK: number, DEAD: number}}
 */
Fort.Creep.State = {
  STAND  : 0,
  WALK   : 1,
  ATTACK : 2,
  DEAD   : 4
};

Fort.Unit.prototype.getPrice = function () {
  return Fort.App.instance.prices.Creep;
};

/**
 * Set creep speed.
 */
Fort.Creep.prototype.setSpeed = function (speed) {
  this.speed = speed;
};

/**
 * Move creep.
 */
Fort.Creep.prototype.move = function () {
  var canMove = true;
  this.position.x += this.speed;

  for (var i = 0; i < this.scene.units.length; i++) {
    if (this.scene.units[i] === this) {
    } else {
      var bounds = this.scene.units[i].getBounds();
      if (bounds.intersects(this.getBounds())) {
        canMove = false;

        if (this.scene.units[i].getPlayer().getEnemy() === this.getPlayer()) {
          this.scene.units[i].adjustHealth(this.getDamage() + this.scene.units[i].armor);
        }

        break;
      }
    }
  }
  if (!canMove) {
    this.position.x -= this.speed;
  }
};

/**
 * Get creep position.
 */
Fort.Creep.prototype.getPosition = function () {
  return this.position;
};

/**
 * Draw creep.
 */
Fort.Creep.prototype.draw = function () {
  var me = this;
  var context = Fort.App.getCanvasContext();
  var position = me.getPosition();
  var size = me.getSize();

  context.fillStyle = '#444';
  context.fillRect(position.x, position.y, size.x, size.y);
  context.fillRect(position.x + size.x / 4, position.y - size.y / 4, size.x / 2, size.y / 4);

  // Draw health bar.
  var top = position.y - size.y / 2;
  var left = position.x;

  var width = size.x * me.health / me.maxHealth;
  if (width < 0) {
    width = 0;
  }

  context.strokeStyle = '#0f0';
  context.beginPath();
  context.moveTo(left, top);
  context.lineTo(left + width, top);
  context.closePath();
  context.stroke();
};
