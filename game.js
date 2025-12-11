export function makeGame(p, setScene, currentScene, click) {
    return {
        setup() {
            this.makeButtons();
        },
        draw() {
            console.log("Game");
            p.clear();
            p.background("lightblue");
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