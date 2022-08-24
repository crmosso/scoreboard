let hbtn1 = document.getElementById("home-score");
let gbtn1 = document.getElementById("guest-score");
let timer = document.getElementById("horaEl");
let count = 0;
momentoActual = new Date();
hora = momentoActual.getHours();
minuto = momentoActual.getMinutes();
segundo = momentoActual.getSeconds();

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    timer.textContent = horaImprimible;

    setTimeout("mueveReloj()",1000)
}



//Agregar 1 punto al marcador de local
function addEl1(){
    count += 1;
    hbtn1.textContent = count;
}

//Agregar 2 punto al marcador de local
function addEl2(){
    count += 2;
    hbtn1.textContent = count;
}

//Agregar 3 punto al marcador de local
function addEl3(){
    count += 3;
    hbtn1.textContent = count;
}

//Reset Anfitrion
function resetElh(){
    count = 0;
    hbtn1.textContent = count;
}


//Agregar 1 punto al marcador de visitante
function addEl1g(){
    count += 1;
    gbtn1.textContent = count;
}

//Agregar 2 punto al marcador de visitante
function addEl2g(){
    count += 2;
    gbtn1.textContent = count;
}

//Agregar 3 punto al marcador de visitante
function addEl3g(){
    count += 3;
    gbtn1.textContent = count;
}

//Reset Guest
function resetElg(){
    count = 0;
    gbtn1.textContent = count;
}

