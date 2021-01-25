  
const cipher = {
    encode: function(offSet,encode){ /*To encrypt*/
    let originalTxt = document.getElementById('input'); /*Gets the value of the input*/
    let cipheredTxt = document.getElementById('output'); /*Gets the value of the output*/
    let key = document.getElementById('key'); /*Gets the value of the shift*/
    let encBtn = document.getElementById('enc'); /*Gets the value of the button Encrypt*/
    let decBtn = document.getElementById('dec'); /*Gets the value of the button Decryt*/
    cipheredTxt.value = "";  /*'Output' blank*/ 
        
        for (let i = 0; i < originalTxt.value.length; i++) { /*Loops throughh each letter of the "input"*/
                if (originalTxt.value.charCodeAt(i) == 32) /*If there is blank space === charCodeAte(32)"*/
                    cipheredTxt.value += String.fromCharCode(32) /*So on "output" skipped "" */
                else {
                    let ascii = originalTxt.value.charCodeAt(i) + Number(key.value); /*Numb.AsciiOriginal + Shift*/
                    if (ascii > 122) 
                        ascii = (ascii-65) % 26 + 65; /*Caesar Cipher's formula* Encrypted*/
                        cipheredTxt.value += String.fromCharCode(ascii); /*Concatenate letter by letter*/            
            }
        }
        return cipheredTxt;
    } ,



        decode: function(offSet,decode){ /*To decrypt*/
        let originalTxt = document.getElementById('input'); /*Gets the value of the input*/
        let cipheredTxt = document.getElementById('output'); /*Gets the value of the output*/
        let key = document.getElementById('key'); /*Gets the value of the shift*/
        let encBtn = document.getElementById('enc'); /*Gets the value of the button Encrypt*/
        let decBtn = document.getElementById('dec'); /*Gets the value of the button Decryt*/
        cipheredTxt.value = "";  
            
            for (let i = 0; i < originalTxt.value.length; i++) { /*Loops throughh each letter of the "input"*/
                    if (originalTxt.value.charCodeAt(i) == 32) /*If there is blank space === charCodeAte(32)"*/
                        cipheredTxt.value += String.fromCharCode(32) /*So on "output" skipped "" */
                    else {
                        let ascii = originalTxt.value.charCodeAt(i) - Number(key.value); /*Numb.AsciiOriginal + Shift*/
                        if (ascii > 122) 
                            ascii = ((ascii-65) % 26) + 65; /*Caesar Cipher's formula Decryted*/
                            cipheredTxt.value += String.fromCharCode(ascii); /*Concatenate letter by letter*/            
                }
            }
            return cipheredTxt;
        } 
    };
  



  export default cipher;



