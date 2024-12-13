let rc = document.querySelector("#rock");
let ppr = document.querySelector("#paper");
let scr = document.querySelector("#scissor");
let res = document.querySelector("#res");
let rept = document.querySelector("#rept");
let pt = document.querySelector("#pt");
let btn = document.querySelector("#rst");
let rn,pn,sn,mr = 0;
let y = 0;
let m = 0;
    res.innerText = "-"
    rept.innerText ="YOURS:0 MATHS:0"
    pt.innerText = "YOUR SCORE:0 MATH SCORE:0"
function rndm(){
    mr = Math.floor(Math.random()*3)+1;
}
rc.addEventListener("click", () =>{
    // console.log("rock");
    rndm();
    rn = 3;
    if (rn == mr){
        res.innerText = "DRAW"
        rept.innerText =`YOURS:${names(3)} MATHS:${names(mr)}`
    }else {
        res.innerText = "YOU WON"
        rept.innerText =`YOURS:${names(3)} MATHS:${names(mr)}`
        y++
    }
    pt.innerText = `YOUR SCORE:${y} MATH SCORE:${m}`
})
ppr.addEventListener("click", () =>{
    // console.log("paper");
    rndm();
    pn = 1;
    if (pn < mr){
        res.innerText = "MATH WON"
        rept.innerText =`YOURS:${names(1)} MATHS:${names(mr)}`
        m++
    }else if (pn == mr){
        res.innerText = "DRAW"
        rept.innerText =`YOURS:${names(1)} MATHS:${names(mr)}`
    }else {
        res.innerText = "YOU WON"
        rept.innerText =`YOURS:${names(1)} MATHS:${names(mr)}`
        y++
    }
    pt.innerText = `YOUR SCORE:${y} MATH SCORE:${m}`
})
scr.addEventListener("click", () =>{
    // console.log("scissor");
    rndm();
    sn = 2;
    if (sn < mr){
        res.innerText = "MATH WON"
        rept.innerText =`YOURS:${names(2)} MATHS:${names(mr)}`
        m++
    }else if (sn == mr){
        res.innerText = "DRAW"
        rept.innerText =`YOURS:${names(2)} MATHS:${names(mr)}`
    }else {
        res.innerText = "YOU WON"
        rept.innerText =`YOURS:${names(2)} MATHS:${names(mr)}`
        y++
    }
        pt.innerText = `YOUR SCORE:${y} MATH SCORE:${m}`
})
const names = (a) =>{
    if (a == 1) {
        return '🖐🏻'
    } else if (a == 2) {
        return '✌🏻'
    } else {
        return '✊🏻'
    }
}
btn.addEventListener("click",() =>{
    rn,pn,sn,mr = 0;
    y = 0;
    m = 0;
    res.innerText = "-"
    rept.innerText ="YOURS:0 MATHS:0"
    pt.innerText = "YOUR SCORE:0 MATH SCORE:0"
})

