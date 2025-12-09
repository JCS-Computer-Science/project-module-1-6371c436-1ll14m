import { makeGame } from "./game.js"

new p5 ((p) => {
  const game = makeGame(p);
  p.preload = () => {
    let image = p.loadImage("/MainMenu_Test.png")
  }
  p.frameRate(24);
  p.setup = () => {
    p.createCanvas(1920, 1080, document.getElementById("game"));
  }
  p.draw = () => {
    p.clear();
    p.rect(0, 0, 1920, 1080);
    p.fill("red");
    p.circle(860, 540, 50);
    p.nofill();
    p.image(image);
  }
})