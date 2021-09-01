import Phaser, { Game } from "phaser";
import MainScene from "./GameScene";
import PreloadScene from "./PreloadScene";

const config = {
  type: Phaser.AUTO,
  parent: "rouletteGame",
  width: 800,
  height: 700,
  scene: [PreloadScene, MainScene],
};

const game = new Game(config);
