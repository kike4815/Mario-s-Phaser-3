import { Scene } from "phaser";
import logoImg from "./assets/logoMario.png";
import background from "./assets/turma-super-mario-png-super-mario-bros-115631001323dqxcsuuup (1).png";

class PreloadScene extends Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("logo", logoImg);
    this.load.image("background", background);
  }

  create() {
    const mainScene = this.add.image(400, 300, "background");

    const logo = this.add.image(400, 150, "logo");
    this.tweens.add({
      targets: logo,
      y: 400,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
    this.input.on("pointerdown", () => this.scene.start("game"));
  }
}
export default PreloadScene;
