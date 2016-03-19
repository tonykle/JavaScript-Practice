'use strict';

class Apple {
  constructor(color, type, size) {
    this.color = color,
    this.type = 'whatever',
    this.size = size
  }

  getInfo() {
    console.log('This is the type and size: ' + this.type + ' ' + this.size);
  }
}

module.exports.Apple = Apple;
