/*Obtener valor del texto a ingresar*/
var start = function (){
    var texto = document.getElementById('input').value;
/*Enviar TEXTO A INGRESAR -> OUTPUT*/   
    document.getElementById('output').value =texto;
};


/*Obtener valor del shift*/
var shift = function (){
    var clave = document.getElementById('key').value;
   
    console.log(clave);
};
/*Cambiar cuando escoga BOTON ENCRYT & Oculta DECRYT*/
function encrypt(){
    var optionEncrypt = document.getElementById('encrypt');
    var optionDecrypt = document.getElementById('decrypt');
    optionDecrypt.innerHTML = '';
    optionEncrypt.innerHTML = 'Encrypted';
};
/*Cambiar cuando escoga BOTON DECRYT & Oculta ENCRYT*/
function decrypt(){
    var optionDecrypt = document.getElementById('decrypt');
    var optionEncrypt = document.getElementById('encrypt');
    optionEncrypt.innerHTML = '';
    optionDecrypt.innerHTML = 'Decrypted';
};
/*Enviar TEXTO A INGRESAR -> OUTPUT*/

