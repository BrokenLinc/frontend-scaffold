import React, { Component } from 'react';
import { throttle } from 'lodash';

const MAX_FPS = 50;

const getWindowDimensions = () => {
  const width = window.innerWidth * window.devicePixelRatio;
  const height = window.innerHeight * window.devicePixelRatio;
  const fillSize = Math.max(width, height);
  const xOffset = (width - fillSize) / 2;
  const yOffset = (height - fillSize) / 2;
  return {
    width,
    height,
    fillSize,
    xOffset,
    yOffset
  };
};

class ExampleCanvas extends Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);
    this.throttledResize = throttle(this.onResize, 1000 / MAX_FPS).bind(this);

    this.timer = 0;

    this.state = getWindowDimensions();
  }

  componentWillMount() {
    window.addEventListener('resize', this.throttledResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttledResize);
    this.willUnmount = true;
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    // TODO: Set initial styles here
    this.gameLoop();
  }

  gameLoop() {
    if (this.willUnmount) return;

    this.draw();
    requestAnimationFrame(() => {
      setTimeout(this.gameLoop.bind(this), 1000 / MAX_FPS); // throttle fps
    });
  }

  draw() {
    this.timer += 1;
    this.ctx.clearRect(0, 0, this.state.width, this.state.height);

    // TODO: Draw here each frame
  }

  onResize() {
    this.setState(getWindowDimensions());
    // TODO: Re-set initial styles here
  }

  render() {
    return (
      <canvas
        width={this.state.width}
        height={this.state.height}
        ref={element => {
          this.canvas = element;
        }}
      />
    );
  }
}

export default ExampleCanvas;
