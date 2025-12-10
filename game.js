export function makeGame(p, setScene, currentScene) {
    return {
        draw() {
            console.log("Game");
            p.clear();
            p.background("lightblue");
            this.makeButtons();
        },
        makeButtons() {
            console.log("-----------------------------------------");
            for (let i=0; i<6; i++) {
                let div = document.createElement("div");
                div.id = "game_button";
                div.className = "button";
                document.body.appendChild(div);
            }
        }
    }
}