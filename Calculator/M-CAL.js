let number = document.querySelectorAll(".number");
let disp = document.querySelector("#disp");
number.forEach(number => {
    number.addEventListener("click", () => {
        disp.value += number.value;
    });
});

let Operator = document.querySelectorAll(".Operator");
Operator.forEach(Operator => {
    Operator.addEventListener("click", () => {
        operators(Operator.value);
    });
});

function operators(Operators) {
    const operators = ['+', '-', '*', '/', '%'];
    
    if (Operators === 'AC') {
        disp.value = '';
    } else if (Operators === 'DE') {
        disp.value = disp.value.substring(0, disp.value.length - 1);
    } else if (Operators === '=') {
        try {
            disp.value = eval(disp.value);
        } catch (error) {
            disp.value = 0;
        }
    } else {
        const lastChar = disp.value.slice(-1);
        if (!operators.includes(lastChar) || disp.value === '') {
            disp.value += Operators;
        }
    }
}
// Disable right-click context menu 
document.addEventListener('contextmenu', function(e) { 
    e.preventDefault();  
}); 
// Disable text selection on mouse events 
document.addEventListener('mousedown', function(e) { 
    e.preventDefault(); 
}); 
// Disable text selection on keyboard events 
document.addEventListener('keydown', function(e) { 
    // Prevent Ctrl+A (Select All) 
    if (e.ctrlKey && e.key === 'a') { 
        e.preventDefault(); 
    } 
});




// let number = document.querySelectorAll(".number");
// let disp = document.querySelector("#disp");
// number.forEach(number =>{
//     number.addEventListener("click",() =>{
//         disp.value += number.value;
//     });
// });


// let O = document.querySelectorAll(".O");
// O.forEach(O =>{
//     O.addEventListener("click",() =>{
//         operators(O.value);
//     });
// });
// function operators (OO){
//     if (OO == 'AC'){
//         disp.value = '';
//     } else if (OO == '+'){
//         disp.value += '+';
//     } else if (OO == '-'){
//         disp.value += '-';
//     }else if (OO == '*'){
//         disp.value += '*';
//     }else if (OO == '/'){
//         disp.value += '/';
//     }else if (OO == '%'){
//         disp.value += '%';
//     }else if (OO == 'DE'){
//         disp.value = disp.value.substring(0, disp.value.length - 1);
//     }else if (OO == '='){
//         disp.value = eval(disp.value);
//     }
// }