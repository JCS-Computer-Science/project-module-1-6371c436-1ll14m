export function makeGame(p, setScene) {
    return {
        setup(x, y, m, t) {
            for (let a=1; a<=x; a++) {
                for (let b=1; b<=y; b++) {
                    let div = document.createElement("div");
                    div.id = `${a},${b}`;
                    div.className = "game_buttons";
                    div.classList.add("button");
                    div.style.position = "absolute";
                    div.style.top = `${((((1080-t)-((y+1)*m))/y)*(b-1))+(b*m)+t}px`;
                    // when y=2 & b=1, top=(1080-(1080/2)*(y+1-b))+m // top=0+m
                    // when y=2 & b=2, top=(1080-(1080/2)*(y+1-b))+m // top=540+m // I'm so smart muhehehe
                    // when y=3 & b=2, top=(1080-(1080/3)*(y+1-b))+m // top=360+m // I'm gonna leave these test things so you can see my thought process
                    // when y=3 & b=3, top=(1080-(1080/3)*(y+1-b))+m // top=720+m // These were test things that I would use to make the equation
                    // div.style.left = `${(1920-(1920/x)*(x+1-a))+m-(m-(m/a))}px`;
                    
                    // Pffftttttt - I appreciate the enthusiasmXD   
                    //Leaving the thought process actually helps a lot- thanks
                     //You *are* clever, spacey theoretician.... now the real question is: before you drift too far into theoretical orbit when will your assignment be submitted hahah.
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
        },
        draw() {
            p.clear();
            p.background("lightblue");
        },
    }
}
