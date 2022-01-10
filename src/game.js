/// <reference path="../typings/phaser.d.ts" />

var config = {
  width: 256,
  height: 272,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

var gameSettings = {
  playerSpeed: 90,
};

var game = new Phaser.Game(config);
