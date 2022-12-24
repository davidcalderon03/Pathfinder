function encrypt(input) { 
    let key0 = "J*}h&7~d_+"; //shift the keys by this amount //constant for now
    let key1 = ""; //shift all letters by these amounts //randomized
    let key2 = ""; //shift each individual letter by the corresponding amounts //randomized
    let encrypted = "", encryptedKey1 = "", encryptedKey2 = "";
 
    for(var i = 0; i < 10; i++) { //create random keys
       let a = Math.floor(Math.random() * (124 - 32) + 32);
       key1+=String.fromCharCode(a);
       let b = Math.floor(Math.random() * (124 - 32) + 32);
       key2+=String.fromCharCode(b);
    }
    for(var i = 0; i < input.length; i++) {  //encrypt the password with keys 1 and 2
       let newKey = input.charCodeAt(i) + (2 * key2.charCodeAt(i % key2.length)) + 8;
       for(var u = 0; u < key1.length; u++) {
          newKey += (key1.charCodeAt(u));
       }
       encrypted+=eResolveNumber(newKey);
    }
    for(var i = 0; i < 10; i++) { //encrypt the keys
       let j = 9 - i;
       let newKey1 = key1.charCodeAt(i) + (4 * key0.charCodeAt(j)) - 5;
       let newKey2 = key2.charCodeAt(j) + (6 * key0.charCodeAt(i)) + 18;
       encryptedKey1+=eResolveNumber(newKey1);
       encryptedKey2+=eResolveNumber(newKey2);
    }
    console.log("Input: " + input);
    console.log("Encryption: " + encrypted + "~" + encryptedKey1 + "~" + encryptedKey2);
    return encrypted + "~" + encryptedKey1 + "~" + encryptedKey2;  //~ has char code 126, will not be created in pw
 }
 
 
 function decrypt(input) {
    let key0 = "J*}h&7~d_+";
    let parts = input.split("~");
    let oldPW = parts[0], key1 = parts[1], key2 = parts[2];
    let realKey1 = "", realKey2 = "", realPW = "";
    let tempNum = 0;
    for(var i = 0; i < key1.length; i++) { //decrypt key 1
       let j = 9 - i;
       if(key1.charCodeAt(i) > 173 && key1.charCodeAt(i) < 255) {
          tempNum += (124-32);
          key1 = key1.substring(0, i) + key1.substring(i+1);
          i--;
       } else {
          tempNum += key1.charCodeAt(i);
          tempNum = tempNum + 5 - (key0.charCodeAt(j) * 4);
          realKey1 += String.fromCharCode(tempNum);
          tempNum = 0;
       }
    }
    for(var i = 0; i < key2.length; i++) { //decrypt key 2
       if(key2.charCodeAt(i) > 173 && key2.charCodeAt(i) < 255) {
          tempNum += (124-32);
          key2 = key2.substring(0, i) + key2.substring(i+1);
          i--;
       } else {
          tempNum += key2.charCodeAt(i);
          tempNum = tempNum - 18 - (key0.charCodeAt(i) * 6);
          realKey2 = String.fromCharCode(tempNum) + realKey2; //key2 was generated backwards and has to be re-generated backwards
          tempNum = 0;
       }
    }
    tempNum = 0;
    for(var i = 0; i < oldPW.length; i++) {
       if(oldPW.charCodeAt(i) > 173 && oldPW.charCodeAt(i) < 255) {
          tempNum += (124 - 32);
          oldPW = oldPW.substring(0, i) + oldPW.substring(i + 1);
          i--;
       } else {
          tempNum += oldPW.charCodeAt(i);
          tempNum = tempNum - 8 - (2 * realKey2.charCodeAt(i % key2.length));
          for(var u = 0; u < realKey1.length; u++) {
             tempNum -= (realKey1.charCodeAt(u));
          }
          realPW += String.fromCharCode(tempNum);
          tempNum = 0;
       }
    }
    console.log("Encrypted: " + input);
    console.log("Decrypted: " + realPW);
    return realPW;
 }
 
 
 function eResolveNumber(num) {
    let toReturn ="";
    while(num > 124) {
       // toReturn+="}";
       toReturn+=String.fromCharCode(Math.floor(Math.random() * (254 - 174) + 174));  //random char that is not normally created
       num -= (124-32);
    }
    toReturn+=String.fromCharCode(num);
    // console.log(num > 31 && num < 125);
    return toReturn;
 }

 module.exports = { encrypt, decrypt };