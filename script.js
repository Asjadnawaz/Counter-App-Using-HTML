let timer = document.querySelector('#timer');

function Increament(){
    timer.innerHTML = eval(timer.innerHTML + '+ 1');
}

function Reset(){
    timer.innerHTML = 0;
}

function Decreament(){
    if(timer.innerHTML > 0) {
    timer.innerHTML = eval(timer.innerHTML + '- 1');
    } else { 
        return;
    }
}