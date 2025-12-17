export function makeGame(p, setScene, currentMode) {
    return {
        easy:["red", "blue", "green"],
        medium:["red", "blue", "green", "purple"],
        hard:["red", "blue", "green", "purple", "yellow"],
        bar: null,
        easyRules: ["Only Red Tiles", "Only Blue Tiles"],
        mediumRules: ["Only Odd Tiles"],
        hardRules: ["Only Even Green Tiles"],
        // easyRules: ["Only Red Tiles", "Only Blue Tiles"],
        // mediumRules: ["Only Odd Tiles", "Only Even Tiles"],
        // hardRules: ["Only Even Green Tiles", "Only Odd Purple Tiles"],
        buttons: [],
        pointsBox: null,
        points: 0,
        frame: 0,
        holder: [144, 72, 24],
        setup(x, y, m, t) {
            for (let a=1; a<=x; a++) {
                for (let b=1; b<=y; b++) {
                    let div = document.createElement("div");
                    div.id = `${a},${b}`;
                    div.className = "game_buttons";
                    div.classList.add("button");
                    div.style.position = "absolute";
                    if (currentMode() == "1") {
                        let fontsize = Math.floor(p.random(30, 70));
                        div.style.fontSize = `${fontsize}px`;
                        let color = Math.floor(p.random(0, this.easy.length));
                        div.style.backgroundColor = this.easy[color];
                        let num = Math.floor(p.random(0, 5));
                        div.innerHTML = num;
                        this.buttons.push({id :div.id, color: color, num: num});
                    } else if (currentMode() == "2") {
                        let fontsize = Math.floor(p.random(20, 50));
                        div.style.fontSize = `${fontsize}px`;
                        let color = Math.floor(p.random(0, this.medium.length));
                        div.style.backgroundColor = this.medium[color];
                        let num = Math.floor(p.random(0, 15));
                        div.innerHTML = num;
                        this.buttons.push({id :div.id, color: color, num: num});
                    } else if (currentMode() == "3") {
                        let fontsize = Math.floor(p.random(10, 30));
                        div.style.fontSize = `${fontsize}px`;
                        let color = Math.floor(p.random(0, this.hard.length));
                        div.style.backgroundColor = this.hard[color];
                        let num = Math.floor(p.random(0, 25));
                        div.innerHTML = num;
                        this.buttons.push({id :div.id, color: color, num: num});
                    }
                    div.style.top = `${((((1080-t)-((y+1)*m))/y)*(b-1))+(b*m)+t}px`;
                    // when y=2 & b=1, top=(1080-(1080/2)*(y+1-b))+m // top=0+m
                    // when y=2 & b=2, top=(1080-(1080/2)*(y+1-b))+m // top=540+m // I'm so smart muhehehe
                    // when y=3 & b=2, top=(1080-(1080/3)*(y+1-b))+m // top=360+m // I'm gonna leave these test things so you can see my thought process
                    // when y=3 & b=3, top=(1080-(1080/3)*(y+1-b))+m // top=720+m // These were test things that I would use to make the equation
                    // div.style.left = `${(1920-(1920/x)*(x+1-a))+m-(m-(m/a))}px`;
                    
                    // Pffftttttt - I appreciate the enthusiasmXD   
                    //Leaving the thought process actually helps a lot- thanks
                     //You *are* clever, our spacey theoretician.... now the real question is: before you drift too far into theoretical orbit when will your assignment be submitted hahah.
                    div.style.left = `${(((1920-((x+1)*m))/x)*(a-1))+(a*m)}px`;
                    // div.style.width = `${(1920/x)-((m/2)*(x+1))}px`;
                    div.style.width = `${(1920-((x+1)*m))/x}px`;
                    // when x=2 & a=1, width=(1920/x)-m //width=960-m
                    // when x=2 & a=2, width=(1920/x)-m //width=960-m-m
                    // when x=3 & a=2, width=(1920/x)-m //width=640-m
                    // when x=3 & a=3, width=(1920/x)-m //width=640-m-m = 540
                    // 1720/3 = 573.33333
                    // when x=2 & a=1, width=(1920-((x+1)*m))/x , left=(1920-(1920/a))+m // width=885, left=m
                    // when x=2 & a=2, width=(1920-((x+1)*m))/x , left=(((1920-((x+1)*m))/x)*(a-1))+(a*m) // width=885, left=985
                    // when x=3 & a=1, width=(1920-((x+1)*m))/x , left= // width=573.333333, left=m
                    // when x=3 & a=2, width=(1920-((x+1)*m))/x , left=(((1920-((x+1)*m))/x)*(a-1))+(a*m) // width=573.333333, left=673.333333
                    // when x=3 & a=3, width=(1920-((x+1)*m))/x , left=(((1920-((x+1)*m))/x)*(a-1))+(a*m) // width=573.333333, left=1296.666666
                    div.style.height = `${((1080-t)-((y+1)*m))/y}px`;
                    document.body.appendChild(div);
                }
            }
            let bar = document.createElement("div");
            bar.id = "game_bar";
            bar.style.height = `${t-m}px`;
            bar.style.width = `${1920-m*2}px`;
            bar.style.top = `${m}px`;
            bar.style.left = `${m}px`;
            this.bar = bar;
            document.body.appendChild(this.bar);
            console.log(this.buttons);
            let pointCount = document.createElement("div");
            pointCount.id = "point";
            this.pointsBox = pointCount;
            document.body.appendChild(this.pointsBox);
        },
        draw() {
            p.clear();
            this.frame++;
            console.log(this.frame);
            p.background("lightblue");
            this.pointsBox.innerHTML = `${this.points}`;
            let num;
            if (currentMode() == "1") {
                if (this.frame <= 4) {
                    console.log("frame is lower than holder");
                    num = Math.floor(p.random(0, this.easyRules.length));
                    this.frame=0;
                }
                this.bar.innerHTML = `${this.easyRules[num]}`
                if (this.bar.innerHTML == "Only Red Tiles") {
                    this.pointsUp(0);
                }
            } else if (currentMode() == "2") {
                num = Math.floor(p.random(0, this.mediumRules.length));
                this.bar.innerHTML = `${this.mediumRules[num]}`
            } else if (currentMode() == "3") {
                num = Math.floor(p.random(0, this.hardRules.length));
                this.bar.innerHTML = `${this.hardRules[num]}`
            }
        },
        pointsUp(c) {
            for (let a=0; a<this.buttons.length; a++) {
                if (this.buttons[a].color == c) {
                    document.getElementById(`${this.buttons[a].id}`).addEventListener("click", () => {
                        // console.log("clicked");
                        this.points+=1;
                    })
                }
            }
        }
    }
}
