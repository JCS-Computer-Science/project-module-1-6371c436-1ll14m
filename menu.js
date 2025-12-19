export function makeMenu(p, setScene, setMode) {
    return {
        setup() {
            let title = document.createElement("div");
            title.id = "title";
            title.innerHTML = "Click What?";
            document.body.appendChild(title);
            let modebtn = document.createElement("div");
            modebtn.id = "mode_menu";
            modebtn.innerHTML = "Play";
            modebtn.className = "button";
            modebtn.classList.add("borderStyle");
            modebtn.addEventListener("click", () => {
                modebtn.remove();
                for (let i=1; i<=3; i++) {
                    let div = document.createElement("div");
                    div.id = `mode${i}`;
                    if (div.id == "mode1") {
                        div.innerHTML = "Easy";
                    } else if (div.id == "mode2") {
                        div.innerHTML = "Medium";
                    } else if (div.id == "mode3") {
                        div.innerHTML = "Hard";
                    }
                    div.className = "button";
                    div.classList.add("borderStyle");
                    div.addEventListener("click", () => {
                        title.remove();
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