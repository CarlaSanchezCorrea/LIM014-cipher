  
import cipher from './cipher.js';

    let originalTxt = document.getElementById('input'); /*Gets the value of the input*/
    let cipheredTxt = document.getElementById('output'); /*Gets the value of the output*/
    let key = document.getElementById('key'); /*Gets the value of the shift*/   
    let encBtn = document.getElementById('enc'); /*Gets the value of the button Encrypt*/
    let decBtn = document.getElementById('dec'); /*Gets the value of the button Decryt*/
    let text = ""; /*'Output' blank*/ 
    let offSet = Number(key.value)

    encBtn.addEventListener('click', function () {  /*To Button Encryt*/ 
        let encode1 = originalTxt.value; 
        let encode= encode1.toUpperCase(); 
        /*let offSet = Number(key.value);*/
        /*let  resultado =cipheredTxt.value;*/
        text = cipher.encode(offSet,encode);
        /*resultado = text;*/
        console.log(text) ;
        cipheredTxt.value = text;   
     }, true);


     decBtn.addEventListener('click', function () { /*To Button Decrypt*/
         let encode1 = originalTxt.value; 
         let decode= encode1.toUpperCase(); 
         /*let offSet = Number(key.value);*/
         /*let  resultado =cipheredTxt.value;*/
         text = cipher.decode(offSet,decode);
         /*resultado = text;*/
         console.log(text) ;
         cipheredTxt.value = text;
      }, false);