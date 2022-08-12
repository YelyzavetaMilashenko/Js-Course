// № 5 
let str1 = ['Hello', 'Hello world', 
           'Hello my friend'];

let lgth1=0;
function maxString (str) {
for(let i=0; i < str.length; i++){
    if(str[i].length > lgth1){
        lgth1 = str[i].length;
    }      
} return lgth1;
 }
   console.log(maxString(str1) )
