function obtiene_categoria() {
    // determinamos la categoría elegida
}

function calcula_importe() {
    // calculamos el descuento a partir de la categoria
}

const btn = document.getElementById('calcularTotal');
btn.addEventListener('click', calcTotal);


function calcTotal() {

    const valorTicket = 200;
    const cant = document.getElementById('cantidadTickets');
    const cate = document.getElementById('categoriaTickets');
    const totalImprimir = document.getElementById('parrafoTotal');
    
    
    let descuento = 1
    let cantidad = 0
    let total = 0;
    cantidad = (cant.value > 0) ? cant.value : 0;    
    descuento = (cate.value > 0) ? cate.value : 1;
    total = cantidad * valorTicket * descuento;
    
    totalImprimir.innerText = 'Total a Pagar: $ ' + total;
    }