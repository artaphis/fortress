/**
 * Game scene.
 * @constructor
 */
Fort.Scene = function () {
  var me = this;

  /**
   * Game units on the scene.
   *
   * @type {Array<Fort.Unit>}
   */
  me.units = [];

  var citadel = new Fort.Citadel();
  citadel.setPosition(new Fort.Point2d(100, 400));
  citadel.setSize(new Fort.Point2d(100, 100));
  citadel.setPlayer(Fort.App.instance.humanPlayer);
  citadel.setHealth(1000);

  var citadel2 = new Fort.Citadel();
  citadel2.setPosition(new Fort.Point2d(900, 400));
  citadel2.setSize(new Fort.Point2d(100, 100));
  citadel2.setPlayer(Fort.App.instance.aiPlayer);
  citadel2.setHealth(1000);

  me.units.push(citadel);
  me.units.push(citadel2);
};

/**
 * Create creep.
 *
 * @returns {Fort.Creep}
 */
Fort.Scene.prototype.createCreep = function () {
  var creep = new Fort.Creep();
  creep.scene = this;
  this.units.push(creep);
  return creep;
};

/**
 * Delete dead units.
 */
Fort.Scene.prototype.deleteCorpses = function () {
  var me = this;
  var totalUnits = me.units.length;
  for (var i = 0; i < totalUnits; i++) {
    if (me.units[i].getHealth() <= 0) {
      me.units[i].getPlayer().getEnemy().addGold(me.units[i].getPrice());
      me.units[i] = null;
    }
  }
  me.units.clean(null);
};

/**
 * Move all movable game units.
 */
Fort.Scene.prototype.moveUnits = function () {
  var me = this;
  var totalUnits = me.units.length;
  for (var i = 0; i < totalUnits; i++) {
    if (typeof me.units[i].move !== 'undefined') {
      me.units[i].move();
    }
  }
}

/**
 * Do game logic.
 */
Fort.Scene.prototype.doLogic = function () {
  var me = this;

  me.deleteCorpses();
  me.moveUnits();
};

/**
 * Draw game scene.
 */
Fort.Scene.prototype.draw = function () {
  var me = this;
  var app = Fort.App.instance;
  var context = app.canvasContext;
  var windowSize = app.windowSize;

  var skyGradient = context.createLinearGradient(0, 0, 0, windowSize.y);
  skyGradient.addColorStop(0, '#3d1100');
  skyGradient.addColorStop(.25, '#8c3a00');
  skyGradient.addColorStop(.75, '#de7502');
  skyGradient.addColorStop(1, '#a8a217');

  context.fillStyle = skyGradient;
  context.fillRect(0, 0, windowSize.x, windowSize.y);

  var groundGradient = context.createLinearGradient(0, windowSize.y * 0.75, 0, windowSize.y);
  groundGradient.addColorStop(0, '#d49f53');
  groundGradient.addColorStop(1, '#ce843e');
  context.fillStyle = groundGradient;
  context.fillRect(0, windowSize.y * 0.75, windowSize.x, windowSize.y * 0.25);

  var totalUnits = me.units.length;
  for (var i = 0; i < totalUnits; i++) {
    me.units[i].draw();
  }
};
