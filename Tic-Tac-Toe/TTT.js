let btns = document.querySelectorAll(".btns");
let txt = document.getElementById("win");
let rst = document.querySelector("#set");
let turn = 'true';
let drw = 0;
//possibilities to win
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const winner = () =>{
    //to check the win by receiving
    for (let i of win){
        let pos1 = btns[i[0]].innerText;
        let pos2 = btns[i[1]].innerText;
        let pos3 = btns[i[2]].innerText;
        // we need 3 non empty responce
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            //all three elements are same
            if (pos1 === pos2 && pos2 === pos3){
                show(pos1);
            }
            //to check the draw of match
            if (drw == 9){
                if(txt.innerText == false){
                    txt.innerText = "DRAW"
                }
            }
        }
    }
}
//to print winner
function show(pos1){
    txt.innerText = `${pos1} IS WINNER`
    for (let i of btns){
        i.disabled = true
    }
}
//receving responce of buttons one by one
btns.forEach((btn) =>{
     btn.addEventListener("click",() =>{
        drw +=1;
        if (turn) {
            btn.innerText = 'O';
            turn = false;
        } else {
            btn.innerText = 'X'
            turn = true;
        }
        btn.disabled = true;
        winner();
     });
});
//reset button
rst.addEventListener("click",() =>{
    turn = 'true';
    drw = 0;
    for ( let i of btns){
        i.disabled = false
        i.innerText = ''
    }
    txt.innerText = ''
})
