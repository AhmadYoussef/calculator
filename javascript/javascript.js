// create var 
let firstNumber ='', secondNumber='' , oper='', result='';
let isFirstNumNotFinish = true;
let resultInner = document.getElementById('result');

// create an event Listener start 
let numbers =document.getElementsByClassName('num');
for(let i = 0; i< numbers.length ;i++){
    numbers[i].addEventListener('click', (e)=>{takeNumber(e)})
}
let operator = document.getElementsByClassName('operator');
for(let i = 0; i< operator.length ;i++){
    operator[i].addEventListener('click', (e)=>{takeOperator(e)})
}
document.getElementById('equal').addEventListener('click', equation);
document.getElementById('delete').addEventListener('click', deleteChar);
document.getElementById('nul').addEventListener('click', eraseAll);
// create an event Listener end 


function takeNumber(e){
    if(isFirstNumNotFinish){
        if(result != ''){
            result = '';
            resultInner.innerText = '';
        }
        firstNumber += e.target.innerText;
        resultInner.innerText += e.target.innerText;
    }else{
       secondNumber += e.target.innerText;
       resultInner.innerText += e.target.innerText;
    }
}

function takeOperator(e){
    if(firstNumber != '' && oper.length == 0 ){
        isFirstNumNotFinish = false;
        oper = e.target.innerText;
        resultInner.innerText += oper;
    }else if( firstNumber == '' && result != ''  && oper.length == 0){
        isFirstNumNotFinish = false;
        firstNumber = result;
        oper = e.target.innerText;
        resultInner.innerText += oper;
    }
}

function equation(){
    if(firstNumber != '' && secondNumber != ''){
        result = eval(firstNumber + oper +secondNumber);
        resultInner.innerText = result;
        firstNumber ='';
        secondNumber='';
        oper = '';
        isFirstNumNotFinish = true;
    }
}
function deleteChar(){
    if(result == ''){
        if(isFirstNumNotFinish && firstNumber != ''){
            firstNumber = firstNumber.slice(0,firstNumber.length -1);
            resultInner.innerHTML = resultInner.innerHTML.slice(0, resultInner.innerHTML.length-1);
        }else if(!(isFirstNumNotFinish) && secondNumber != ''){
            secondNumber = secondNumber.slice(0,secondNumber.length -1);
            resultInner.innerHTML = resultInner.innerHTML.slice(0, resultInner.innerHTML.length-1);
        }else if(!(isFirstNumNotFinish) && oper != ''){
            isFirstNumNotFinish = true;
            oper ='';
            resultInner.innerHTML = resultInner.innerHTML.slice(0, resultInner.innerHTML.length-1);
        }
    }else{
        if(oper == ''){
            result ='';
            resultInner.innerHTML = '';
            if(firstNumber != ''){
                firstNumber ='';
                isFirstNumNotFinish = true;
            }
        }else{
            if(secondNumber != ''){
                secondNumber = secondNumber.slice(0,secondNumber.length -1);
                resultInner.innerHTML = resultInner.innerHTML.slice(0, resultInner.innerHTML.length-1);
            }else{
                oper ='';
                resultInner.innerHTML = resultInner.innerHTML.slice(0, resultInner.innerHTML.length-1);
            }
        }
    }
}

function eraseAll(){
    firstNumber ='';
    secondNumber='';
    oper='';
    result='';
    isFirstNumNotFinish = true;
    resultInner.innerText = '';
}