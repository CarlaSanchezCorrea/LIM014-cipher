  
const cipher = {
    encode: function(offSet,encode){ /*To encrypt*/    
        /*console.log(typeof offSet, typeof encode)*/
        if(offSet=== 0 || offSet== null){
            throw TypeError()
        }
        let resultado = "";
        for (let i = 0; i < encode.length; i++) { /*Loops throughh each letter of the "input"*/
                if (encode.charCodeAt(i) == 32) /*If there is blank space === charCodeAte(32)"*/
                resultado += String.fromCharCode(32) /*So on "output" skipped "" */
                else {
                    let ascii = (encode.charCodeAt(i) + offSet -65) %26 +65; /*Numb.AsciiOriginal + Shift*/
                    if (ascii > 122) 
                         ; /*Caesar Cipher's formula* Encrypted*/
                        resultado += String.fromCharCode(ascii); /*Concatenate letter by letter*/            
                    }
        }
        return resultado; 
    } ,



    decode: function(offSet,decode){ /*To encrypt*/    
        /*console.log(typeof offSet, typeof encode)*/
        if(offSet=== 0 || offSet== null){
            throw TypeError()
        }
        let resultado = "";
        for (let i = 0; i < decode.length; i++) { /*Loops throughh each letter of the "input"*/
                if (decode.charCodeAt(i) == 32) /*If there is blank space === charCodeAte(32)"*/
                resultado += String.fromCharCode(32) /*So on "output" skipped "" */
                else {
                    let ascii = (decode.charCodeAt(i) - offSet +65) %26 +65; /*Numb.AsciiOriginal + Shift*/
                    if (ascii > 122) 
                         ; /*Caesar Cipher's formula* Encrypted*/
                        resultado += String.fromCharCode(ascii); /*Concatenate letter by letter*/            
                    }
        }
        return resultado; 
        } 
    };
  



  export default cipher;
