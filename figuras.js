// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado){ 
return lado * 4;

}
function areaCuadrado(lado){  
    return lado * lado;
}
console.groupEnd();




// Código del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1,  lado2,  base) { 
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura)  {
    return (base * altura)/2;
}

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert('no lo se')
    }
}

console.groupEnd();




//Código del círculo
console.group("Círculos")

function diametroCirculo(radio) {
    return radio * 2;
}
const pi = Math.PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio){
    return (radio * radio)*pi;

}
console.groupEnd();





function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    
    const perimetro = perimetroCuadrado(input);
    alert("El perimetro del cuadrado es de: " + perimetro +"cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    
    const area = areaCuadrado(input);
    alert("El area del cuadrado es de: " +area + "cm²");

}

function calcularPerimetroTriangulo(){
const lado1 = Number(document.getElementById("lado1").value);
const lado2 = Number(document.getElementById("lado2").value);
const base = Number(document.getElementById("base").value);


const perimetrotriangulo = perimetroTriangulo(lado1,lado2,base);
alert("El perimetro del triangulo es de: " + perimetrotriangulo + "cm");

}

function calcularAreaTriangulo(){

    const base = Number(document.getElementById("base").value);
    const altura = Number(document.getElementById("altura").value);

    const area = areaTriangulo(base, altura);
    alert("El area del triangulo es de: "+area+"cm²")
}



function calcularPerimetroCirculo(){
    const radio = Number(document.getElementById("radioCirculo").value);
    const diametro = diametroCirculo(radio);
    const pi = Math.PI;
    const circunferencia = pi*diametro;
    alert("La circunferencia del circulo es: "+ circunferencia+ "cm")
}

function calcularAreaCirculo() {
    const radio = Number(document.getElementById("radioCirculo").value);
    const pi = Math.PI;
    const area = (radio*radio) * pi;
    alert("El area del circulo es de: "+area+"cm²")
}