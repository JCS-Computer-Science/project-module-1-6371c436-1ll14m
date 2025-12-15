import { makeGame } from "./game.js"
import { makeMenu } from "./menu.js";

new p5 ((p) => {
  let currentScene = "menu";
  let activeScene = null;  // My brain isn't braining
  // I don't understand why activeScene fixes the problem
  // That being said I also don't fully understand switch case stuff
  // --Teachers Note--Great Question:  activeScene keeps track of which scene is currently loaded.
  // draw() runs every frame, so without this check, setup() would
  // run over and over and reset the scene.
  // By comparing activeScene, setup() only runs once when the scene changes.
  // -Analogy below :)
 // switch = deciding which TV channel to watch
  //setup() = plugging in the TV
  //draw() = watching the show
  //activeScene = checking if the TV is already plugged in so you don’t unplug and replug it 24 times a second
  
  
  let currentMode = "1";

  function setScene(scene) {
    if (currentScene !== scene) {
      currentScene = scene;
    }
  }
  function setMode(mode) {
    if (currentMode !== mode) {
      currentMode = mode;
    }
  }

  const menu = makeMenu(p, setScene, setMode);
  const game = makeGame(p, setScene);

  p.frameRate(24);
  p.setup = () => {
    p.createCanvas(1920, 1080, document.getElementById("game"));
  }
  p.draw = () => {
    switch (currentScene) {
      case "menu":
        if (activeScene !== menu) {
          activeScene = menu;
          menu.setup();
        }
        menu.draw();
        break;
      case "game":
        if (activeScene !== game) {
          activeScene = game;
          if (currentMode == "1") {
            game.setup(3, 3, 50, 150);
          } else if (currentMode == "2") {
            game.setup(5, 5, 35, 150);
          } else if (currentMode == "3") {
            game.setup(7, 7, 20, 150);
          }
        }
        game.draw();
        break;
      default:
    }
  }
})
