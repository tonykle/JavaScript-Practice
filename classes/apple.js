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

var fuji = new Apple('red', 'fuji', 13);
//fuji.getInfo();

class Gala extends Apple {
  constructor(color, type, size, texture) {ors
    super(color, type, size),
    this.texture = texture,
    this.color = color,
    this.type = type,
    this.size = size
  }

  getTexture() {
    console.log('The texture of this apple is: ' + this.texture);
  }

  getAllInfo() {
    console.log(super.getInfo());
  }
}

var galaK = new Gala('red', 'Gala', 50, 'rough');
//galaK.getTexture();
galaK.getAllInfo();
