class Pregunta {
    // Propiedades
    pregunta = "";
    contFavor = 0;
    contContra = 0;
    contAbst = 0;

    guardarPregunta(texto){
        this.pregunta = texto;
        console.log("llego el texto: " + this.pregunta);
    }

    aumentaContador(valor){
        console.log("Llegó un valor " + valor);
        switch(valor){
            case "1": this.contFavor++;
                break;
            case "2": this.contContra++;
                break;
            case "3": this.contAbst++;
                break;
        }
    }
}