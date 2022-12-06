function Calcular(op){
    
    var valor1 = document.getElementById("n1");
    var valor2 = document.getElementById("n2");
    var total = document.getElementById("total");
    var op, resultado;

    if(op == "somar"){
        resultado = Number(valor1.value) + Number(valor2.value);
        total.innerHTML = resultado;
    }
    else if(op == "subtrair"){
        resultado = Number(valor1.value) -  Number(valor2.value);
        total.innerHTML = resultado;
    }
    else if(op == "dividir"){
        resultado = Number(valor1.value) /  Number(valor2.value);
        total.innerHTML = resultado;
    }
    else if(op == "multiplicar"){
        resultado = Number(valor1.value) *  Number(valor2.value);
        total.innerHTML = resultado;
    }
    
}

