function obtiene_categoria() {
    // determinamos la categoría elegida
}

function calcula_importe() {
    // calculamos el descuento a partir de la categoria
}

const btn = document.getElementById('calcularTotal');
btn.addEventListener('click', calcTotal);
const btnBorrar = document.getElementById('borrarForm');
btnBorrar.addEventListener('click', borrarForm);



function calcTotal() {

    if (validarFaltanDatos()){
        alert('Debe Completar correctamente los campos del formulario'); 
        return 'Error';
    }
    const valorTicket = 200;
    const cant = document.getElementById('cantidadTickets');
    const cate = document.getElementById('categoriaTickets');
    const totalImprimir = document.getElementById('parrafoTotal');let descuento = 1
    let cantidad = 0
    let total = 0;
    cantidad = (cant.value > 0) ? cant.value : 0;    
    descuento = (cate.value > 0) ? cate.value : 1;
    total = cantidad * valorTicket * descuento;

    totalImprimir.innerText = 'Total a Pagar: $ ' + total;
}

function borrarForm(){
    document.getElementById("formTickets").reset();
    const totalImprimir = document.getElementById('parrafoTotal');let descuento = 1
    totalImprimir.innerText = 'Total a Pagar: $ ';
    
}

function validarFaltanDatos(){
    let hayError = false;
    hayError = validarNombre();
    hayError = validarApellido();
    hayError = validarMail();
    hayError = validarCantidad();
    return hayError;
}

function validarCantidad(){
    const cant = document.getElementById('cantidadTickets');
    if (cant.value==''){
        return true;
    }
    if (isNaN(cant.value)){
        alert('La cantidad debe ser numerica')
        return true;
    }
}

function validarMail(){
    const mail = document.getElementById('Email');
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validEmail.test(mail.value) ){
		return true;
	}else{
		alert('El Email no es valido');
		return false;
	}

    if(mail.value==''){return true;}
}

function validarNombre(){
    const nombre = document.getElementById('Nombre');
    if(nombre.value==''){return true;}
}

function validarApellido(){
    const apellido = document.getElementById('Apellido');
    if(apellido.value==''){return true;}
}