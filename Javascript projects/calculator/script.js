let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let inputVal = '';
let arr = Array.from(buttons)      // create arrays of buttons 

arr.forEach( button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if(buttonText == 'AC'){
            inputVal = '';
            input.value = inputVal;
        }
        else if(buttonText == '='){
            input.value = eval(inputVal);
        }
        else if(buttonText == 'D'){
            inputVal = inputVal.slice(0, -1);
            input.value = inputVal;
        }
        else{
            inputVal += buttonText;
            input.value = inputVal;
        }
    })
})


