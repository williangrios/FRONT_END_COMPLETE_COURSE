
function alerta(){
    alert('ola amigo');
}

//executes at x times
let x = setInterval(() => {
   alerta() ;
}, 5000);


//to clear
//clearInterval(x);