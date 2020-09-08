
const textPregunta = document.getElementById("inputPreg");
const votacion = document.getElementById("divVotacion");

const botones = document.getElementById("grupoBotones");
const resultados = document.getElementById("resultados");
const resTotal = document.getElementById("total");

const favor = document.getElementById("btnFavor");
const contra = document.getElementById("btnContra");
const abstencion = document.getElementById("btnAbstencion");
const terminar = document.getElementById("btnTerminar");

const contFav = document.getElementById("contFavor");
const contContr = document.getElementById("contContra");
const contAbst = document.getElementById("contAbst");

const barFav = document.getElementById("barraFav");
const barContr = document.getElementById("barraContr");
const barAbst = document.getElementById("barraAbst");

// Expresión regular
const patern = /^[a-zA-ZÁ-ÿ0-9\s¿?]{5,100}$/

// Instancia de clase pregunta
const pregunta = new Pregunta();

function eventListener(){
    document.getElementById("btnPregunta").addEventListener("click", capturarPregunta);
    
    favor.addEventListener("click",aumentaContadores);
    contra.addEventListener("click",aumentaContadores);
    abstencion.addEventListener("click",aumentaContadores);

    terminar.addEventListener("click",terminarVotos);
}

eventListener();

function capturarPregunta(){
    if(patern.test(textPregunta.value)){
        pregunta.guardarPregunta(textPregunta.value);
        votacion.style.display = "";
        document.getElementById("textPregunta").textContent = pregunta.pregunta;
    }
}

function aumentaContadores(event) {
    pregunta.aumentaContador(event.target.value);
}

function terminarVotos(){
    let fav = pregunta.contFavor;
    let contr = pregunta.contContra;
    let abst = pregunta.contAbst;
    let total = fav + contr + abst;

    contFav.innerText = fav;
    contContr.innerText = contr;
    contAbst.innerText = abst;
    resTotal.innerText = `Total: ${total}`;

    barFav.style.width = `${(fav * 100)/total}%`;
    barContr.style.width = `${(contr * 100)/total}%`;
    barAbst.style.width = `${(abst * 100)/total}%`;

    botones.style.display = "none";
    resultados.style.display = "";
}