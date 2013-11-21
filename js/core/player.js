/**
 * Create player instance.
 *
 * @constructor
 */
Fort.Player = function () {
  this.gold = 0;
  this.name = 'Player';
  this.isHuman = false;
  this.enemy = null;
};

/**
 * Set enemy player.
 *
 * @param {Fort.Player} enemy
 */
Fort.Player.prototype.setEnemy = function (enemy) {
  this.enemy = enemy;
};

/**
 * Get enemy player.
 *
 * @returns {Fort.Player}
 */
Fort.Player.prototype.getEnemy = function () {
  return this.enemy;
};

/**
 * Get amount of player's gold.
 *
 * @returns {number}
 */
Fort.Player.prototype.getGold = function () {
  return this.gold;
};

Fort.Player.prototype.setGold = function (gold) {
  this.gold = gold;
};

Fort.Player.prototype.hasEnoughGold = function (gold) {
  return this.gold >= gold;
}

Fort.Player.prototype.addGold = function (amount) {
  this.gold += amount;
  return this.gold;
};

Fort.Player.prototype.getName = function () {
  return this.name;
};

Fort.Player.prototype.setName = function (name) {
  this.name = name;
};

Fort.Player.prototype.isHumanPlayer = function () {
  return this.isHuman;
};
