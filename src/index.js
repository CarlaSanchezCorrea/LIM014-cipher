import cipher from './cipher.js';

console.log(cipher);
    let originalTxt = document.getElementById('input'); /*Gets the value of the input*/
    let cipheredTxt = document.getElementById('output'); /*Gets the value of the output*/
    let key = document.getElementById('key'); /*Gets the value of the shift*/   
    let encBtn = document.getElementById('enc'); /*Gets the value of the button Encrypt*/
    let decBtn = document.getElementById('dec'); /*Gets the value of the button Decryt*/
    let text = ""; /*'Output' blank*/ 

    encBtn.addEventListener('click', function (e) {  /*To Button Encryt*/ 
        let encode = originalTxt.value;  
        let offSet = Number(key.value); 
        text = cipher.encode(offSet,encode);
        document.getElementById("output").innerHTML = text;

        
     }, false);


     decBtn.addEventListener('click', function (e) { /*To Button Decrypt*/
        let decode = originalTxt.value;
        let offSet = Number(key.value); 
        text = cipher.decode(offSet,decode);
        document.getElementById("output").innerHTML = text;

        
     }, false);
     

