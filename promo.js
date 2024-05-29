// variables
let corteCabello = 5000;
let marcadeBarbaBigote = 4000;
let limpiezaFacial = 2000;
let esteticaTotal = 8000;
let montoFinal = 0;
let descuentoSemana = 0;
let descuentoMeses = 0;
let descuentoRepeticiones = 0;
let trabajo = 0;
let cantidadServiciosMes = 0;
let cantidadMeses = 0;
let totalFinal = 0;
let montoDescRepeticiones = 0;
let montoDescSemana = 0;
let montoDescMeses = 0;


//elementos del dom
const servicio = document.getElementById('servicio');
const repeticiones = document.getElementById('repeticion');
const diaSemana = document.getElementById('diaSemana');
const meses = document.getElementById('meses');
const precioCorte = document.getElementById('corte');
const precioBarba = document.getElementById('barba');
const precioLimpieza = document.getElementById('limpieza');
const precioTotal = document.getElementById('total');
const resumen = document.getElementById('resumen');
const pago = document.getElementById('pago');
const borrarSelect = document.getElementById('borrarSelect');
const desSemana = document.getElementById('desSemana');
const desMeses = document.getElementById('desMeses');
const totalDesc = document.getElementById('totalDesc');

//modificacion precios en el dom
precioCorte.innerText = "$" + corteCabello;
precioBarba.innerText = "$" + marcadeBarbaBigote;
precioLimpieza.innerText = "$" + limpiezaFacial;
precioTotal.innerText = "$" + esteticaTotal;

resumen.addEventListener('click', (event) => {
    event.preventDefault();
    calcularservicio();
    //calculo descuentos
    function calcularservicio() {



        //determinacion descuentos
        switch (repeticiones.value) {
            case "unaVez":
                descuentoRepeticiones = 0;
                cantidadServiciosMes = 1
                break;
            case "dosVeces":
                descuentoRepeticiones = 0.02;
                cantidadServiciosMes = 2
                break;
            case "todoMes":
                descuentoRepeticiones = 0.05;
                cantidadServiciosMes = 4
                break;
            default:
                break;
        }
        switch (diaSemana.value) {
            case "lunes":
                descuentoSemana = 0.2;
                break;
            case "martes":
                descuentoSemana = 0.2;
                break;
            case "miercoles":
                descuentoSemana = 0.2;
                break;
            case "jueves":
                descuentoSemana = 0.1;
                break;
            case "viernes":
                descuentoSemana = 0;
                break;
            case "sabado":
                descuentoSemana = 0;

            default:
                break;
        }
        switch (meses.value) {
            case "1mes":
                descuentoMeses = 0;
                cantidadMeses = 1;
                break;
            case "2meses":
                descuentoMeses = 0.05;
                cantidadMeses = 2;
                break;
            case "3meses":
                descuentoMeses = 0.1;
                cantidadMeses = 3;
                break;
            default:
                break;
        }

        //trabajo seleccionado
        switch (servicio.value) {
            case "corte":
                trabajo = corteCabello;
                break;
            case "retoque":
                trabajo = marcadeBarbaBigote;
                break
            case "limpieza":
                trabajo = limpiezaFacial;
                break;
            case "total":
                trabajo = esteticaTotal;
                break;
            default:
                break;
        }

        montoFinal = (cantidadServiciosMes * cantidadMeses) * trabajo;
        if (montoFinal !== 0) {
            pago.style.display = 'block'
            pago.innerHTML = 'Total a pagar: $' + montoFinal;
        }
        montoDescSemana = montoFinal * descuentoSemana;
        if (montoDescSemana !== 0) {
            desSemana.style.display = 'block'
            desSemana.innerHTML = 'Descuento por dia de semana: $' + montoDescSemana
        }
        montoDescMeses = montoFinal * descuentoMeses;
        if (montoDescMeses !== 0) {
            desMeses.style.display = 'block'
            desMeses.innerHTML = 'Descuento por cantidad de meses $' + montoDescMeses
        }
        totalFinal = montoFinal - (montoDescSemana + montoDescMeses);
        if (montoFinal !== 0 && totalFinal !== 0) {
            totalDesc.style.display = 'block'
            totalDesc.innerHTML = 'Monto ha pagar con los descuentos <span style="color:red">$' + totalFinal + ' </span>';
        }
    }
})

borrarSelect.addEventListener('click', () => {
    pago.style.display = 'none';
    desSemana.style.display = 'none';
    desMeses.style.display = 'none';
    totalDesc.style.display = 'none';
    montoFinal = 0;
    montoDescSemana = 0;
    montoDescMeses = 0;
    totalFinal = 0;
    descuentoRepeticiones = 0;
    cantidadServiciosMes = 0;
    descuentoSemana = 0;
    descuentoMeses = 0;
    cantidadMeses = 0;
    trabajo = 0;
})
