Fort.Gui = Fort.Gui || {};

Fort.Gui.widgets = [];

/**
 * Create button.
 *
 * @returns {Fort.Gui.Button}
 */
Fort.Gui.createButton = function () {
  var button = new Fort.Gui.Button();
  Fort.Gui.widgets.push(button);
  return button;
};

/**
 * Create label.
 *
 * @returns {Fort.Gui.Label}
 */
Fort.Gui.createLabel = function () {
  var label = new Fort.Gui.Label();
  Fort.Gui.widgets.push(label);
  return label;
};

/**
 * Draw GUI.
 */
Fort.Gui.draw = function () {
  for (var i = 0; i < Fort.Gui.widgets.length; i++) {
    Fort.Gui.widgets[i].draw();
  }
};

/**
 * Dispatch click event.
 *
 * @param e
 */
Fort.Gui.click = function (e) {
  for (var i = 0; i < Fort.Gui.widgets.length; i++) {

    var rectangle = Fort.Gui.widgets[i].getRectangle();

    if (rectangle.contains(Fort.Point2d(e.x, e.y))) {
      Fort.Gui.widgets[i].click(e);
    }
  }
};

/**
 * Dispatch mousemove event.
 *
 * @param e
 */
Fort.Gui.mousemove = function (e) {
  for (var i = 0; i < Fort.Gui.widgets.length; i++) {
    var rectangle = Fort.Gui.widgets[i].getRectangle();

    if (rectangle.contains(Fort.Point2d(e.x, e.y))) {
      Fort.Gui.widgets[i].mousemove(e);
      Fort.Gui.widgets[i].setHover(true);
    } else {
      Fort.Gui.widgets[i].setHover(false);
    }
  }
};
