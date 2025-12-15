export function makeMenu(p, setScene, setMode) {
    return {
        setup() {
            let modebtn = document.createElement("div");
            modebtn.id = "mode_menu";
            modebtn.className = "button";
            modebtn.addEventListener("click", () => {
                modebtn.remove();
                for (let i=1; i<=3; i++) {
                    let div = document.createElement("div");
                    div.id = `mode${i}`;
                    div.className = "button";
                    div.addEventListener("click", () => {
                        document.querySelectorAll(".button").forEach(el => el.remove());
                        setMode(`${i}`);
                        setScene("game");
                    })
                    document.body.appendChild(div);

                }
            });
            document.body.appendChild(modebtn);
        },
        draw() {
            p.background("lightblue");
        },
        modes() {

        }
    }
}