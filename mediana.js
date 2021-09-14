function calcularMedia(lista){

        const sumaLista = lista.reduce(
            function(valorAcumulado=0, nuevoElemento){
                return valorAcumulado + nuevoElemento
            }
        );
        
        const promedio = sumaLista / lista.length;

        return promedio;
}

const lista1 = [
    900,
    100,
    600,
    200,
    500,
    800,
    
];
const ordenarLista = (lista) => {
    lista.sort(function (a,b) {
        return a - b;
    })
    return lista;
}
ordenarLista(lista1);

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(num){
    if (num % 2 === 0){
    return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];
    const promedio1y2 = calcularMedia([elemento1, elemento2]);
    mediana = promedio1y2;

} else{
    mediana = lista1[mitadLista1];
}
