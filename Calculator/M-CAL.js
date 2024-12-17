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
document.addEventListener('contextmenu', function(e) { 
    e.preventDefault();  
}); 
document.addEventListener('mousedown', function(e) { 
    e.preventDefault(); 
}); 
document.addEventListener('keydown', function(e) { 
    if (e.ctrlKey && e.key === 'a') { 
        e.preventDefault(); 
    } 
});

