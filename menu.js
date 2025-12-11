export function makeMenu(p, setScene, currentScene, click) {
    return {
        setup() {

        },
        draw() {
            p.background("lightblue");
        },
        button() {
            let div = document.createElement("div");
            div.id = "menu_button";
            div.className = "button";
            document.addEventListener("click", () => {
                console.log(click())
                console.log("X: "+p.mouseX+", Y: "+p.mouseY);
                let rect = div.getBoundingClientRect();
                console.log("Div Loc: "+document.elementsFromPoint((rect.left + rect.width), (rect.top + rect.height)));
                if (click().some( el => el.id==="menu_button")) {
                    if (currentScene() == "menu") {
                        div.classList.add("unclickable");
                        div.classList.add("hide");
                        setScene("game");
                    }
                }
            })
            document.body.appendChild(div);
        }
    }
}