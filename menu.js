export function makeMenu(p, setScene, currentScene) {
    return {
        draw() {
            p.background("lightblue");
        },
        button() {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            let div = document.createElement("div");
            div.id = "menu_button";
            div.className = "button";
            document.addEventListener("click", () => {
                if (currentScene() == "menu") {
                    div.classList.add("unclickable");
                    div.classList.add("hide");
                    setScene("game");
                }
            })
            document.body.appendChild(div);
        }
    }
}