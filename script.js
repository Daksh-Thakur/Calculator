var previousOperandText = document.querySelector('.previous-operand')
var currentOperandText = document.querySelector('.current-operand')
const button = document.querySelector('button')

function fn(value){
currentOperandText.innerText = currentOperandText.innerText + value;
}

let operation;
function op(value){
    if(operation !== ''){
        cal()
    }
    operation = value
    previousOperandText.innerText = currentOperandText.innerText + operation;
    currentOperandText.innerText = ''   
}
function clr(){
    previousOperandText.innerText = ''
    currentOperandText.innerText = ''
}
function rem(){
    currentOperandText.innerText = currentOperandText.innerText.slice(0,-1)
}
function cal(){
    // let currentVal = parseFloat(currentOperandText.innerText)
    // let previousVal = parseFloat(previousOperandText.innerText)
    // if(!previousVal || !currentVal )return
    // switch (operation){
    //     case '+':
    //         currentOperandText.innerText = currentVal + previousVal
    //         previousOperandText.innerText = ''
    //         break;
    //     case '-':
    //         currentOperandText.innerText = previousVal -currentVal 
    //         previousOperandText.innerText = ''
    //         break;
    //     case '*':
    //         currentOperandText.innerText = currentVal * previousVal
    //         previousOperandText.innerText = ''
    //         break;
    //     case '/':
    //         currentOperandText.innerText = previousVal / currentVal
    //         previousOperandText.innerText = ''  
    //         break;  
    // }
    let a = previousOperandText.innerText + currentOperandText.innerText
    currentOperandText.innerText= eval(a)
    previousOperandText.innerText = " "

}


