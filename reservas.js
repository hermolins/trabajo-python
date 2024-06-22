//variables
let vNombre = false;
let vApellido = false;
let vTelefono = false;
let vEmail = false;
let vFecha = false;
let vDiaSemana = false;
let vTemprano = false;
let vTarde = false;

//captura datos por id
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const fecha = document.getElementById('fecha');
const duracion = document.getElementById('duracion')
const diaSemana = document.getElementById('diaSemana');
const temprano = document.getElementById('temprano');
const guardar = document.getElementById('guardar');
const limpiar = document.getElementById('limpiar');


  // Función para validar solo letras Nombre
  function validarInput(event) {
    // Permite solo letras mayúsculas y minúsculas
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;
  
    // Verifica si el valor del input cumple con el regex
    if (!regex.test(event.target.value)) {
      // Si no cumple, elimina el último carácter ingresado
      event.target.value = event.target.value.slice(0, -1);
    }
  }
  
  // Event listener para el evento 'input'
  nombre.addEventListener('input', validarInput);
  
  // Event listener para el evento 'focus'
  nombre.addEventListener('focus', (event) => {
    // Puedes agregar lógica adicional para cuando el input esté enfocado
    console.log('Input está enfocado');
  });
  
// Función para validar solo letras Apellido
function validarInput(event) {
    // Permite solo letras mayúsculas y minúsculas
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/;
  
    // Verifica si el valor del input cumple con el regex
    if (!regex.test(event.target.value)) {
      // Si no cumple, elimina el último carácter ingresado
      event.target.value = event.target.value.slice(0, -1);
    }
  }
  
  // Event listener para el evento 'input'
  apellido.addEventListener('input', validarInput);
  
  // Event listener para el evento 'focus'
  apellido.addEventListener('focus', (event) => {
    // Puedes agregar lógica adicional para cuando el input esté enfocado
    console.log('Input está enfocado');
  });



//validar campos y activar boton guardar

email.addEventListener('focus', () => {
    email.style.color = 'red'
    email.addEventListener('input', () => {
        if (email.value.indexOf('@') < 0) {
            email.style.borderRadius = '20px'
            email.style.border = '2px solid red'
        } else {
            if(email.value.indexOf('@') > 4){
                email.style.color = 'black'
                email.removeAttribute('style')
            } else {
              email.style.borderRadius = '20px'
              email.style.border = '2px solid red'
            }
        }
    })
})

email.addEventListener('blur', () => {
    email.removeAttribute('style')
})
document.body.addEventListener('mouseover', () => {
    if(nombre.value=='' && apellido.value=='' && telefono.value=='' && email.value=='' && fecha.value==''){
        guardar.disabled='true'
    }
    if(nombre.value!=='' && apellido.value!=='' && telefono.value!=='' && email.value!=='' && fecha.value!==''){
        guardar.disabled=''
    }
    if(nombre.value=='' || apellido.value=='' || telefono.value=='' || email.value=='' || fecha.value==''){
        guardar.disabled='true'
    }

})
