import { Scene } from "phaser";
import backgroundMainScene from "./assets/fondo.png";
import SpinButton from "./assets/spin.png";
import carrouselImage from "./assets/simbolos.png";

class MyGame extends Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.json("data", "http://worldtimeapi.org/api/ip");
    this.load.image("fondo", backgroundMainScene);
    this.load.image("buttonStart", SpinButton);
    this.load.image("carrousel", carrouselImage);

    /*preload music */
    this.load.audio("mario", "src/assets/music/supermariobros.mp3");
  }

  create() {
    /*take data and adjust to display*/

    const data = this.cache.json.get("data");
    const dataSplited = data.datetime.split("T");
    const dataDate = dataSplited[0];
    const dataTime = dataSplited[1].slice(0, 8);

    if (!data || data === undefined) {
      this.add.text(300, 200, "Loading...");
    } else {
      const date = this.add.text(300, 50, dataDate);
      const time = this.add.text(450, 50, dataTime);
      date.setDepth(
        1
      ); /* this is Z index due to sprite take all position on rendering */
      time.setDepth(1);

      /* adjust the background image size to the view*/
      const image = this.add
        .sprite(
          this.cameras.main.width / 2,
          this.cameras.main.height / 2,
          "fondo"
        )
        .setDepth(1);
      const scaleX = this.cameras.main.width / image.width;
      const scaleY = this.cameras.main.height / image.height;
      const scale = Math.max(scaleX, scaleY);
      image.setScale(scale).setScrollFactor(0);

      /* call sprites and run timeline when click button */

      const carrousel = this.add.sprite(200, 350, "carrousel");
      const secondCarrousel = this.add.sprite(400, 350, "carrousel");
      const thirdCarrousel = this.add.sprite(600, 350, "carrousel");

      const timeline = this.tweens.createTimeline();
      timeline.add({
        targets: carrousel,
        ease: "Linear",
        duration: 500,
        repeat: 3,
        y: 150,
      });
      timeline.add({
        targets: secondCarrousel,
        ease: "Linear",
        duration: 500,
        repeat: 3,
        y: 150,
        offset: "-=500",
      });
      timeline.add({
        targets: thirdCarrousel,
        ease: "Linear",
        duration: 500,
        repeat: 3,
        y: 150,
        offset: "-=500",
      });

      /* add spin button */
      const button = this.add
        .sprite(400, 550, "buttonStart")
        .setInteractive()
        .setDepth(1);
      button.on("pointerdown", start);

      function start() {
        timeline.play();
      }
    }
  }
}
export default MyGame;
