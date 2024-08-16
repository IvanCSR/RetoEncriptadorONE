
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const txtEncriptar = document.getElementById('textoEncriptar');
const textoAviso = document.getElementById('mensajeAviso');
const txtrespuesta = document.getElementById('txtResultado');
const contenidoTarjetaContainer = document.getElementById('tarjeta');
const btnCopiar = document.getElementById('btnCopiar');

let expresionRegular = /^[a-z\s]+$/;

txtEncriptar.addEventListener('focus', (e) => {
    textoAviso.textContent = "Sólo letras minúsculas y sin acentos...";
    textoAviso.style.color="#67808e";
  });
//Boton de accion encriptar
btnEncriptar.addEventListener('click', e=> {
    e.preventDefault();
    let valorTexto = txtEncriptar.value;
    if(valorTexto == "") {     
        textoAviso.style.color = "#CD6D58";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El campo de texto no debe estar vacío";       
    } else if(!expresionRegular.test(valorTexto)) {        
        textoAviso.style.color = "#CD6D58";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El texto no debe tener acentos ni caratéres especiales...";    
    } else {
        valorTexto = valorTexto.replace(/e/mg, 'enter');
        valorTexto = valorTexto.replace(/i/mg, 'imes');
        valorTexto = valorTexto.replace(/a/mg, 'ai');
        valorTexto = valorTexto.replace(/o/mg, 'ober');
        valorTexto = valorTexto.replace(/u/mg, 'ufat');
        txtrespuesta.innerHTML = valorTexto;
        btnCopiar.style.visibility = 'inherit';
        contenidoTarjetaContainer.remove();
    }
});
//Boton de accion desencriptar
btnDesencriptar.addEventListener('click', e=> {
    e.preventDefault();
    let valorTexto = txtEncriptar.value;
    if(valorTexto == "") {   
        textoAviso.style.color = "#CD6D58";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El campo de texto no debe estar vacío";        
    } else if(!expresionRegular.test(valorTexto)) {        
        textoAviso.style.color = "#CD6D58";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El texto no debe tener acentos ni caratéres especiales...";
    } else {
        valorTexto = valorTexto.replace(/enter/mg, 'e');
        valorTexto = valorTexto.replace(/imes/mg, 'i');
        valorTexto = valorTexto.replace(/ai/mg, 'a');
        valorTexto = valorTexto.replace(/ober/mg, 'o');
        valorTexto = valorTexto.replace(/ufat/mg, 'u');
        txtrespuesta.innerHTML = valorTexto;
        btnCopiar.style.visibility = 'inherit';
        contenidoTarjetaContainer.remove();
    }
});
//Boton de accion copiar
btnCopiar.addEventListener('click', e=> {
    e.preventDefault();
    let copiarTexto = document.getElementById('txtResultado').value;
    navigator.clipboard.writeText(copiarTexto);
    alert('Texto Copiado');
});