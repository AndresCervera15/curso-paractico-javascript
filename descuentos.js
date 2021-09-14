

function calcularPrecioConDescuento(precio, descuento){

    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento)/100;
     
    return precioConDescuento


}

function PriceDiscount(){
    const inputprecio = Number(document.getElementById("precio").value);
    const inputdescuento = Number(document.getElementById("descuento").value);

    const precioFinal = calcularPrecioConDescuento(inputprecio, inputdescuento);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento es: $"+precioFinal;
}






