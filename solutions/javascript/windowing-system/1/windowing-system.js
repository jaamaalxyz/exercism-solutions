export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth < 1 ? 1 : newWidth;
  this.height = newHeight < 1 ? 1 : newHeight;
};

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = Math.max(newX, 0);
    this.y = Math.max(newY, 0);
  }
}

export class ProgramWindow {
  constructor(screenSize, size, position) {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = new Size(800, 600);
  }

  resize(newSize) {
    const { width, height } = newSize
    
    const minWidth = Math.min(width, this.screenSize.width - this.position.x);
    const minHeight = Math.min(height, this.screenSize.height - this.position.y);
    
    this.size.resize(minWidth, minHeight);
  }

  move(newPosition) {
    const { x, y } = newPosition;
    
    const minX = Math.min(x, this.screenSize.width - this.size.width);
    const minY = Math.min(y, this.screenSize.height - this.size.height);
    
    this.position.move(minX, minY);
  }
}

export function changeWindow(window) {
  window.resize(new Size(400, 300));
  window.move(new Position(100, 150));
  return window;
}