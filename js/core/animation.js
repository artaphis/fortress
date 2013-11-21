/**
 * Animation class.
 *
 * @constructor
 */
Fort.Animation = function () {
  /**
   * Current frame index.
   *
   * @type {number}
   */
  this.currentFrameIndex = 0;

  /**
   * Animation frames.
   *
   * @type {Array<Fort.Frame>}
   */
  this.frames = [];
};

/**
 * Draw animation.
 */
Fort.Animation.prototype.draw = function () {
  this.renderCurrentFrame();
  this.nextFrame();
}

/**
 * Render current frame.
 */
Fort.Animation.prototype.renderCurrentFrame = function () {
  if (typeof this.frames[this.currentFrameIndex] !== 'undefined') {
    this.frames[this.currentFrameIndex].draw();
  }
}

/**
 * Switch animation to the next frame.
 */
Fort.Animation.prototype.nextFrame = function () {
  if (this.frames.length) {
    this.currentFrameIndex = (this.currentFrameIndex + 1) % this.frames.length;
  }
}

/**
 * Add new frame to the animation.
 *
 * @param {Fort.Frame} frame
 */
Fort.Animation.prototype.addFrame = function (frame) {
  this.frames.push(frame);
}
