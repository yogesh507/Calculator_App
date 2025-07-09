let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = '';

button.forEach(element => {
    element.addEventListener('click' , (b) => {
        if(b.target.innerText == '='){
            string = String(eval(string));
            input.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = '';
            input.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0 , string.length - 1);
            input.value = string;
        }
        else if(b.target.id == 'plusminus'){
            string = String(-eval(string));
            input.value = string;
        }
        else{
            string += b.target.innerText;
            input.value = string;
        }
        
    })
})

