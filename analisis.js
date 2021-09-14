//Helpers
function esPar(numero){
    return(numero % 2 === 0);
}

function calcularMedia(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    
    const promedio = sumaLista / lista.length;

    return promedio;
}



//Mediana General

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);
const salariosColSorted = salariosCol.sort(
    function(SalaryA,SalaryB){
        return SalaryA -  SalaryB;
    }
);


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);


    if (esPar(lista.length)){
        const persona1 = lista[mitad-1]
        const persona2 = lista[mitad]
        const mediana = calcularMedia([persona1, persona2])
        return mediana
    } else{
        const mediana = lista[mitad];
        return mediana;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//Mediana top 10%
const spliceStart = (salariosColSorted.length*90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10)


console.log(
    {medianaGeneralCol,
    medianaTop10Col
});