//result variable to show result of operation
let result = "0";
//first variable that hold any number input
let resultA = "";
//operand variable that hold operand
let operand = "";

//event bubbling for calculator with if else for different operations no edge cases specified
//in assignment.
document.querySelector('.main-container').addEventListener('click', function(event) {
    resultA += event.target.innerText;
    document.getElementById('result').textContent = resultA
    if(event.target.innerText === '+') {
        result = resultA;
        resultA = '';
        operand = '+';
    } else if (event.target.innerText === '-') {
        result = resultA;
        resultA = '';
        operand = '-';
    } else if (event.target.innerText === '*') {
        result = resultA;
        resultA = '';
        operand = '*';
    } else if (event.target.innerText === '/') {
        result = resultA;
        resultA = '';
        operand = '/';
    }
    else if (event.target.innerText === 'C') {
        resultA = resultA.substring(0, resultA.length - 1);
        resultA = '0';
        document.getElementById('result').textContent = resultA
        result = '';
        operand = '';
    }
    else if (event.target.innerText === '=' && operand === '+') {
        result = parseInt(resultA) + parseInt(result)
        document.getElementById('result').textContent = result
        resultA = resultA.substring(0, resultA.length - 1);
        console.log(result)
    }     else if (event.target.innerText === '=' && operand === '-') {
        result = parseInt(result) - parseInt(resultA)
        document.getElementById('result').textContent = result
        resultA = resultA.substring(0, resultA.length - 1);
        console.log(result)
    }     else if (event.target.innerText === '=' && operand === '*') {
        result = parseInt(resultA) * parseInt(result)
        document.getElementById('result').textContent = result
        resultA = resultA.substring(0, resultA.length - 1);
        console.log(result)
    }     else if (event.target.innerText === '=' && operand === '/') {
        result = parseInt(result) / parseInt(resultA)
        document.getElementById('result').textContent = result
        resultA = resultA.substring(0, resultA.length - 1);
        console.log(result)
    }     else if (event.target.innerText === '<=') {
        resultA = resultA.substring(0, resultA.length - 3);
        document.getElementById('result').textContent = resultA
        console.log(result)
    }
})