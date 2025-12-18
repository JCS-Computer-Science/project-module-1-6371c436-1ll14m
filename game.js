export function makeGame(p, setScene, currentMode) {
    return {
        easy:["red", "blue", "green"],
        medium:["red", "blue", "green", "purple"],
        hard:["red", "blue", "green", "purple", "yellow"],
        bar: null,
        easyRules: ["Only Red Tiles", "Only Blue Tiles", "Only Green Tiles"],
        mediumRules: ["Only Odd Tiles", "Only Even Tiles", "Only Red Even Tiles", "Only Blue Even Tiles", "Only Green Even Tiles", "Only Purple Even Tiles", "Only Red Odd Tiles", "Only Blue Odd Tiles", "Only Green Odd Tiles", "Only Purple Odd Tiles"],
        hardRules: ["Only Odd Tiles", "Only Even Tiles", "Only Red Even Tiles", "Only Blue Even Tiles", "Only Green Even Tiles", "Only Purple Even Tiles", "Only Yellow Even Tiles", "Only Red Odd Tiles", "Only Blue Odd Tiles", "Only Green Odd Tiles", "Only Purple Odd Tiles", "Only Yellow Odd Tiles",
            "Red or Blue Tiles", "Red or Green Tiles", "Red or Purple Tiles", "Red or Yellow Tiles", "Blue or Green Tiles", "Blue or Purple Tiles", "Blue or Yellow Tiles", "Green or Purple Tiles", "Green or Yellow Tiles", "Purple or Yellow Tiles"
        ],
        // easyRules: ["Only Red Tiles", "Only Blue Tiles"],
        // mediumRules: ["Only Odd Tiles", "Only Even Tiles"],
        // hardRules: ["Only Even Green Tiles", "Only Odd Purple Tiles"],
        buttons: [],
        pointsBox: null,
        points: 0,
        frame: 0,
        holder: [36, 24, 18],
        currentNum: 0,
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
            for (let a = 0; a < this.buttons.length; a++) {
                const btn = document.getElementById(this.buttons[a].id);
                btn.addEventListener("click", () => {
                    let rule = this.bar.innerHTML;
                    if ((rule === "Only Red Tiles" && this.buttons[a].color === 0) ||
                    (rule === "Only Blue Tiles" && this.buttons[a].color === 1) ||
                    (rule === "Only Green Tiles" && this.buttons[a].color === 2) ||
                    (rule === "Only Odd Tiles" && this.buttons[a].num%2==1) ||
                    (rule === "Only Even Tiles" && this.buttons[a].num%2==0) ||
                    (rule === "Only Red Even Tiles" && this.buttons[a].num%2==0 && this.buttons[a].color === 0) ||
                    (rule === "Only Blue Even Tiles" && this.buttons[a].num%2==0 && this.buttons[a].color === 1) ||
                    (rule === "Only Green Even Tiles" && this.buttons[a].num%2==0 && this.buttons[a].color === 2) ||
                    (rule === "Only Purple Even Tiles" && this.buttons[a].num%2==0 && this.buttons[a].color === 3) ||
                    (rule === "Only Yellow Even Tiles" && this.buttons[a].num%2==0 && this.buttons[a].color === 4) ||
                    (rule === "Only Red Odd Tiles" && this.buttons[a].num%2==1 && this.buttons[a].color === 0) ||
                    (rule === "Only Blue Odd Tiles" && this.buttons[a].num%2==1 && this.buttons[a].color === 1) ||
                    (rule === "Only Green Odd Tiles" && this.buttons[a].num%2==1 && this.buttons[a].color === 2) ||
                    (rule === "Only Purple Odd Tiles" && this.buttons[a].num%2==1 && this.buttons[a].color === 3) ||
                    (rule === "Only Yellow Odd Tiles" && this.buttons[a].num%2==1 && this.buttons[a].color === 4) ||
                    (rule === "Red or Blue Tiles" && (this.buttons[a].color === 0 || this.buttons[a].color === 1)) ||
                    (rule === "Red or Green Tiles" && (this.buttons[a].color === 0 || this.buttons[a].color === 2)) ||
                    (rule === "Red or Purple Tiles" && (this.buttons[a].color === 0 || this.buttons[a].color === 3)) ||
                    (rule === "Red or Yellow Tiles" && (this.buttons[a].color === 0 || this.buttons[a].color === 4)) ||
                    (rule === "Blue or Green Tiles" && (this.buttons[a].color === 1 || this.buttons[a].color === 2)) ||
                    (rule === "Blue or Purple Tiles" && (this.buttons[a].color === 1 || this.buttons[a].color === 3)) ||
                    (rule === "Blue or Yellow Tiles" && (this.buttons[a].color === 1 || this.buttons[a].color === 4)) ||
                    (rule === "Green or Purple Tiles" && (this.buttons[a].color === 2 || this.buttons[a].color === 3)) ||
                    (rule === "Green or Yellow Tiles" && (this.buttons[a].color === 2 || this.buttons[a].color === 4)) ||
                    (rule === "Purple or Yellow Tiles" && (this.buttons[a].color === 3 || this.buttons[a].color === 4))) {
                        this.points += 1;
                        this.buttons[a].color = Math.floor(p.random(0, this.easy.length));
                        btn.style.backgroundColor = this.easy[this.buttons[a].color];
                        this.buttons[a].num = Math.floor(p.random(0, 5));
                        btn.innerHTML = this.buttons[a].num;
                    }
                    // You can add more conditions for other rules
                });
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
            p.frameRate(24);
        },
        draw() {
            p.clear();
            this.frame++;
            p.background("lightblue");
            this.pointsBox.innerHTML = `${this.points}`;
            let num;
            if (currentMode() == "1") {
                if (this.frame <= this.holder[0]) {
                    num = this.currentNum;
                } else {
                    this.frame=0;
                    num = Math.floor(p.random(0, this.easyRules.length));
                    this.currentNum = num;
                }
                this.bar.innerHTML = `${this.easyRules[num]}`
            } else if (currentMode() == "2") {
                if (this.frame <= this.holder[0]) {
                    num = this.currentNum;
                } else {
                    this.frame=0;
                    num = Math.floor(p.random(0, this.mediumRules.length));
                    this.currentNum = num;
                }
                this.bar.innerHTML = `${this.mediumRules[num]}`
            } else if (currentMode() == "3") {
                if (this.frame <= this.holder[0]) {
                    num = this.currentNum;
                } else {
                    this.frame=0;
                    num = Math.floor(p.random(0, this.hardRules.length));
                    this.currentNum = num;
                }
                this.bar.innerHTML = `${this.hardRules[num]}`
            }
        },
    }
}
