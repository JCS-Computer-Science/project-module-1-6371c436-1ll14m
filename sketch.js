import { makeGame } from "./game.js"
import { makeMenu } from "./menu.js";

new p5 ((p) => {
  let currentScene = "menu";
  function setScene(scene) {
    if (currentScene !== scene) {
      currentScene = scene;
    }
  }
  const game = makeGame(p, setScene, () => currentScene);
  const menu = makeMenu(p, setScene, () => currentScene);
  let image;
  p.preload = () => {
    image = p.loadImage("/MainMenu_Test.png")
  }
  p.frameRate(24);
  p.setup = () => {
    p.createCanvas(1920, 1080, document.getElementById("game"));
    menu.button();
    game.makeButtons();
  }
  p.draw = () => {
    switch (currentScene) {
      case "menu":
        menu.draw();
        break;
      case "game":
        game.draw();
        break;
      default:
    }
    // p.image(image, 0, 0, 1920, 1080);
  }
})