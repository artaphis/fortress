Fort.App = function () {
  var me = this;

  me.canvas = document.getElementById("screen");
  me.canvasContext = me.canvas.getContext("2d");
  me.windowSize = new Fort.Point2d(window.innerWidth, window.innerHeight);

  me.timeElapsed = 0;

  me.gui = {};

  me.prices = {
    Creep : 20,
    Citadel : 1000
  };

  /**
   * Human player instance.
   *
   * @type {Fort.Player}
   */
  me.humanPlayer = null;

  /**
   * AI player instance.
   *
   * @type {Fort.Player}
   */
  me.aiPlayer = null;

  /**
   * Game scene.
   *
   * @type {Fort.Scene}
   */
  me.scene = null;

  /**
   * Initialize window.
   */
  me.initWindow = function () {
    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 30);
        };
    })();

    window.addEventListener('resize', me.resize, false);
    me.resize();
  };

  /**
   * Initialize GUI.
   */
  me.initGui = function () {
    me.canvas.addEventListener('click', function (e) {
      Fort.Gui.click(e);
    }, false);

    me.canvas.addEventListener('mousemove', function (e) {
      Fort.Gui.mousemove(e);
    }, false);

    me.gui.createCreepButton = Fort.Gui.createButton();
    me.gui.createCreepButton.setText('Add+');

    /**
     * Create creep button clicked.
     */
    me.gui.createCreepButton.click = function () {
      if (me.humanPlayer.hasEnoughGold(me.prices.Creep)) {
        var creep = me.scene.createCreep();
        creep.setPlayer(me.humanPlayer);
        me.humanPlayer.addGold(-me.prices.Creep);
        creep.setPosition(Fort.Point2d(200, 475));
      }
    };

    me.gui.humanGoldLabel = Fort.Gui.createLabel();
    me.gui.humanGoldLabel.setPosition(new Fort.Point2d(0, 100));
  };

  /**
   * Resize window callback.
   */
  me.resize = function () {
    me.canvas.width = me.windowSize.x = window.innerWidth;
    me.canvas.height = me.windowSize.y = window.innerHeight;
  };

  /**
   * Render application.
   */
  me.render = function () {
    me.canvasContext.fillStyle = '#000';
    me.canvasContext.fillRect(0, 0, me.windowSize.x, me.windowSize.y);

    me.scene.doLogic();
    me.scene.draw();

    me.gui.humanGoldLabel.setText('$' + me.humanPlayer.getGold());
    Fort.Gui.draw();

    window.requestAnimFrame(me.render);
  };

  // Do AI logic.
  me.timer = setInterval(function () {
    me.timeElapsed++;

    if (me.timeElapsed % 200 === 0) {
      if (me.aiPlayer.hasEnoughGold(me.prices.Creep)) {
        var creep = me.scene.createCreep();
        creep.setPlayer(me.aiPlayer);
        me.aiPlayer.addGold(-me.prices.Creep);
        creep.setSpeed(-2);
        creep.setPosition(Fort.Point2d(800, 475));
      }
    }
  }, 10);
};

/**
 * Get canvas context.
 *
 * @returns {CanvasRenderingContext2D|*}
 */
Fort.App.getCanvasContext = function () {
  return Fort.App.instance.canvasContext;
};

Fort.App.prototype.run = function () {
  var me = this;

  me.initWindow();
  me.initGui();

  // Create players.
  me.humanPlayer = new Fort.Player();
  me.humanPlayer.setName('Human');
  me.humanPlayer.setGold(100);

  me.aiPlayer = new Fort.Player();
  me.aiPlayer.setName('Machine');
  me.aiPlayer.setGold(100);

  me.humanPlayer.setEnemy(me.aiPlayer);
  me.aiPlayer.setEnemy(me.humanPlayer);

  me.scene = new Fort.Scene();
  me.render();
};

// Entry point.
(function () {
  Fort.App.instance = new Fort.App();
  Fort.App.instance.run();
})();