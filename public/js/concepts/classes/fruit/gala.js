/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

var Apple = require('./apple.js').Apple;

class Gala extends Apple {
  constructor(color, type, size, texture) {
    super(color, type, size);
    this.color = color;
    this.type = type;
    this.size = size;
    this.texture = texture;
  }

  getTexture() {
    console.log('The texture of this apple is: ' + this.texture);
  }

  getAllInfo() {
    super.getInfo();
  }
}

var g = new Gala('red', 'big', 12, 'rough');
g.getTexture();
g.getAllInfo();
